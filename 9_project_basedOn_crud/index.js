const express = require("express");
const { connected } = require("process");
const app = express();
const {Auth} = require("./middleware/auth")


app.use(express.json());
// CRUD: Create Read Update Delete   

// Database: array
const FoodMenu = [
    {id:1, food:"chowmin", category:"veg", price:500},
    {id:2, food:"Butter Naan", category:"veg", price:100},
    {id:3, food:"Chicken", category:"non-veg", price:1000},
    {id:4, food:"Mutton", category:"non-veg", price:1500},
    {id:5, food:"Momo", category:"veg", price:300},
    {id:6, food:"chai", category:"veg", price:50},
    {id:7, food:"Rajma", category:"veg", price:300},
    {id:8, food:"Roti", category:"veg", price:20},
    {id:9, food:"Lolipop", category:"non-veg", price:700},
    {id:10, food:"Kabak", category:"non-veg", price:400},
    {id:11, food:"Paneer", category:"veg", price:800},
    {id:12, food:"Egg Curry", category:"non-veg", price:300},
    {id:13, food:"Salad", category:"veg", price:100},
    {id:14, food:"Showarma", category:"non-veg", price:300},
    {id:15, food:"Butter Chicken", category:"non-veg", price:900},
    {id:16, food:"Mushroo", category:"veg", price:700},
]

const AddToCart = [];  // user ka jo bhi food hogis, wo idhar jaigesh.

app.get("/food", (req, res) => {
    res.status(200).send(FoodMenu);
})


/// Authentication admin here---------------
// app.use("/admin", Auth);


app.post("/admin", Auth, (req, res) => { // explore Authentication and Authorization...
        FoodMenu.push(req.body);
        res.status(201).send("Item Added Succesfully");
})

app.delete("/admin/:id", Auth, (req, res) => {
        const id = parseInt(req.params.id);
        const index = FoodMenu.findIndex(item => item.id === id);

        if(index == -1){
            res.send("Item doesn't exist");
        }
        else{
            FoodMenu.splice(index,1);
            res.send("Successfully Deleted");
        }
})


app.patch("/admin", Auth, (req, res) => {
        const id = req.body.id;
        const fooddata = FoodMenu.find(item => item.id === id);

        if(fooddata){
            if(req.body.food) 
                fooddata.food = req.body.food;
            if(req.body.category)
                fooddata.category = req.body.category;
            if(req.body.price)
                fooddata.price = req.body.price;
            res.send("Successfully Updates");
        }
        else{
            res.send("item not exist");
        }
})



// FOR user
app.post("/user/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const foodItem = FoodMenu.find(item => item.id === id);

    if(foodItem){
        AddToCart.push(foodItem);
        res.status(200).send("Item added successfully");
    }
    else{
        res.send("Item Out of stock");
    }
})

app.delete("/user/:id", (req, res) => {
    try{
    const id = parseInt(req.params.id);

    const index = AddToCart.findIndex(item => item.id === id);

    if(index != -1){
        AddToCart.splice(index, 1);
        res.send("Item removed successfully");
    }
    else{
        res.status(402).send("Item in not present in Cart");
    }
    }
    catch(err){
        res.send("Some error: " + err);
    }
})


app.get("/user", (req, res) => {
    if(AddToCart.length == 0)
        res.send("card is empty");
    else
    res.send(AddToCart);
})




// ERROR HANDLING--- example
app.get("/dummy", (req, res) => {
    try{
        JSON.parse("invalid json");
        res.send("Hello j");
    }
    catch(err){
        res.send("Some error occured");
    }
})
     

// question: if we can parse the json object throw JSON.parse(JSON), then why we use express.json()?




app.listen(3000, () => {
    console.log("listning on port 3000");
})



// HTTP STATUS CODE

// code   Meaning                      When to Use
// 200    OK                           Successful GET/PUT/PATCH
// 201    Created                      Resource created (POSt)
// 400    Bad Request                  Invalid client input
// 401    Unauthorized                 Authentication needed
// 403    Forbidden                    No permission
// 404    Not Found                    Resource doesn't exixt
// 500    Internal Server Error        Server side failure
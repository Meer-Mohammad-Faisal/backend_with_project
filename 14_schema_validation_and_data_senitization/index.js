const express = require("express");
const app = express();
const main = require("./database");
const User = require("./Models/users");


app.use(express.json());


app.post("/register", async (req, res) => {


    try{
        await User.create(req.body);
        res.send("User Registered Successfully"); 
    }
    catch(err){
        res.send("Error"+err.message);
    }
})

app.get("/info", async(req, res) => {
    try{
        const result = await User.find();
        res.send(result);
    }
    catch(err){
        res.send(err.message);
    }
})



main()
.then(async () =>{
    console.log("Connected to DB")
    app.listen(3000, () => {
        console.log("listning on port 3000");
    })
})
.catch((err) => console.log(err));






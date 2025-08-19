// continue BookStore project.........
const express = require("express");
const app = express();


const BookStore = [
    {id:1, name: "Harry Potter", author: "DevFlux"},
    {id:2, name: "Friends", author: "Vikas"},
    {id:3, name: "Nexus", author: "Rohit"},
    {id:4, name: "peoples", author: "faisal"},
    {id:5, name: "love", author: "meer"},
    
]

app.use(express.json());

app.get("/book", (req, res) => {  
    res.send(BookStore);
})

app.get("/book/:id", (req, res) => {

    const id = parseInt(req.params.id);
    const Book = BookStore.find(info => info.id === id);
    res.send(Book);
})

app.post("/book", (req, res) => {
    console.log(req.body);
   BookStore.push(req.body);
   res.send("data saved successfully"); 
})

app.patch("/book", (req, res) => {
   const Book = BookStore.find(info => info.id === req.body.id);
   if(req.body.author)
   Book.author = req.body.author;

   if(req.body.name)
    Book.name = req.body.name;
   res.send("data updated successfully"); 
})

app.put("/book", (req, res) => {
    const Book = BookStore.find(info => info.id === req.body.id);
    Book.author = req.body.author;
    Book.name = req.body.name;
    res.send("Changes Updated successfully.");
})


app.delete("/book/:id", (req, res) => {
   const id = parseInt(req.params.id) ;

   const index = BookStore.findIndex(info => info.id === id);
   BookStore.splice(index,1);
   res.send("data deleted successfully"); 
})







app.listen(5000, () => {
    console.log("Listning at port 5000");
})

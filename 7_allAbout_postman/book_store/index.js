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


// app.delete("/book", (req, res) => {
//     //console.log(req.body);
//    BookStore.pop(req.body);
//    res.send("data deleted successfully"); 
// })







app.listen(5000, () => {
    console.log("Listning at port 5000");
})





// route match : app.use: only should match start.(prefix match hua, chalo andar)
// but app.get, app.put, app.delete: it shoul match all the thing
// explore diffrence between app.use and app.get
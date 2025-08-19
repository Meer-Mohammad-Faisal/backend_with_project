const express = require("express");
const { log } = require("node:console");
const app = express();

// app.use("/user", (req, res) => {
//     res.send("hello coder army...");
// })

// parsing kr rha..
// like a middleware : json format data => js object
app.use(express.json());  // explore about json vs javascript object notation

app.get("/user", (req, res) => {
    console.log(req);
    
    res.send({name:"faisal"});
})

app.post("/user", (req, res) => { 
    // we can not hit post request from borwser
    // we have to use postman for post, patch, delete..(excpect get) request.


    
    console.log(req.body);
    res.send("Your request has beed accepted"); 
})


app.listen(4000, () => {
    console.log("listning on port 4000");
})


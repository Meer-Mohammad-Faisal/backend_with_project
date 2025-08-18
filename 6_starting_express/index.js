const express = require("express");

const app = express(); // creating server

// // ? for making letter optional
// app.use("/abou?t",(req,res) => {
//     res.send({"name":"faisal", "age": 20});
// });


// // + making repeate the letter
// app.use("/abou+t",(req,res) => {
//     res.send({"name":"faisal", "age": 20});
// });


// // * you can write anything after the u letter but at the end it should be t.
// app.use("/abou*t",(req,res) => {
//     res.send({"name":"faisal", "age": 20});
// });


app.use("/about",(req,res) => {
    res.send({"name":"faisal", "age": 20});
});
app.use("/about/:id/:user",(req,res) => {
    console.log(req.params); 
    res.send({"name":"faisal", "age": 20});
});
app.use("/contact",(req,res) => {
    res.send("i am your contact page");
});

app.listen(4000, () => {
    console.log("Listning at port 4000");
});

// here are default route : it shoul be at the last of all the ohter routes
// otherwise it get overriden all the route
app.use("/",(req,res) => {
    res.send("i am your home page");
});
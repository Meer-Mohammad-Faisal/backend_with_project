const express = require("express");

const app = express(); // creating server

app.use("/",(req,res) => {
    res.send("i am your home page");
});
app.use("/about",(req,res) => {
    res.send({"name":"faisal", "age": 20});
});
app.use("/contact",(req,res) => {
    res.send("i am your contact page");
});

app.listen(4000, () => {
    console.log("Listning at port 4000");
});
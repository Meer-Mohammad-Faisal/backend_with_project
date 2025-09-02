const express = require("express");
const app = express();

// ROUTE Handler...

// app.use(Router, [route handler, route handler, route handler..])
// Middleware : mw -> mw -> mw -> mw -> requestHandleer
// app.use("/user", (req, res, next) => {

//     console.log("first");
//     res.send("Hello ji...");
//     // res.send("again response(which in not possible)");
//     next();
//     console.log("sixth");
// })
// app.use("/user", (req, res, next) => {

//     console.log("second");
//     // res.send("I am second");
//     next();
// }) 

// app.use("/user", (req, res, next) => {
//     console.log("Fourth");
//     res.send("I m fourth");
    
//     //next(); // can't get user error 404
// })

// // the o/p is: first, second, third, fourth, fifth, sixth.


// use case of middleware

// maintanance logs through middleware.
app.use("/user", (req, res, next) => {
    console.log(`${Date.now()} ${req.method} ${req.url}`);
})

app.get("/user", (req, res) => {

   
    res.send("Info about user");
})

app.post("/user", (req, res) => {

   
    res.send("info saved ")
})

app.delete("/user", (req, res) => {

   
    res.send("info deleted ")
})













app.listen(5000, () => {
    console.log("Listning at port 5000");
})
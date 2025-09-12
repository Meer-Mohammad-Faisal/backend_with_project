const express = require("express");
const app = express();
const main = require("./database");
const User = require("./Models/users");
const validUser = require("./utils/validateUser");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require('jsonwebtoken');
const userAuth = require("./middleware/userAuth");
require('dotenv').config()

 
console.log(process.env);

app.use(express.json());
app.use(cookieParser());


app.post("/register", async (req, res) => {


    try{

        // API level validate 
        validUser(req.body);

        // converting passwornd into hash
        req.body.password = await bcrypt.hash(req.body.password, 11);


        await User.create(req.body);
        res.send("User Registered Successfully"); 
    }
    catch(err){
        res.send("Error "+err.message);
    }
})

app.post("/login", async (req, res) => {
    try{
        // validate kro phle ki shi daal rha ya ni

        // finding user
        const people = await User.findOne({emailId:req.body.emailId});

        // // matching email
        // if(!(req.body.emailId === people.emailId))
        //     throw new Error("Invalid credential");

        // pasword matching...
        const isAllowed = people.verifyPassword(req.body.password);

        if(!isAllowed)
            throw new Error("Invalid credentials");
        

            // jwt token:---
            const token = people.getJwt();

            res.cookie("token",token);
            res.send("Login Successfully"); 
        

    }catch(err){
        res.send("Error "+err);
    }
})



app.get("/user", userAuth, async(req, res) => {
    try{
        res.send(req.result);
    }
    catch(err){
        res.send("Error "+err.message);
    }
})

app.delete("/user/:id", userAuth, async (req, res) => {
    try{
         // authenticate the user: Token
        // code into the middleware


        await User.findByIdAndDelete(req.params.id);
        res.send("Deleted Successfully");
    }catch(err){
        res.send("Error "+err.message);
    }
})

app.patch("/user", userAuth, async (req, res) => {
    try {
        // destructuring...
        const { _id, ...update} = req.body;
        await User.findByIdAndUpdate(_id, update, {"runValidators":true});
        res.send("Update Successfull");
    }catch(err){
        res.send("error "+err.message);
    }
} )


main()
.then(async () =>{
    console.log("Connected to DB")
    app.listen(process.env.PORT, () => {
        console.log("listning on port 3000");
    })
})
.catch((err) => console.log(err));






const express = require("express");
const app = express();
const main = require("./database");
const User = require("./Models/users");
const validUser = require("./utils/validateUser");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require('jsonwebtoken');


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
        const isAllowed = bcrypt.compare(req.body.password, people.password);

        if(!isAllowed)
            throw new Error("Invalid credentials");
        

            // jwt token:---
            const token = jwt.sign({_id:people._id, emailId:people.emailId}, "Faisal@1234",{expiresIn:10});

            res.cookie("token",token);
            res.send("Login Successfully"); 
        

    }catch(err){
        res.send("Error "+err);
    }
})


app.get("/info", async(req, res) => {
    try{
        // validate the user first
        
        const payload = jwt.verify(req.cookies.token,"Faisal@1234");
        console.log(payload);
        const result = await User.find();
        
        res.send(result);
    }
    catch(err){
        res.send("Error "+err.message);
    }
})

app.get("/user", async(req, res) => {
    try{
         const payload = jwt.verify(req.cookies.token,"Faisal@1234");
        //console.log(payload);
        const result = await User.findById(payload._id);
        res.send(result);
    }catch(err){
        res.send("Error "+err.message);
    }
})

app.delete("/user/:id", async (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.send("Deleted Successfully");
    }catch(err){
        res.send("Error "+err.message);
    }
})

app.patch("/user", async (req, res) => {
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
    app.listen(3000, () => {
        console.log("listning on port 3000");
    })
})
.catch((err) => console.log(err));






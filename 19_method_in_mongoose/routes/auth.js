const express = require("express");

const validUser = require("../utils/validateUser");
const authRouter = express.Router();
const bcrypt = require("bcrypt");
const User = require("../Models/users");

// /auth/register

authRouter.post("/register", async (req, res) => {


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

authRouter.post("/login", async (req, res) => {
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
 // /auth/logout
authRouter.post("/logout", async (req, res) => {
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

module.exports = authRouter;
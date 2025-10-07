const express = require("express");

const validUser = require("../utils/validateUser");
const authRouter = express.Router();
const bcrypt = require("bcrypt");
const User = require("../Models/users");
const redisClient = require("../config/redis");
const jwt = require('jsonwebtoken');
const userAuth = require("../middleware/userAuth");


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

 // Reddis ke database mein hmko Blocked Token lake dega
authRouter.post("/logout",userAuth, async (req, res) => {
    try{
        const {token} = req.cookies;
        // console.log(token);


        if (!token) {
        return res.status(400).send("No token found. Please log in first.");
        }

        const payload = jwt.decode(token);
        if (!payload || !payload.exp) {
        return res.status(400).send("Invalid token.");
        }



        await redisClient.set(`token:${token}`, "Blocked");
        // await redisClient.expire(`token:${token}`, 1800);
        await redisClient.expireAt(`token:${token}`, payload.exp);

        // // method: expiring the cookies(clearing the cookies)
        res.cookie("token", null, { expires: new Date(Date.now()) });
        res.send("Logged out successfully");
    }catch(err){
        res.send("Error "+err);
    }
})

module.exports = authRouter;
const express = require("express");

const userAuth = require("../middleware/userAuth");
const User = require("../Models/users");



const userRouter = express.Router();




userRouter.get("/", userAuth, async(req, res) => {
    try{
        res.send(req.result);
    }
    catch(err){
        res.send("Error "+err.message);
    }
})

userRouter.delete("/:id", userAuth, async (req, res) => {
    try{
         // authenticate the user: Token
        // code into the middleware


        await User.findByIdAndDelete(req.params.id);
        res.send("Deleted Successfully");
    }catch(err){
        res.send("Error "+err.message);
    }
})

userRouter.patch("/", userAuth, async (req, res) => {
    try {
        // destructuring...
        const { _id, ...update} = req.body;
        await User.findByIdAndUpdate(_id, update, {"runValidators":true});
        res.send("Update Successfull");
    }catch(err){
        res.send("error "+err.message);
    }
} )


module.exports = userRouter;
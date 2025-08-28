const express = require("express");
const app = express();
const main = require("./database");
const User = require("./Models/users");


app.use(express.json());


app.post("/register", async (req, res) => {


    try{

        // validate kro
        const mandatoryField = ["firstName", "emailId", "age"]

        const IsAllowed = Object.keys(req.body).every((keys) => mandatoryField.includes(keys));

        if(!IsAllowed)
            throw new Error ("field Missing");


        await User.create(req.body);
        res.send("User Registered Successfully"); 
    }
    catch(err){
        res.send("Error "+err.message);
    }
})

app.get("/info", async(req, res) => {
    try{
        const result = await User.find();
        res.send(result);
    }
    catch(err){
        res.send("Error "+err.message);
    }
})

app.get("/user/:id", async(req, res) => {
    try{
        const result = await User.findById(req.params.id);
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






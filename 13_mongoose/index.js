const express = require("express");
const app = express();
const main = require("./database");
const User = require("./Models/users");


app.use(express.json());


app.get("/info", async (req, res) => {
    const ans = await User.find({});
    res.send(ans);
})

app.post("/info", async (req, res) => {
    // // first method
    // const ans = new User(req.body);
    // await ans.save();

    // second method
    try{
        await User.create(req.body);
        res.send("Successfully updated");
    }
    catch(err){
        res.status(500).send("somthing went wrong:", err);
    }
});

app.delete("/info", async (req, res) => {
    await User.deleteOne({name:"Vishal"});
    res.send("deleted");
})


app.put("/info", async (req, res) => {
    const result = await User.updateOne({name: 'Faisal'}, {age:22, city:"Bhopal"}); // pahla wala match krwaega dushra wsala update
    res.send("Updated Successfully");
})



main()
.then(async () =>{
    console.log("Connected to DB")
    app.listen(3000, () => {
        console.log("listning on port 3000");
    })

    // Find document by particular field
    const result = await User.find({name:"Faisal"});
    console.log(result);
})
.catch((err) => console.log(err));






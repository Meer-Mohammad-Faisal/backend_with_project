const mongoose = require('mongoose');
const { Schema } = mongoose;

async function main() {
    await mongoose.connect("mongodb+srv://faisal:Mdbad12o%40%40%40%40%40%40%40@codingadda.najc1k6.mongodb.net/Bookstore");

    // we can now write code...
    // creating schema...
    // const userSchema = new Schema({
    //     name:String,
    //     age:Number,
    //     city:String,
    //     gender:String
    // })

    // Model ko create === Collection create krna(Tabel create krna)
    // Class create kari hai
    //  const User = mongoose.model("user", userSchema);

    // const user1 = new User ({name: "Faisal", age:20, city:"supaul", gender:"Male"});
    // await user1.save();

    // await User.create({name:"badal", city:"Indonashia", age:"21" });

    // // for many:
    // await User.insertMany([{name:"Ipsita", age:17}, {age:23, gender:"Male"}])
    
    // finding
    // const ans = await User.find({});
    // console.log(ans);

    // // Find document by particular field
    // const result = await User.find({name:"Faisal"});
    // console.log(result);


}     

module.exports = main;
const jwt = require('jsonwebtoken');
const User = require("../Models/users");


const userAuth = async (req, res, next)=> {
    try{
        // code likhna padega, user ko authenticate kar paauon
        const {token} = req.cookies
        if(!token){
            throw new Error("token doesn't exist");
        }
        const payload = jwt.verify(token,"Faisal@1234");
        //console.log(payload);

        const {_id} = payload;
        if(!_id){
            throw new Error("ID is missing");
        }
        const result = await User.findById(_id);

        if(!result){
            throw new Error("User doesn't exist");
        }

        req.result = result;


        //console.log("User Authentication");
        next();
       
    }catch(err){
        res.send("Error "+err.message);
    }
}

module.exports = userAuth;
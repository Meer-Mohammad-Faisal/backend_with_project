const validator = require("validator");  // validator library.

function validUser(data){

const mandatoryField = ["firstName", "emailId", "age", "password"]

        const IsAllowed = mandatoryField.every((k) => Object.keys(data).includes(k));

        if(!IsAllowed)
            throw new Error ("field Missing");

        if(!validator.isEmail(data.emailId))
            throw new Error("Invalid Email");
        
        if(!validator.isStrongPassword(data.password))
            throw new Error("weak password");

        if(!(data.firstName.length >= 3 && data.firstName.length <= 20))
            throw new Error("Name should be atleast 3 character ans atmost 20");



}

module.exports = validUser;
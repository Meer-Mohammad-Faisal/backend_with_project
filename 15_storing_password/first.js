const bcrypt = require("bcrypt");

const password = "Fais@123";


async function Hahsing(){
    // hashcode + salt

    //const salt = await bcrypt.genSalt(11);
    const hashpass = await bcrypt.hash(password, 11);

    const ans = await bcrypt.compare(password, hashpass);
    
    console.log(`It gives true or false ->  ${ans}`);

    console.log(salt);
    console.log(hashpass);
}

 Hahsing(); //$2b$11$Ov3IW0D6m0TtokPnmYhmaO  (SALT -> 22 char)
// $2b$11$Ov3IW0D6m0TtokPnmYhmaOAn7f/l0ona8CmF0LEeDF.0/.POMZ2Ka (HASHING -> 31 char)


// every time when we run it will give diffrent hashcode
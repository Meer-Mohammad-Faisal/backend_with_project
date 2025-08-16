console.log("Hello I am second");

function sum(a,b){
    console.log(a + b);
}


console.log(module.exports); // empty object{}
module.exports = sum;
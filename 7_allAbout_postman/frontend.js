
// default get method
const response0 = await fetch("http://fefnef.com")


const response1 = await fetch('https://api.exapmle.com/data', {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: "faisal", age:20})
}); 

const response2 = await fetch('https://api.exapmle.com/data', {
    method: 'PATCH',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ age:20 })
}); 
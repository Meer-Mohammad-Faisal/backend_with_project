const express = require("express");
const app = express();
require("./database")

app.use(express.json());

app.listen(3000, () => {
    console.log("Listining on port 3000");
})
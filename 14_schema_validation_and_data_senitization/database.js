const mongoose = require('mongoose');
const { Schema } = mongoose;

async function main() {
    await mongoose.connect("mongodb+srv://faisal:Mdbad12o%40%40%40%40%40%40%40@codingadda.najc1k6.mongodb.net/Instagram");

}     

module.exports = main;
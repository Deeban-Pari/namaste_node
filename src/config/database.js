const mongoose = require('mongoose');


const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://deebanpari2001:zsZhPqE2LtGPH6Ku@cluster0.em9ym.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/devTinder');
};

module.exports = connectDB;

const express = require('express');
const connectDB = require('./config/database');
const user = require('./models/user');

const app = express();


app.post('/signup',(req,res)=>{
    try{
        const saveUser = new user({
            firstName : "Deeban",
            lastName : "Pari",
            emailId : "deeban@gmail.com",
            password : "Testing@123"
        });
        saveUser.save();
        res.send('User Added successfully');
    }catch(err){
        res.send("Error:",err);
    }
});


connectDB().then(()=>{
    console.log("Database Connected");
    app.listen(3000,()=>{
        console.log('Server running and listening on port 3000');
    });
}).catch(err=>{
    console.error("Error in connecting DB",err);
});
const express = require('express');
const connectDB = require('./config/database');
const user = require('./models/user');

const app = express();
app.use(express.json());

app.post('/signup',(req,res)=>{

    const saveUser = new user(req.body);
    try{
        saveUser.save();
        res.send('User Added successfully');
    }catch(err){
        res.status(400).send("Error while saving user:",err.message);
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
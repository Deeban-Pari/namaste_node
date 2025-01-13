const express = require('express');
const connectDB = require('./config/database');
const user = require('./models/user');

const app = express();
app.use(express.json());

app.post('/signup',async (req,res)=>{

    const saveUser = new user(req.body);
    try{
        saveUser.save();
        res.send('User Added successfully');
    }catch(err){
        res.status(400).send("Error while saving user:",err.message);
    }
});

app.get('/getUser',async (req,res)=>{
    const userEmail = req.body.emailId;
    //console.log(userEmail);
    try{
        const userDetails = await user.find({emailId:userEmail});
        //console.log(userDetails.length);
        if(userDetails.length === 0){
            res.status(404).send(`No user found with the mailId ${userEmail} `);
        }
        else{
            res.send(userDetails);
        }
    }catch(err){
        res.status(400).send('Something went wrong!');
    }
});

app.get('/getUsers',async (req,res)=>{
    const getUsers = await user.find({});
    try{
        res.send(getUsers);
    }catch(err){
        res.status(400).send('Error in fetching user details',err.message);
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
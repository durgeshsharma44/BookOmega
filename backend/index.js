const express=require('express');
const app=express();
const mongoose=require('mongoose')

const port=9000;

const mongoDB=require("./db");

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin',"http://localhost:3000")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.use(express.json());


app.get('/',(req,res)=>{
    res.send("hello");
})



 app.use('/api',require('./routes/createUser'))

app.listen(port,()=>{
    console.log(`listning on ${port}`)
})
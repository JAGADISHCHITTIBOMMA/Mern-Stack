//es6 style
const express = require('express');
const bodyparser = require('body-parser');
const app = express();

//how to connect frontend
app.get("/voterapp",(req,res) => {
    res.sendFile(__dirname+"/"+"vote.html");
})

//middleware logic
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))

//server logic
app.listen(4000,()=>{
    console.log("server running on port 4000");
})

//dynamic logic
app.post("/process",(req,res) => {
    ////request data gatherhig logic
    const name = req.body.name;
    const age = req.body.age;

    if(age>=18)
    {
       res.end("eligible for vote");
    }
    else{
        res.end("not eligible to vote");
    }
});


//es7 style
import express from'express';
import path from'path';
import {fileURLtopath}from 'url';
//global object logic
const__filename =fileURLtopath(import.meta.url);
const__dirname = path.dirname(__filename);

//middleware logic
app.use(express.json());
//connect to fronted
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/html/"+"voter.html");

})

//dynamic logic
app.post("/check",(req,res)=>{
    //requst data gatharing logic
    const name =req.body.name;
    const age = req.body.age;
    //business logic
    if(age>=18)

    {
        res.end(name+"you are eligible to vote");
    }
    else{
        res.end(name+"sorry your are noteligible to vote ");
    }

});

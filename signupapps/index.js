//es6 style
const express = require('express');
const app = express();
//how to connect frontend
app.get("/signup",(req,res) => {
    res.sendFile(__dirname+"/"+"signup.html");
})

//dynamic logic
app.get("/process",(req,res) => {

    ////request data gatherhig logic
    const uname = req.query.username;
    const pwd = req.query.password;
   const gender = req.query.gender;
   const address = req.query.address;
   const qua = req.query.qualification;
   
   if(true)
   {
    res.end(uname+" Thank you for registring with us"
    +" your uname is:"+uname
    +" your password is:"+pwd
    +" your gender is:"+gender
    +" your address is:"+address
    +" your qualification is:"+qua);
   }
   else{
    res.send("boss..please check once");
   }
})
//server logic
app.listen(4000,()=>{
    console.log("server running on port 4000");
})
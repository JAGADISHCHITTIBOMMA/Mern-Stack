import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
const app = express();

//global objects
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//middleware logic
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//restful logic
//to get all users
app.get("/rest/getAllUsers",(req,res) => {
    fs.readFile(__dirname+"/"+"users.json",
    (err,data) => {
        res.end(data);
    })
})

//how to get specific user info
app.get("/rest/getUserById/:id",(req,res) => {
    fs.readFile(__dirname+"/"+"users.json",
    (err,data) => {
        const users = JSON.parse(data);
        const user =  users["user"+req.params.id];
        res.end(JSON.stringify(user));
    })
})

//server logic
app.listen(4000,()=>{
    console.log("server running on port 4000!!!");
});

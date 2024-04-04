//es7 style
import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
const app = express();

//global object logic 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//server logic
app.listen(4000,()=>{
    console.log("server running on port 4000");
})

//middleware logic
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//connect to frontend
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/"+"index.html");
})

//dynamic logic
app.post("/operation",(req,res) => {
//request gathering logic
const num1 = parseInt(req.body.firstval);
const num2 = parseInt(req.body.secondval);
const btnval = req.body.calc;

//business logic
if(btnval == "Add")
{
    res.end("add is:"+(num1+num2));
}
else if(btnval == "Sub")
{
    res.end("Sub is:"+(num1-num2));
}
else if(btnval == "Mul")
{
    res.end("Mul is:"+(num1*num2));
}
else
{
    res.end("Div is:"+(num1/num2));
}
});


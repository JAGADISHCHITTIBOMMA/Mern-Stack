//dynamic logic 
app.get("/process",(req,res)=>{
    //requst data gathering logic
    const uname =req.query.username;
    const pwd = req.query.password;
})
//business logic
if((uname =="admin")&&(pwd =="admin123"))
{
    res.end(uname+"welcome to diet world");
}
else{
    res.end(uname+"please check details once");
}
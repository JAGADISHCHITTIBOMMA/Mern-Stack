//es7 logic
import express from 'express';
import User from '../model/user.js';
const router = express.Router();

//restful logic
router.post("/rest/loginUser",async(req,res)=>{
    try{
         const userinfo = await User.findOne(
            {username:req.body.username});
            if(userinfo)
            {
                const result = userinfo.password === req.body.password;
                res.json(result);
            }
            
    }
    catch(error)
    {
       res.json({"message":"user not exist"});
    }
})

export default router;
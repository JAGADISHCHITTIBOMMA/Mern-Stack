//es7 logic
import express from 'express';
import User from '../model/user.js';
const router = express.Router();

//restful logic
router.post("/rest/registerUser",async(req,res)=>{
    try
    {
       const userinfo = new User(req.body);
       const users = await userinfo.save();
       res.json(users);
    }
    catch(error)
    {
        res.status(404).json({message:error.message});
    }
})

export default router;
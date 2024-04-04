import express from 'express';
const router = express.Router();
import Employee from '../model/employee.js';

//restful logic
router.post("/rest/addEmployee",async(req,res)=>{
    try{
      //business logic
          const empinfo = new Employee(req.body);
          const newemp = await empinfo.save();
          res.json(newemp);
    }
    catch(error)
    {
       res.status(404).json({message:error.message})
    }
})
export default router;
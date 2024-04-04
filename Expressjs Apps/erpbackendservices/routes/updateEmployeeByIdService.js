//es7 logic
import express from 'express';
import Employee from '../model/employee.js';
const router = express.Router();

//restful logic
router.put("/rest/updateEmployeeById/:id",async(req,res)=>{
    try{
        const id = req.params.id;
        const newempinfo = req.body;
        const empinfo = await Employee.findByIdAndUpdate(id,newempinfo);
        res.json(empinfo);
    }
    catch(error)
    {
       res.status(404).json({message:error.message});
    }
})

export default router;
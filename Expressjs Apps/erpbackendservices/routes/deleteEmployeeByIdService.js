//es7 logic
import express from 'express';
import Employee from '../model/employee.js';
const router = express.Router();

//restful logic
router.delete("/rest/deleteEmployeeById/:id",async(req,res)=>{
    try{
        const empinfo = await Employee.findByIdAndDelete(req.params.id);
        res.json(empinfo);
    }
    catch(error)
    {
       res.status(404).json({message:error.message});
    }
})

export default router;
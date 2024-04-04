//es7 style
import express from 'express';
import Product from '../model/product.js';
const router = express.Router();

//restful logic
router.put("/rest/updateProductById/:id",async(req,res)=>{
    try{
        const id = req.params.id;
        const newproduct = req.body;
        const productinfo = await Product.findByIdAndUpdate(id,newproduct);
        res.json(productinfo);
    }
    catch(error)
    {
       res.status(404).json({message:error.message});
    }
})

export default router;
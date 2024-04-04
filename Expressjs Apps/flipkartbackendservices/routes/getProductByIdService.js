//es7 style
import express from 'express';
import Product from '../model/product.js';
const router = express.Router();

//restful logic
router.get("/rest/getProductById/:id",async(req,res)=>{
    try{
        const products = await Product.findById(req.params.id);
        res.json(products);
    }
    catch(error)
    {
       res.status(404).json({message:error.message});
    }
})

export default router;
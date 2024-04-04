//es7 logic
import express from 'express';
import Offers from '../model/Offers.js';
const router = express.Router();
//Restful logic
router.post("/rest/addOffer",async(req,res)=>{
    try{
        const offerinfo = new Offers(req.body);
        const offer = await offerinfo.save();
        res.json(offer);
    }
    catch(error)
    {
       res.status(404).json({message:error.message});
    }
})
export default router;
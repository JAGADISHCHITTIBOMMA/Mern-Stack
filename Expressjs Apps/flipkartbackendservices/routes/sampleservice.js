//es7 style
import express from 'express';
const router = express.Router();

//restful logic
router.get("/rest/getDetails",(req,res) => {
    res.end("welcome to flipkart services!!!");
})

export default router;
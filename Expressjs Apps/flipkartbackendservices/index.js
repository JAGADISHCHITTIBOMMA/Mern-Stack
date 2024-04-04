//es7 style
import express from 'express';
import mongoose from 'mongoose';
import sampleRouter from './routes/SampleService.js';
import newProductRouter from './routes/addProductService.js';
import getAllProductsRouter from './routes/getAllProductService.js'; 
import getProductByIdRouter from './routes/getProductByIdService.js';
import updateProductRouter from './routes/updateProductService.js';
import deleteProductRouter from './routes/deleteProductService.js';
import offerRouter from './routes/addOfferservice.js';
const app = express();

//middeleware logic
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//database logic
mongoose.connect("mongodb://127.0.0.1:27017/flipkartdb")
.then(()=>console.log("database connected"))
.catch((err)=>console.log(err));

//router logic
app.use("/",sampleRouter);
app.use("/flipkart/add",newProductRouter);
app.use("/flipkart/getAll",getAllProductsRouter);
app.use("/flipkart/getById",getProductByIdRouter);
app.use("/flipkart/update",updateProductRouter);
app.use("/flipkart/delete",deleteProductRouter);
app.use("/flipkart/Offer",offerRouter);

//server logic
app.listen(4000,()=>{
    console.log("server running on port 4000!!!");
})
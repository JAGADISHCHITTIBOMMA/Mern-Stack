import mongoose from "mongoose";
const productSchema = mongoose.Schema({
    pname:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

const Product = mongoose.model("products",productSchema);
export default Product;
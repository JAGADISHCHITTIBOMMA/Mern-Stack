import mongoose, { Mongoose, mongo } from "mongoose";
const offersSchema = mongoose.Schema({
    amount:
    {
        type:Number,
        required:true
    },
    reason:{
        type:String,
        required:true
    },
    bankname:{
        type:String,
        required:true
    },
    product:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Product",
      required:true
    }
})
const Offers = mongoose.model("offers",offersSchema);
export default Offers;
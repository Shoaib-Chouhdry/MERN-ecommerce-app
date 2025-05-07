import mongoose from "mongoose";

const cardschema = new mongoose.Schema({
     userId:{
          type : mongoose.Schema.Types.ObjectId,
          ref : 'User',
         required : true 
     },
     items:[
        {
          productId:{
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Product',
            required : true
          },
          quantity:{
            type : Number,
            required : true,
            min : 1
          }
        }
    ]},{timestamps:true})

const cardmodel =mongoose.model("Card",cardschema);
export default cardmodel;
// import mongoose from "mongoose";

// const productschema = new mongoose.Schema({
//      image:{
//           type:String,
             
//      },
//      title:{
//         type:String,
        
//      },
//      description: {   
//           type:String,
          
//      },
//      category: {
//         type:String,
        
//      },
//      brand: {
//         type:String,
       
//      },
//      price: {
//         type:Number,
        
//      },
//      salePrice: {
//         type: Number,
        
//      },
//      totalStock: {
//         type:Number,
        
//      },
//      stripeProductId: stripeProduct.stripeProductId,
//      stripePriceId: stripeProduct.stripePriceId,
     
// },{timestamps:true})

// const productmodel =mongoose.model("Product",productschema);
// export default productmodel;
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    brand: {
      type: String,
    },
    price: {
      type: Number,
    },
    salePrice: {
      type: Number,
    },
    totalStock: {
      type: Number,
    },
    stripeProductId: {
      type: String, // Store the Stripe Product ID as a string
    },
    stripePriceId: {
      type: String, // Store the Stripe Price ID as a string
    },
  },
  
  { timestamps: true }
);

const ProductModel = mongoose.model("Product", productSchema);
export default ProductModel;

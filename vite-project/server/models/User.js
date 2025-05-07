import mongoose from "mongoose";
const userschema = new mongoose.Schema({
     userName:{
          type:String,
          required:true,
          
     },
     email:{
        type:String,
        required:true,
        unique:true
     },
     password: {   
          type:String,
          required:true,
          
     },
     roles: {
        type:String,
        default:"user"
    },
     refreshToken: String
})

const usermodel =mongoose.model("User",userschema);
export default usermodel;
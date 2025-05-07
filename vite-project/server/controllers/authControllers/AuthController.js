import  usermodel from '../../models/User.js'
import  bcrypt  from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

 export const SignUp = async (req,res) => {

   const {name:userName,email,password} = req.body;
   console.log(req.body)
     
    try {
        const checkUser = await usermodel.findOne({email})

        // if(checkUser) return res.json({"success":false,"message":"User Already Exist"})
        if (checkUser) {
            return res.status(400).json({ success: false, message: "User Already Exist" });
          }
        const hashpassword=await bcrypt.hash(password,10);
        const result = await usermodel.create({
            userName,email,password:hashpassword
        });
        console.log(result)
        res.status(201).json({"success":true,"message":"Registration is Successful"})   
    }
    catch(err){
        res.status(500).json(err.message)
        console.log("error in register")
    }

};
export const SignIn = async(req,res)=>{
   try{
         console.log(req.body)
        const {email,password} = req.body;
         
         
        const userexist= await usermodel.findOne({email})
   
        if(!userexist){
            return res.json({success : false, message : "User doesnot exist with this email"});
        }
        const user=await bcrypt.compare(password,userexist.password)
    
        if(!user){
            return res.json({success : false, message : "Incorrrect password"});
        }
        
        const accesToken= jwt.sign({
              id: userexist._id,email:userexist.email, role: userexist.roles 
            },  
              process.env.ACCESS_TOKEN_SECRET,
              {expiresIn:"30s"}
        );
        const refreshToken=jwt.sign({
                id: userexist._id,email:userexist.email, role: userexist.roles,name:userexist.userName
            },     
                process.env.REFRESH_TOKEN_SECRET,
                {expiresIn:"1d"}
        );
        // userexist.refreshToken = refreshToken;
        // const result = await userexist.save();        

        res.cookie('token',refreshToken,{ httpOnly: true, sameSite: 'None', secure: true, maxage: 24 * 60 * 60 * 1000 })
        res.json({ message:"User Loggedin Successfully",success:true,
            user:{
               email:userexist.email,
               role:userexist.roles,
               id:userexist._id,
               name:userexist.userName
            },
            accesToken 
        });


   } catch(err){
      return  res.status(500).json("internal server error")
     }
}

// export const LogOut =(req,res) => {
//     res.clearCookie(token).json({
//         success:true,
//         message:"Logout Successfully"
//     })
// }
export const LogOut = (req, res) => {
    res.clearCookie("token", { 
        httpOnly: true, 
        sameSite: 'None', 
        secure: true 
    });
    
    return res.json({
        success: true,
        message: "Logout Successfully"
    });
};

export const AuthMiddleware =async (req,res,next) => {

    const token  = req.cookies.token ;
    if(!token) return res.status(401).json({
        message:"Unauthorized user",
        success : false
    })
    try{
    const decoded = jwt.verify(token,process.env.REFRESH_TOKEN_SECRET);
    req.user=decoded;
    next()
    } catch(err){
        res.status(401).json({
            message:"Unauthorized user",
            success : false
        })
    }
}
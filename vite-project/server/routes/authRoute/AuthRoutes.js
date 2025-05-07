import express from "express";
import { SignIn, SignUp,LogOut,AuthMiddleware} from '../../controllers/authControllers/AuthController.js'
const router =express.Router();

router.post("/register",SignUp);
router.post("/signin",SignIn);
router.post("/logout",LogOut);
router.get("/checkauth",AuthMiddleware,(req,res)=>{
     const user = req.user
     res.status(200).json({
        success:true,
        message:"Authenticated User",
        user
     })

})


export default router;
import express from "express";
import { handleImageUpload,deleteProduct,addProduct,fetchAllProduct,editProduct} from "../../controllers/adminControllers/AdminProductController.js";
import { upload} from "../../cloudinary/Cloudinary.js"
const router =express.Router();

router.post("/uploadimage",upload.single("myfile"),handleImageUpload);
router.post("/add",addProduct);
router.put("/edit/:id",editProduct);
router.delete("/delete/:id",deleteProduct);
router.get("/get",fetchAllProduct);




export default router;
import express from "express";
import { addToCard , fetchCardItems , deleteCardItem , updateCardItemQuantity } from "../../controllers/shopControllers/ShopCardController.js"
const router =express.Router();


router.post("/add",addToCard);
router.get("/get/:userId",fetchCardItems)
router.put("/update",updateCardItemQuantity)
router.delete("/:userId/:productId",deleteCardItem)
// router.post("/checkout",checkOut)

export default router;
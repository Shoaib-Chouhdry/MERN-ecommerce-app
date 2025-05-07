import express from "express";
import { placeOrder, userOrder, allOrders, updateOrderStatus } from "../../controllers/shopControllers/OrderController.js";

const router = express.Router();

router.route("/place_order").post(placeOrder);
router.route("/").get(userOrder);
router.route("/all_orders").get(allOrders);
router.route("/update_status/:id").put(updateOrderStatus);

export default router;

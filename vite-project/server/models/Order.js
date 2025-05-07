import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    orderId: { type: String, unique: true },
    paymentId: { type: String },
    address: { type: String, required: true },
    mobile: { type: Number, required: true },
    products: [
      {
        productId: { type: String, required: true },
        title: { type: String },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        new_price: { type: Number },
      },
    ],
    totalAmount: { type: Number, required: true },
    Date: { type: String },
    status: {
      type: String,
      enum: ["pending", "shipped", "delivered"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;

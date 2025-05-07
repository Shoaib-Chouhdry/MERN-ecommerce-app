import Stripe from "stripe";
import Order from "../../models/Order.js";
import dotenv from "dotenv";
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create Order
// export const placeOrder = async (req, res) => {
//   try {
//     const userId = req.id;
//     console.log(req.body)
//     const { address, city, state, zip, mobile, products, totalAmount } = req.body;

//     const lineItems = products.map((product) => ({
//       price_data: {
//         currency: "usd",
//         product_data: {
//           name: product.title,
//           description: `Quantity: ${product.quantity}`,
//           images: [product.image],
//         },
//         unit_amount: Math.round(product.new_price * 100),
//       },
//       quantity: product.quantity,
//     }));

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: lineItems,
//       mode: "payment",
//       success_url: `${process.env.ORDER_SUCCESS_URL}`,
//     });

//     const order = new Order({
//       userId,
//       orderId: session.id,
//       paymentId: session.payment_intent,
//       address,
//       city,
//       state,
//       zip,
//       mobile,
//       products,
//       totalAmount,
//       Date: new Date(),
//       status: "pending",
//     });

//     await order.save();

//     res.status(201).json({
//       success: true,
//       message: "Order placed successfully",
//       order,
//       url: session.url,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: `Error ${error} while creating order`,
//     });
//   }
// };
export const placeOrder = async (req, res) => {
    try {
      const userId = req.id;
      console.log("Order Request Body:", req.body);
  
      const { address, city, state, zip, mobile, products, totalAmount } = req.body;
  
      if (!products || products.length === 0) {
        return res.status(400).json({ success: false, message: "No products in cart." });
      }
  
      // Prepare Stripe line items
      const lineItems = products.map((product) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: product.title || "Unnamed Product",
            description: `Quantity: ${product.quantity}`,
            images: product.image ? [product.image] : [],
          },
          unit_amount: Math.round((product.new_price || product.price || 0) * 100),
        },
        quantity: product.quantity || 1,
      }));
  
      // Create Stripe Checkout Session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: 'http://localhost:5173/shop/success',
        cancel_url: 'http://localhost:5173/shop/cancel'
      });
  
      // Save order to DB
      const order = new Order({
        userId,
        orderId: session.id,
        paymentId: session.payment_intent || null,
        address,
        city,
        state,
        zip,
        mobile,
        products,
        totalAmount,
        date: new Date(),
        status: "pending",
      });
  
      await order.save();
  
      res.status(201).json({
        success: true,
        message: "Order placed successfully",
        order,
        url: session.url, // Redirect user to Stripe Checkout
      });
    } catch (error) {
      console.error("Error while creating order:", error);
      res.status(500).json({
        success: false,
        message: `Error: ${error.message} while creating order`,
      });
    }
  };
// Get user order
export const userOrder = async (req, res) => {
  try {
    const userId = req.id;
    const orders = await Order.find({ userId });

    res.status(201).json({
      success: true,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error ${error} while getting order`,
    });
  }
};

// Get all orders
export const allOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    if (orders) {
      res.status(201).json({
        success: true,
        orders,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error ${error} while getting orders`,
    });
  }
};

// Update order status
export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["pending", "shipped", "delivered"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const order = await Order.findByIdAndUpdate(id, { status }, { new: true });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json({
      success: true,
      message: "Order updated successfully",
      order,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Error : ${error} while updating order status`,
    });
  }
};


// import React, { useContext } from "react";
// import { CartContext } from "@/components/shoppingView/CardContext";
// import { useForm } from "react-hook-form";

// const ShoppingCheckout = () => {
//   const { cartItems, removeItem } = useContext(CartContext);

//   // Debugging Log
//   console.log("Cart Items in Checkout:", cartItems);

//   // Calculate total price and quantity safely
//   const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
//   const totalCartPrice = cartItems.reduce(
//     (sum, item) => sum + ((item.new_price || item.price) * item.quantity),
//     0
//   );

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     mode: "onTouched",
//     defaultValues: { paymentMethod: "cod" },
//   });

//   const onSubmit = (data) => {
//     const orderData = {
//       ...data,
//       totalAmount: totalCartPrice,
//       products: cartItems.map(({ _id, title, new_price, price, quantity, image }) => ({
//         productId: _id,
//         title,
//         price: new_price || price, // Ensure correct price is sent
//         quantity,
//         image,
//       })),
//     };

//     console.log("Order Placed:", orderData);
//     cartItems.forEach((item) => removeItem(item._id)); // Clear cart after placing order
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="flex flex-col lg:flex-row max-w-4xl mx-auto py-16 gap-5"
//     >
//       <div className="w-full max-w-xl mx-auto">
//         <div className="p-8 shadow-md">
//           <h1 className="text-2xl font-bold mb-4">Checkout</h1>
//           <div className="mb-6">
//             <h2 className="text-xl font-semibold mb-2">Shipping Address</h2>
//             <div>
//               <label htmlFor="address" className="block mb-1">Address</label>
//               <input
//                 type="text"
//                 id="address"
//                 className="w-full border py-2 px-3 border-gray-300 focus:border-gray-500 outline-none"
//                 {...register("address", { required: "This field is required" })}
//               />
//               {errors.address && (
//                 <span className="text-sm text-red-500">{errors.address.message}</span>
//               )}
//             </div>
//             <div className="mt-4">
//               <label htmlFor="mobile" className="block mb-1">Mobile</label>
//               <input
//                 type="number"
//                 id="mobile"
//                 className="w-full border py-2 px-3 border-gray-300 focus:border-gray-500 outline-none"
//                 {...register("mobile", {
//                   required: "This field is required",
//                   pattern: {
//                     value: /^[0-9]{10}$/,
//                     message: "Please enter a valid 10-digit mobile number",
//                   },
//                 })}
//               />
//               {errors.mobile && (
//                 <span className="text-sm text-red-500">{errors.mobile.message}</span>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mx-auto space-y-6 lg:mt-0 w-lg">
//         <div className="space-y-4 bg-gray-100 p-4 shadow-sm sm:p-6">
//           <p className="text-xl font-semibold text-gray-800">Order Summary</p>
//           <div className="space-y-4">
//             <dl className="flex items-center justify-between gap-4">
//               <dt className="text-base font-normal">Quantity</dt>
//               <dd className="text-base font-medium">{totalQuantity}</dd>
//             </dl>
//             <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
//               <dt className="text-base font-bold">Total Price</dt>
//               <dd className="text-base font-bold">${totalCartPrice.toFixed(2)}</dd>
//             </dl>
//           </div>
//           <button
//             type="submit"
//             className="w-full cursor-pointer border border-black hover:bg-black hover:text-white transition duration-300 px-5 py-2.5 text-sm font-medium text-black bg-white focus:outline-none"
//           >
//             Place Order
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default ShoppingCheckout;
import React, { useContext } from "react";
import { CartContext } from "../../components/shoppingView/CardContext";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../../store/shopSlice/OrderSlice";

const CheckOut = () => {
  const { cartItems, removeItem } = useContext(CartContext);
  const { url } = useSelector((state) => state.orderSlice) || {};
  const dispatch = useDispatch();

  // Debugging: Check cart items
  console.log("Cart Items:", cartItems);

  // Ensure cartItems is not undefined before using reduce
  const totalQuantity = cartItems?.reduce((acc, item) => acc + (item.quantity || 0), 0) || 0;
  const totalCartPrice = cartItems?.reduce(
    (acc, item) => acc + ((item.new_price || item.price || 0) * (item.quantity || 0)),
    0
  ) || 0;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: { paymentMethod: "cod" },
  });

  const onSubmit = async (data) => {
    if (!cartItems || cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const products = cartItems.map((item) => ({
      productId: item._id,
      title: item.title,
      price: item.new_price || item.price, // Ensure correct price is sent
      quantity: item.quantity,
      image: item.image,
    }));

    const orderData = {
      ...data,
      totalAmount: totalCartPrice,
      products,
    };

    await dispatch(placeOrder(orderData));
    cartItems.forEach((item) => removeItem(item._id));
  };

  if (url) {
    window.location.href = url;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:flex-row max-w-4xl mx-auto py-16 gap-5">
      <div className="w-full max-w-xl mx-auto">
        <div className="p-8 shadow-md">
          <h1 className="text-2xl font-bold mb-4">Checkout</h1>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Shipping Address</h2>
            <div>
              <label htmlFor="address" className="block mb-1">Address</label>
              <input
                type="text"
                id="address"
                className="w-full border py-2 px-3 border-gray-300 focus:border-gray-500 outline-none"
                {...register("address", { required: "This field is required" })}
              />
              {errors.address && <span className="text-sm text-red-500">{errors.address.message}</span>}
            </div>
            <div className="mt-4">
              <label htmlFor="mobile" className="block mb-1">Mobile</label>
              <input
                type="number"
                id="mobile"
                className="w-full border py-2 px-3 border-gray-300 focus:border-gray-500 outline-none"
                {...register("mobile", {
                  required: "This field is required",
                  pattern: {
                    value: /^\d{10}$/, // Ensures a valid 10-digit number
                    message: "Please enter a valid 10-digit mobile number",
                  },
                })}
              />
              {errors.mobile && <span className="text-sm text-red-500">{errors.mobile.message}</span>}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto space-y-6 lg:mt-0 w-lg">
        <div className="space-y-4 bg-gray-100 p-4 shadow-sm sm:p-6">
          <p className="text-xl font-semibold text-gray-800">Order Summary</p>
          <div className="space-y-4">
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal">Quantity</dt>
              <dd className="text-base font-medium">{totalQuantity}</dd>
            </dl>
            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
              <dt className="text-base font-bold">Total Price</dt>
              <dd className="text-base font-bold">${totalCartPrice.toFixed(2)}</dd>
            </dl>
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer border border-black hover:bg-black hover:text-white transition duration-300 px-5 py-2.5 text-sm font-medium text-black bg-white focus:outline-none"
          >
            Pay Online
          </button>
        </div>
      </div>
    </form>
  );
};

export default CheckOut;

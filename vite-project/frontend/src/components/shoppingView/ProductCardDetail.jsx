

// import { Minus, Plus, Trash } from "lucide-react";
// import React, { useContext } from "react";
// import Modal from "react-modal";
//  import { useDispatch, useSelector } from "react-redux";
// // import { CartContext } from './CartContext';

// const ProductCardDetails = ({ isOpen, onClose, cart, checkOut }) => {

//   if (!cart || !cart.items || cart.items.length === 0) {

    

//     return (
//       <Modal
//         isOpen={isOpen}
//         onRequestClose={onClose}
//         contentLabel="Product Details"
//         className="bg-white p-6 rounded-lg shadow-xl w-[90%] sm:w-[50%] md:w-[40%] lg:w-[35%] xl:w-[30%] max-h-[80vh] overflow-auto relative"
//         overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//       >
//         <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl" onClick={onClose}>
//           ✖
//         </button>
//         <h2 className="text-xl font-semibold text-gray-800 text-center">Your Cart is Empty</h2>
//       </Modal>
//     );
//   }

//               // const cart=    useContext(CartContext)




//    const dispatch =useDispatch()
//    const {user}   =useSelector(state => state.auth)

//   function handleDelete(getproduct) {
//     console.log(getproduct)
//     dispatch(deleteCardItem({userId : user?.id,productId : getproduct?.productId})).then((data)=>console.log(data))
//   }

//   const totalCost = cart.items.reduce((total, item) => {
//     return total + (item.salePrice > 0 ? item.salePrice : item.price) * item.quantity;
//   }, 0);

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       contentLabel="Product Details"
//       className="bg-white p-6 rounded-lg shadow-xl w-[90%] sm:w-[50%] md:w-[40%] lg:w-[35%] xl:w-[30%] max-h-[80vh] overflow-auto relative"
//       overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//     >
//       {/* Close Button */}
//       <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl" onClick={onClose}>
//         ✖
//       </button>

//       <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Your Cart</h2>

//       <div className="space-y-4">
//         {cart.items.map((product) => (
//           <div key={product.productId} className="flex items-center space-x-4 border-b pb-2">
//             <img src={product.image} alt="Product" className="w-16 h-16 object-cover rounded-lg shadow" />
//             <div className="flex flex-1 justify-between  items-center">
//               <div >
//               <p className="text-lg font-medium text-gray-700">{product?.title || "Product Title"}</p>
//               <div className="flex items-center gap-2 mt-1">
//                 <button className="h-8 w-8 rounded full">
//                   <Minus className="w-4 h-4"/>
//                 </button>
//                 <span className="font-semibold"> {product.quantity} </span>
//                 <button className="h-8 w-8 rounded full">
//                   <Plus className="w-4 h-4"/>   
//                 </button>
//               </div>
//               {/* <p className="text-sm text-gray-500">Quantity: {product.quantity}</p> */}
//               </div>
//               <div>
//               <p className="text-sm text-gray-500">
//                 Price: <span className="font-semibold">${product.salePrice > 0 ? product.salePrice * product.quantity : product.price * product.quantity}</span>
//               </p>
//               <Trash className="cursor-pointer mt-1 " size={20}
//               onClick={()=>handleDelete(product)}
//               />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Total Price and Purchase Button */}
//       <div className="mt-6 text-center">
//         <h3 className="text-xl font-semibold text-gray-800">Total: <span className="text-indigo-600">${totalCost.toFixed(2)}</span></h3>
//         <button
//           className="bg-indigo-500 text-white w-full py-2 mt-4 rounded-lg hover:bg-indigo-600 transition shadow-md"
//           onClick={checkOut}
//         >
//           Purchase Items!
//         </button>
//       </div>
//     </Modal>
//   );
// };

// export default ProductCardDetails;


// import { Minus, Plus, Trash } from "lucide-react";
// import React, { useContext } from "react";
// import Modal from "react-modal";

// //  import { useDispatch, useSelector } from "react-redux";
//  import { CartContext } from './CardContext';

// const ProductCardDetails = ({ isOpen, onClose,  checkOut }) => {

//   const cart = useContext(CartContext);
//   if (!cart || !cart.items || cart.items.length === 0) {

//     return (
//       <Modal
//         isOpen={isOpen}
//         onRequestClose={onClose}
//         contentLabel="Product Details"
//         className="bg-white p-6 rounded-lg shadow-xl w-[90%] sm:w-[50%] md:w-[40%] lg:w-[35%] xl:w-[30%] max-h-[80vh] overflow-auto relative"
//         overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//       >
//         <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl" onClick={onClose}>
//           ✖
//         </button>
//         <h2 className="text-xl font-semibold text-gray-800 text-center">Your Cart is Empty</h2>
//       </Modal>
//     );
//   }







//   const totalCost = cart.items.reduce((total, item) => {
//     return total + (item.salePrice > 0 ? item.salePrice : item.price) * item.quantity;
//   }, 0);

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       contentLabel="Product Details"
//       className="bg-white p-6 rounded-lg shadow-xl w-[90%] sm:w-[50%] md:w-[40%] lg:w-[35%] xl:w-[30%] max-h-[80vh] overflow-auto relative"
//       overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//     >
//       {/* Close Button */}
//       <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl" onClick={onClose}>
//         ✖
//       </button>

//       <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Your Cart</h2>

//       <div className="space-y-4">
//         {cart.items.map((product) => (
//           <div key={product.productId} className="flex items-center space-x-4 border-b pb-2">
//             <img src={product.image} alt="Product" className="w-16 h-16 object-cover rounded-lg shadow" />
//             <div className="flex flex-1 justify-between  items-center">
//               <div >
//               <p className="text-lg font-medium text-gray-700">{product?.title || "Product Title"}</p>
//               <div className="flex items-center gap-2 mt-1">
//                 <button className="h-8 w-8 rounded full">
//                   <Minus className="w-4 h-4"/>
//                 </button>
//                 <span className="font-semibold"> {product.quantity} </span>
//                 <button className="h-8 w-8 rounded full">
//                   <Plus className="w-4 h-4"/>   
//                 </button>
//               </div>
//               {/* <p className="text-sm text-gray-500">Quantity: {product.quantity}</p> */}
//               </div>
//               <div>
//               <p className="text-sm text-gray-500">
//                 Price: <span className="font-semibold">${product.salePrice > 0 ? product.salePrice * product.quantity : product.price * product.quantity}</span>
//               </p>
//               <Trash className="cursor-pointer mt-1 " size={20}
//               onClick={()=>cart.deleteFromCart(product.productId)}
//               />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Total Price and Purchase Button */}
//       <div className="mt-6 text-center">
//         <h3 className="text-xl font-semibold text-gray-800">Total: <span className="text-indigo-600">${totalCost.toFixed(2)}</span></h3>
//         <button
//           className="bg-indigo-500 text-white w-full py-2 mt-4 rounded-lg hover:bg-indigo-600 transition shadow-md"
//           onClick={checkOut}
//         >
//           Purchase Items!
//         </button>
//       </div>
//     </Modal>
//   );
// };

// export default ProductCardDetails;

// import { Minus, Plus, Trash } from "lucide-react";
// import React, { useContext } from "react";
// import Modal from "react-modal";
// import { CartContext } from './CardContext';

// const ProductCardDetails = ({ isOpen, onClose, checkOut }) => {
//   const cart = useContext(CartContext);

//   if (!cart.items || cart.items.length === 0) {
//     return (
//       <Modal
//         isOpen={isOpen}
//         onRequestClose={onClose}
//         contentLabel="Product Details"
//         className="bg-white p-6 rounded-lg shadow-xl w-[90%] sm:w-[50%] md:w-[40%] lg:w-[35%] xl:w-[30%] max-h-[80vh] overflow-auto relative"
//         overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//       >
//         <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl" onClick={onClose}>
//           ✖
//         </button>
//         <h2 className="text-xl font-semibold text-gray-800 text-center">Your Cart is Empty</h2>
//       </Modal>
//     );
//   }

//   const totalCost = cart.items.reduce((total, item) => {
//     return total + (item.salePrice > 0 ? item.salePrice : item.price) * item.quantity;
//   }, 0);

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       contentLabel="Product Details"
//       className="bg-white p-6 rounded-lg shadow-xl w-[90%] sm:w-[50%] md:w-[40%] lg:w-[35%] xl:w-[30%] max-h-[80vh] overflow-auto relative"
//       overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//     >
//       <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl" onClick={onClose}>
//         ✖
//       </button>

//       <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Your Cart</h2>

//       <div className="space-y-4">
//         {cart.items.map((product) => (
//           <div key={product.id} className="flex items-center space-x-4 border-b pb-2">
//             <img src={product.image} alt="Product" className="w-16 h-16 object-cover rounded-lg shadow" />
//             <div className="flex flex-1 justify-between items-center">
//               <div>
//                 <p className="text-lg font-medium text-gray-700">{product.title || "Product Title"}</p>
//                 <div className="flex items-center gap-2 mt-1">
//                   <button
//                     className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
//                     onClick={() => cart.removeOneFromCart(product.id)}
//                   >
//                     <Minus className="w-4 h-4" />
//                   </button>
//                   <span className="font-semibold">{product.quantity}</span>
//                   <button
//                     className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
//                     onClick={() => cart.addOneToCart(product.id)}
//                   >
//                     <Plus className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">
//                   Price: <span className="font-semibold">${product.salePrice > 0 ? product.salePrice * product.quantity : product.price * product.quantity}</span>
//                 </p>
//                 <Trash
//                   className="cursor-pointer mt-1 text-red-500 hover:text-red-700"
//                   size={20}
//                   onClick={() => cart.deleteFromCart(product.id)}
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-6 text-center">
//         <h3 className="text-xl font-semibold text-gray-800">Total: <span className="text-indigo-600">${totalCost.toFixed(2)}</span></h3>
//         <button
//           className="bg-indigo-500 text-white w-full py-2 mt-4 rounded-lg hover:bg-indigo-600 transition shadow-md"
//           onClick={checkOut}
//         >
//           Purchase Items!
//         </button>
//       </div>
//     </Modal>
//   );
// };

// export default ProductCardDetails;






// import { Minus, Plus, Trash } from "lucide-react";
// import React, { useContext } from "react";
// import { CartContext } from './CardContext';

// const ProductCardDetails = () => {
//   const { allProduct, cartItems, removeOneFromCart, addOneToCart, removeFromCart } = useContext(CartContext);

//   // Function to get product details safely
//   const getProductData = (id) => {
//     return allProduct?.find((product) => product.id === id) || null;
//   };

//   // Calculate total price
//   const totalCost = Object.keys(cartItems || {}).reduce((total, id) => {
//     const product = getProductData(id);
//     if (!product) return total; // Prevent errors if product is not found
//     const price = product.salePrice > 0 ? product.salePrice : product.price || 0;
//     return total + price * cartItems[id];
//   }, 0);

//   // Handle checkout process
//   const checkOut = async () => {
//     try {
//       const formattedItems = Object.keys(cartItems || {}).map((id) => ({
//         stripePriceId: getProductData(id)?.stripePriceId, // Ensure Stripe ID exists
//         quantity: cartItems[id]
//       })).filter(item => item.stripePriceId); // Filter out undefined IDs

//       console.log("🛒 Sending cart items:", formattedItems);

//       const response = await fetch('http://localhost:5000/checkout', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ items: formattedItems })
//       });

//       if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

//       const data = await response.json();
//       if (data.url) {
//         window.location.assign(data.url);
//       } else {
//         console.error("No URL received from Stripe.");
//       }
//     } catch (error) {
//       console.error("Checkout Error:", error);
//     }
//   };

//   return (
//     <div className="p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Your Cart</h2>

//       <div className="space-y-4">
//         {Object.keys(cartItems || {}).map((id) => {
//           const product = getProductData(id);
//           if (!product || cartItems[id] === 0) return null;

//           return (
//             <div key={product.id} className="flex items-center space-x-4 border-b pb-2">
//               <img src={product.image} alt={product.title} className="w-16 h-16 object-cover rounded-lg shadow" />
//               <div className="flex flex-1 justify-between items-center">
//                 <div>
//                   <p className="text-lg font-medium text-gray-700">{product.title}</p>
//                   <div className="flex items-center gap-2 mt-1">
//                     <button
//                       className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
//                       onClick={() => removeOneFromCart(product.id)}
//                     >
//                       <Minus className="w-4 h-4" />
//                     </button>
//                     <span className="font-semibold">{cartItems[id]}</span>
//                     <button
//                       className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
//                       onClick={() => addOneToCart(product.id)}
//                     >
//                       <Plus className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">
//                     Price: <span className="font-semibold">${(product.salePrice > 0 ? product.salePrice : product.price) * cartItems[id]}</span>
//                   </p>
//                   <Trash
//                     className="cursor-pointer mt-1 text-red-500 hover:text-red-700"
//                     size={20}
//                     onClick={() => removeFromCart(product.id)}
//                   />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <div className="mt-6 text-center">
//         <h3 className="text-xl font-semibold text-gray-800">
//           Total: <span className="text-indigo-600">${totalCost.toFixed(2)}</span>
//         </h3>
//         <button
//           className="bg-indigo-500 text-white w-full py-2 mt-4 rounded-lg hover:bg-indigo-600 transition shadow-md"
//           onClick={checkOut}
//         >
//           Purchase Items!
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCardDetails;


// import React, { useContext } from "react";
// import { CartContext } from "./CardContext";

// const CartPage = () => {
//   const { cartItems, addToCart, removeFromCart, removeItem } = useContext(CartContext);

//   return (
//     <div className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p className="text-gray-600">Your cart is empty.</p>
//       ) : (
//         cartItems.map((item) => (
//           <div key={item._id} className="flex justify-between items-center border-b py-4">
//             <div>
//               <h3 className="font-medium">{item.title}</h3>
//               <p className="text-gray-500">${item.price} x {item.quantity}</p>
//             </div>
//             <div className="flex gap-2">
//               <button
//                 className="bg-red-500 text-white px-2 py-1 rounded"
//                 onClick={() => removeFromCart(item._id)}
//               >
//                 -
//               </button>
//               <span>{item.quantity}</span>
//               <button
//                 className="bg-green-500 text-white px-2 py-1 rounded"
//                 onClick={() => addToCart(item)}
//               >
//                 +
//               </button>
//               <button
//                 className="bg-gray-600 text-white px-3 py-1 rounded"
//                 onClick={() => removeItem(item._id)}
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default CartPage;
// 

import { Minus, Plus, Trash } from "lucide-react";
import React, { useContext } from "react";
import { CartContext } from "./CardContext";
import { useNavigate } from "react-router-dom"; // Import navigation hook

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, removeItem } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Your Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center text-lg">Your cart is empty. Start adding items!</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center space-x-6 border-b pb-4">
                {/* Product Image */}
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg shadow-md" />

                {/* Product Details */}
                <div className="flex flex-1 justify-between items-center">
                  <div>
                    <p className="text-lg font-medium text-gray-800">{item.title}</p>
                    <p className="text-gray-500 text-sm">${item.price} each</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        className="h-9 w-9 rounded-full border border-gray-300 flex items-center justify-center transition hover:bg-gray-200"
                        onClick={() => removeFromCart(item._id)}
                      >
                        <Minus className="w-5 h-5 text-gray-600" />
                      </button>
                      <span className="text-lg font-semibold">{item.quantity}</span>
                      <button
                        className="h-9 w-9 rounded-full border border-gray-300 flex items-center justify-center transition hover:bg-gray-200"
                        onClick={() => addToCart(item)}
                      >
                        <Plus className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Price & Remove Button */}
                  <div className="text-right">
                    <p className="text-md text-gray-700 font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <Trash
                      className="cursor-pointer mt-2 text-red-500 hover:text-red-700 transition"
                      size={22}
                      onClick={() => removeItem(item._id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Total Price & Checkout Button */}
        {cartItems.length > 0 && (
          <div className="mt-6 bg-gray-100 p-5 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Total:</h3>
              <span className="text-2xl font-bold text-indigo-600">
                ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
              </span>
            </div>
            <button
              className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
              onClick={() => navigate("/shop/checkout")}
            >
              Checkout Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;




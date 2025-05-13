// import React from 'react';


// const ShoppingProductCard = ({ product, handleProductDetails, handleAddToCard }) => {
//   return (
//     <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-xs relative">
//       {/* Card Click Triggers Product Details Modal */}
//       <div
//         onClick={() => handleProductDetails(product?._id)}
//         className="cursor-pointer"
//       >
//         <div className='relative'>
//           <img
//             src={product?.image}
//             alt={product?.title}
//             className="w-full h-[250px] object-cover"
//           />
//           {product?.salePrice > 0 && (
//             <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
//               Sale
//             </span>
//           )}
//         </div>
//         <div className="p-4">
//           <h2 className="text-lg font-semibold text-gray-800">{product?.title}</h2>
//           <div className='flex justify-between items-center my-2'>
//             <span className='text-sm text-neutral-400'>{product?.category}</span>
//             <span className='text-sm text-neutral-400'>{product?.brand}</span>
//           </div>
//           {/* Price Section */}
//           <div className="mt-2 flex items-center gap-2">
//             {product?.salePrice > 0 ? (
//               <>
//                 <span className="text-gray-500 line-through">${product?.price}</span>
//                 <span className="text-red-600 font-bold">${product?.salePrice}</span>
//               </>
//             ) : (
//               <span className="text-gray-800 font-bold">${product?.price}</span>
//             )}
//           </div>
//         </div>
//       </div>

     
//       <button
//         className="w-full px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition absolute bottom-0 left-0"
//         onClick={(e) => {
//           e.stopPropagation(); 
//           handleAddToCard(product?._id);
//         }}
//       >
//         Add To Cart
//       </button>
//     </div>
//   );
// };

// export default ShoppingProductCard;
import React, { useContext } from "react";
import { CartContext } from "./CardContext"; 

const ShoppingProductCard = ({ product, handleProductDetails }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-xs relative">
      {/* Clicking the card opens Product Details */}
      <div onClick={() => handleProductDetails(product?._id)} className="cursor-pointer">
        <div className="relative">
          <img src={product?.image} alt={product?.title} className="w-full h-[250px] object-cover" />
          {product?.salePrice > 0 && (
            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              Sale
            </span>
          )}
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{product?.title}</h2>
          <div className="flex justify-between items-center my-2">
            <span className="text-sm text-neutral-400">{product?.category}</span>
            <span className="text-sm text-neutral-400">{product?.brand}</span>
          </div>
          {/* Price Section */}
          <div className="mt-2 flex items-center gap-2">
            {product?.salePrice > 0 ? (
              <>
                <span className="text-gray-500 line-through">${product?.price}</span>
                <span className="text-red-600 font-bold">${product?.salePrice}</span>
              </>
            ) : (
              <span className="text-gray-800 font-bold">${product?.price}</span>
            )}
          </div>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        className="w-full px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition absolute bottom-0 left-0"
        onClick={(e) => {
          e.stopPropagation(); // Prevents triggering `handleProductDetails`
          addToCart(product);  // Pass the whole product object
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ShoppingProductCard;

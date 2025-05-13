// import React from "react";

// const ProductDetail = ({ isOpen, onClose, title, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
//       <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
//         <div className="flex justify-between items-center">
//           <h2 className="text-xl font-bold">{title}</h2>
//           <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
//             ✖
//           </button>
//         </div>
//         <div className="mt-4">{children}</div>
//         <div className="mt-4 flex justify-end">
//           <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={onClose}>
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
import React from "react";
import Modal from "react-modal";

 
const ProductDetailsModal = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Product Details"
      className="bg-white p-6 rounded-lg shadow-lg w-[70vw] mx-auto mt-20 relative"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      {/* Close Button */}
      <button
        className="py-4  text-gray-500 hover:text-gray-700"
        onClick={onClose}
      >
        ✖
      </button>

      <div className="flex  gap-2">
        <div className="flex-1">
         <img
           src={product.image}
           alt={product.title}
           className="w-full h-auto object-cover rounded-md"
         />
        </div>
       <div className="flex flex-col flex-1 p-4 sm:p-6 justify-between">
        <div>
         <h2 className="text-lg sm:text-xl font-bold mt-2">{product.title}</h2> 
         <p className="text-xs sm:text-sm text-gray-500 mt-1">
            {product.category} | {product.brand}
         </p>
         <p className="text-sm sm:text-base text-gray-700 mt-2">{product.description}</p>  
         </div>
         <div>
             {product.salePrice > 0 ? (
            <>
                  <span className="text-gray-500 line-through text-sm sm:text-base">${product.price}</span>
                  <span className="text-red-600 font-bold ml-2 text-base sm:text-lg">${product.salePrice}</span>
            </>
            ) : (
             <span className="text-gray-800 font-bold text-base sm:text-lg">${product.price}</span>
            )}
          <button
            className="w-full mt-4 bg-red-600 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-md hover:bg-red-700 transition"
            onClick={onClose}
          >
            Add To Cart
          </button>
         </div>
       </div>
      </div>
    </Modal>
  );
};

export default ProductDetailsModal;



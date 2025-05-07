// import React from 'react'

// const AdminProductCard = ({product}) => {
//   return (
//     <div>
//        <div>
//           <img 
//             src={product?.image}
//             alt={product?.title}
//             className='w-full h-[300px] object-cover rounded-t-lg '
//           />
//        </div>
//        <div>
//           <h2 >{product.title}</h2>
//           <div>
//             <span className={`${product?.salePrice>0?'line-through':''}`}>${product?.price}</span>
//             <span>${product?.salePrice}</span>
//           </div>
//        </div>
//        <div>
//             <button>Edit</button>
//             <button>Delete</button>
//        </div> 
//     </div>
//   )
// }

// export default AdminProductCard



// works fine below
// import React from 'react';
// import Modal from 'react-modal';

// // ✅ Modal ko properly render karne ke liye App root define karo
// Modal.setAppElement('#root');

// const AdminProductCard = ({ product,setCurrentEditedId,setOpenProductDialog,setFormData,handleDelete}) => {
  
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   return (
//     <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-xs">
//       {/* Product Image */}
//       <div>
//         <img
//           src={product?.image}
//           alt={product?.title}
//           className="w-full h-[250px] object-cover "
//         />
//       </div>

//       {/* Product Info */}
//       <div className="p-4">
//         <h2 className="text-lg font-semibold text-gray-800">{product?.title}</h2>
        
//         {/* Price Section */}
//         <div className="mt-2 flex items-center gap-2">
//           {product?.salePrice > 0 ? (
//             <>
//               <span className="text-gray-500 line-through">${product?.price}</span>
//               <span className="text-red-600 font-bold">${product?.salePrice}</span>
//             </>
//           ) : (
//             <span className="text-gray-800 font-bold">${product?.price}</span>
//           )}
//         </div>

//         {/* Action Buttons */}
//         <div className="mt-4 flex gap-2">
//           <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
//             onClick={()=>{
//                 setCurrentEditedId(product?._id);
//                 setOpenProductDialog(true);
//                 setFormData(product)
              
//             }}
//           >
//             Edit
//           </button>
//           <button className="px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition"
//              onClick={()=>{
//               handleDelete(product?._id)
//              }}
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminProductCard;
import React, { useState } from 'react';

const AdminProductCard = ({ product, setCurrentEditedId, setOpenProductDialog, setFormData, handleDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-xs">
      {/* Product Image */}
      <div>
        <img
          src={product?.image}
          alt={product?.title}
          className="w-full h-[250px] object-cover "
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{product?.title}</h2>
        
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

        {/* Action Buttons */}
        <div className="mt-4 flex gap-2">
          <button
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
            onClick={() => {
              setCurrentEditedId(product?._id);
              setOpenProductDialog(true);
              setFormData(product);
            }}
          >
            Edit
          </button>
          <button
            className="px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition"
            onClick={() => setIsModalOpen(true)}
          >
            Delete
          </button>
        </div>
      </div>

      {/* ✅ Delete Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold">Confirm Delete</h2>
            <p className="text-gray-600 mt-2">Are you sure you want to delete this product?</p>

            <div className="mt-4 flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                onClick={() => {
                  handleDelete(product?._id);
                  setIsModalOpen(false); // Modal close karna
                }}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProductCard;

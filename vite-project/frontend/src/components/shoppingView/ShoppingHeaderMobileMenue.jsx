//  import { useState } from "react";

// import { Link } from "react-router-dom";

// const MobileMenu = () => {
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const [openSubmenu, setOpenSubmenu] = useState(null);

//   return (
//     <div>
//       {/* Menu Toggle Button */}
//       <button onClick={() => setMobileMenu(!mobileMenu)} className="text-2xl p-4">
//         { "☰"}
//       </button>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed inset-0 text-black  z-50 flex flex-col items-center transition-opacity duration-300 ${
//           mobileMenu ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//       >
//         {/* Close Button */}
//         <button onClick={() => setMobileMenu(false)} className="absolute top-5 right-5 text-3xl ">
//           ✕
//         </button>

//         {/* Menu Content */}
//         <div className="w-full max-w-md flex flex-col py-20 space-y-6 px-4">

//           {<menuItems/>}

//           {/* Services - Click to Expand Submenu */}
          
         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileMenu;
// // const ShoppingHeaderMobileMenu = ({ children }) => {
// //     const [isOpen, setIsOpen] = useState(false);
  
// //     return (
// //       <>
// //         <button
// //           className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition lg:hidden"
// //           onClick={() => setIsOpen(!isOpen)}
// //         >
// //           ☰ {/* You can use an icon instead */}
// //         </button>
// //         {isOpen && (
// //           <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex flex-col p-4">
// //             <button
// //               onClick={() => setIsOpen(false)}
// //               className="text-white text-2xl self-end"
// //             >
// //               ✕
// //             </button>
// //             {children}
// //           </div>
// //         )}
// //       </>
// //     );
// //   };
  
// //   export default ShoppingHeaderMobileMenu;
  

import { useState } from "react";
import { Link } from "react-router-dom";

// Sample menu items
const menuItems = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Shop", path: "/shop" },
  { id: 3, label: "Services", path: "/services" },
  { id: 4, label: "Contact", path: "/contact" },
];

const MobileMenu = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div>
      {/* Menu Toggle Button */}
      <button
        onClick={() => setMobileMenu(!mobileMenu)}
        className="text-2xl p-4"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white text-black z-50 flex flex-col items-center transition-opacity duration-300 ${
          mobileMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMobileMenu(false)}
          className="absolute top-5 right-5 text-3xl"
        >
          ✕
        </button>

        {/* Menu Content */}
        <div className="w-full max-w-md flex flex-col py-20 space-y-6 px-4">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="text-black text-lg font-medium hover:text-gray-600 transition"
              onClick={() => setMobileMenu(false)} // Close menu on item click
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

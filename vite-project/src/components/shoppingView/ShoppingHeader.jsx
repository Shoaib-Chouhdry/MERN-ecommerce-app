
import { HousePlus, AlignJustify, ShoppingCart, User, LogOut } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ShoppingViewHeaderMenuItems } from "../config/Config";
import ShoppingHeaderMobileMenu from './ShoppingHeaderMobileMenue';
import { logoutUser } from "@/store/AuthSlice/AuthSlice";
import  ProductCardDetails  from "./ProductCardDetail";
import { fetchCardItems } from "@/store/shopSlice/ShopCardSlice";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import { CartContext } from "./CardContext";

const MenuItems = () => {
    return (
      <nav className="flex flex-col  lg-mb-0 lg:items-center lg:flex-row gap-4 md:space-x-4 md:items-center">
        {ShoppingViewHeaderMenuItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    );
  };
  



const HeaderRightContent = () => {
  const { user } = useSelector((state) => state.auth);
  const { cardItems } = useSelector((state) => state.shoppingCard);
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigation hook
  const { cartItems} = useContext(CartContext);


  const totalQuantity = cartItems?.reduce((acc, item) => acc + (item.quantity || 0), 0) || 0;








  const handleLogout = () => {
    dispatch(logoutUser());
    setMenuOpen(false);
  };

  useEffect(() => {
    dispatch(fetchCardItems(user?.id));
  }, [dispatch]);

  return (
    <div className="relative ">
      {/* Cart Button - Now Navigates to /cart */}
      <button
      className="relative p-2 m-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      onClick={() => navigate("/shop/cart")}
      >
      <ShoppingCart className="h-6 w-6 text-gray-900 dark:text-white" />
      {totalQuantity > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
          {totalQuantity}
        </span>
      )}
      <span className="sr-only">User Cart</span>
      </button>

      {/* Profile Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="p-2 rounded-full border dark:border-gray-700 relative"
      >
        <User className="h-6 w-6 text-gray-900 dark:text-white" />
        <span className="sr-only">User Profile</span>
      </button>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg py-2">
          <div className="px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
            {user?.userName || "Guest"}
          </div>

          <Link
            to="/account"
            className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMenuOpen(false)}
          >
            Account
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

// const HeaderRightContent = () => {

//   const {user}= useSelector(state=>state.auth)
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [openCard,setOpenCard] = useState(false);
//    const {cardItems}    = useSelector(state=>state.shoppingCard)
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(logoutUser());
//     setMenuOpen(false);
//   };
//  useEffect(()=>{
// dispatch(fetchCardItems(user?.id))
//  },[dispatch])


//   return (
   
//     <div className="relative ">
//       {/* Cart Button */}
      
//       <button
//         className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
//         onClick={() => navigate("/cart")} // Navigate to the cart page
//       >
//         <ShoppingCart className="h-6 w-6 text-gray-900 dark:text-white" />
//         <span className="sr-only">User Cart</span>
//       </button>
      
//        <ProductCardDetails isOpen={openCard} onClose={()=>setOpenCard(false)} cart={cardItems}/> 
    
     
    
//       {/* Profile Button */}
//       <button
//         onClick={() => setMenuOpen(!menuOpen)}
//         className="p-2 rounded-full border dark:border-gray-700 relative"
//       >
//         <User className="h-6 w-6 text-gray-900 dark:text-white" />
//         <span className="sr-only">User Profile</span>
//       </button>

//       {/* Dropdown Card */}
//       {menuOpen && (
//         // absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg py-2 
//         <div className="absolute  dropdown-menu pt-4 right-0 mt-2 w-48 h-48 bg-white dark:bg-gray-900  border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg py-2 ">
//           {/* User Name */}
//           <div className="px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
//             {user?.userName || "Guest"}
//           </div>

//           {/* Account Link */}
//           <Link
//             to="/account"
//             className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
//             onClick={() => setMenuOpen(false)}
//           >
           
//             Account
//           </Link>

//           {/* Logout Button */}
//           <button
//             onClick={handleLogout}
//             className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800"
//           >
//             <LogOut className="h-5 w-5 mr-2" />
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

const ShoppingHeader = () => {
  const { isAuthenticated,user } = useSelector((state) => state.auth);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-40 w-full border-b bg-white dark:bg-gray-900">
      <div className="flex h-16 items-center justify-between px-4 md:px-6 max-w-screen-xl mx-auto">
        
        {/* Logo */}
        <Link to="/shop/home" className="flex items-center gap-2 text-gray-900 dark:text-white">
          <HousePlus className="h-6 w-6" />
          <span className="font-bold text-lg">Ecommerce</span>
        </Link>

        {/* Desktop Menu (Centered) */}
        <div className="hidden lg:flex flex-grow justify-center">
          <MenuItems />
        </div>

        {/* Right Side Icons */}
        <div className="hidden lg:flex relative">
          <HeaderRightContent />
        </div>
        <div className="lg:hidden">
          <ShoppingHeaderMobileMenu>
            <MenuItems className="flex flex-col items-start "/>
          </ShoppingHeaderMobileMenu>
        </div>
        {/* Mobile Menu Button */}
        {/* <button
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition lg:hidden"
          onClick={() => {
            setMenuOpen(!menuOpen);
            console.log("Menu Open State:", !menuOpen); // Debugging log
          }}
        >
          <AlignJustify className="h-6 w-6 text-gray-900 dark:text-white" />
          <span className="sr-only">Toggle header menu</span>
        </button> */}
      </div>
      

      {/* Mobile Menu Dropdown (Fixed Issue) */}
      {/* <div className="relative">
  {menuOpen && (
    <div className="absolute left-0 top-full w-full bg-white dark:bg-gray-900 lg:hidden p-4 shadow-md z-50">
      <MenuItems className="flex-col items-start" />
      <HeaderRightContent />
    </div>
  )}
</div> */}
    </div>
  );
};

export default ShoppingHeader;




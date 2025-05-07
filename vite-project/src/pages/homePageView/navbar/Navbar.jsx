import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnet,faBars,faArrowRight,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";
import Button from "@/components/common/Button";
import {User, LogOut } from "lucide-react";
import { useState,useEffect } from "react";
import MobileMenu from "./MobileMenuItems";

const Navbar =()=>{
   
      const [mobileMenu ,setMobileMenue ] = useState(false)
      const [menuOpen, setMenuOpen] = useState(false);
      const handleClick =()=>{
         return  setMobileMenue(!mobileMenu)
      }
    
     
    return(
           <div className="lg:h-40 h-20 px-2 md:px-4 lg:px-6 relative z-[50] ">

                {/* for small screen */}

                <div className="h-1/2 flex items-center justify-between lg:hidden py-8">
                    <div>
                      <Link href="/" >
                        <div className="text-2xl tracking-wide p-2">hellothere</div>
                      </Link>
                    </div>
                    <div>
               
                         <MobileMenu/>
                    </div>


                </div>

                {/* for big screen */}

             <div className="h-full lg:flex items-center justify-between hidden ">
                 <div className=" flex flex-col justify-center items-center p-6 w-1/6">
                    <FontAwesomeIcon icon={faMagnet} className="w-16 h-16"/>
                      hellothere
                 </div>
                 <div className="w-4/6 flex items-center justify-center ">
                   <MenuItems/>

                 </div>

                 <div className="relative ">
      {/* Cart Button */}
      <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition ">
        
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

      {/* Dropdown Card */}
      {menuOpen && (
        // absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg py-2 
        <div className="absolute  dropdown-menu pt-4 right-0 mt-2 w-48 h-48 bg-white dark:bg-gray-900  border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg py-2 ">
          {/* User Name */}
          <div className="px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
            {"Guest"}
          </div>

          {/* Account Link */}
          <Link
            to="/auth/login"
            className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMenuOpen(false)}
          >
           <LogOut className="h-5 w-5 mr-2" />
           SignIn
          </Link>
          <Link
            to="/auth/register"
            className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMenuOpen(false)}
          >
           <LogOut className="h-5 w-5 mr-2" />
           SignUp
          </Link>
          {/* <button
           
           className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800"
         >
           <LogOut className="h-5 w-5 mr-2" />
           SignIn
         </button>
          {/* Logout Button */}
          {/* <button
           
            className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <LogOut className="h-5 w-5 mr-2" /> */}
            {/* SignUp
          </button>  */}
        </div>
      )}





                 {/* <div className="w-2/6 flex items-center justify-center gap-2">
                    <span className=" flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 hover:border-black border-2 p-2 rounded-full w-12 h-12">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                    <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="p-2 rounded-full border dark:border-gray-700 relative"
                          >
                            <User className="h-6 w-6 text-gray-900 dark:text-white" />
                            <span className="sr-only">User Profile</span>
                    </button>
                    {menuOpen && (
        // absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg py-2 
        <div className="absolute  dropdown-menu pt-4 right-0 mt-2 w-48 h-48 bg-white dark:bg-gray-900  border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg py-2 ">
          {/* User Name */}
          {/* <div className="px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
            {"Guest"}
          </div> */}

          {/* Account Link */}
          {/* <Link
            to="/account"
            className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMenuOpen(false)}
          >
           
            Account
          </Link> */}

          {/* Logout Button */}
          {/* <button
            
            className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </button>
        </div>
      )} */} 
                 </div>

             </div>

           </div>
           )
}
export default Navbar
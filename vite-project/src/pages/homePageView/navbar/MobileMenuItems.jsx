import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  return (
    <div>
      {/* Menu Toggle Button */}
      <button onClick={() => setMobileMenu(!mobileMenu)} className="text-2xl p-4">
        {mobileMenu ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black text-white z-50 flex flex-col items-center transition-opacity duration-300 ${
          mobileMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Close Button */}
        <button onClick={() => setMobileMenu(false)} className="absolute top-5 right-5 text-3xl ">
          ✕
        </button>

        {/* Menu Content */}
        <div className="w-full max-w-md flex flex-col py-20 space-y-6 px-4">

          <input type="search"  placeholder="Search" className="p-2 rounded-xl"></input>
         
          <Link to="/" className="text-center hover:text-gray-300">Home</Link>
          <Link to="/about" className="text-center hover:text-gray-300">About Us</Link>

          {/* Services - Click to Expand Submenu */}
          <div className="text-center">
            <button
              onClick={() => setOpenSubmenu(openSubmenu === "services" ? null : "services")}
              className="flex items-center justify-center gap-2 w-full"
            >
              Services
              <FontAwesomeIcon icon={openSubmenu === "services" ? faArrowUp : faArrowDown} />
            </button>
            <ul
              className={`transition-all duration-300 bg-gray-900 rounded-md ${
                openSubmenu === "services" ? "h-auto opacity-100 py-2" : "h-0 opacity-0 overflow-hidden"
              }`}
            >
              <li><Link to="" className="block px-4 py-2 hover:bg-gray-700">Medical Billing</Link></li>
              <li><Link to="" className="block px-4 py-2 hover:bg-gray-700">Accounts Receivable</Link></li>
            </ul>
          </div>

          <Link to="/contact" className="text-center hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

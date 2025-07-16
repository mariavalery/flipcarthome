import {
  FaSearch,
  FaEllipsisV,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import { useState } from "react";
import logo from "../assets/flipkartlogo.svg";
import usericon from "../assets/usericon.svg";
import storeicon from "../assets/storeicon.svg";
import carticon from "../assets/carticon.svg";
import eclipsedoticon from "../assets/eclipsedoticon.svg";
function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <nav className="w-full bg-white px-6 py-2 flex justify-between items-center">
      <div>
        <a href="/" className="flex items-center">
          <img src={logo} alt="flipkart-logo" className="h-10 object-contain" />
        </a>
      </div>

      <div className="flex-1 items-center mx-6">
        <div className="flex bg-blue-50 px-4 py-2 rounded-md ">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search for Products,Brands and More"
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>
      </div>
      <div className="flex items-center text-gray-800 text-md gap-14">
        <a
          href="/Login"
          className={`inline-flex items-center px-3 py-1 rounded-md cursor-pointer  ${
            isHovered ? "bg-blue-600 text-white" : "text-gray-800"
          }`}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
        >
          <img src={usericon} alt="user-icon" />
          <span>Login</span>
          <FaChevronDown
            className={`transition-transform duration-700 ${
              isHovered ? "rotate-180" : ""
            }`}
          />
        </a>

        <a
          href="/Cart"
          className="flex items-center px-4 py-2 gap-2 cursor-pointer"
        >
          <img src={carticon} alt="cart-icon" />
          <span>Cart</span>
        </a>
        <a
          href="/Store"
          className="flex items-center px-4 py-2 gap-2 cursor-pointer"
        >
          <img src={storeicon} alt="store-icon" />
          <span>Become a Seller</span>
        </a>
        <div className="cursor-pointer">
          <img src={eclipsedoticon} alt="store-icon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

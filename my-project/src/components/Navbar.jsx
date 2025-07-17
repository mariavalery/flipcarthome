import { FaSearch, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import logo from "../assets/flipkartlogo.svg";
// import searchicon from "..assets/searchicon.svg";
import shortcuticon from "../assets/shortcuticon.svg";
import baricon from "../assets/baricon.svg";
import usericon from "../assets/usericon.svg";
import arrowupicon from "../assets/arrowupicon.svg";
import arrowdownicon from "../assets/arrowdownicon.svg";
import userwhiteicon from "../assets/userwhiteicon.svg";
import storeicon from "../assets/storeicon.svg";
import carticon from "../assets/carticon.svg";
import eclipsedoticon from "../assets/eclipsedoticon.svg";
import fkplus from "../assets/dropdown icons/fkplus.svg";
import orde from "../assets/dropdown icons/orde.svg";
import heart from "../assets/dropdown icons/heart.svg";
import rewards from "../assets/dropdown icons/rewards.svg";
import giftCard from "../assets/dropdown icons/giftCard.svg";
import helpcenter from "../assets/dropdown icons/helpcenter.svg";
import download from "../assets/dropdown icons/download.svg";
import advertise from "../assets/dropdown icons/advertise.svg";
import notificationPreferences from "../assets/dropdown icons/notificationPreferences.svg";

const loginmenuItems = [
  { icon: usericon, label: "My Profile", href: "/myprofile" },
  { icon: fkplus, label: "Flipkart Plus Zone", href: "/flipkartpluszone" },
  { icon: orde, label: "Orders", href: "/orders" },
  { icon: heart, label: "Wishlist", href: "/wishlist" },
  { icon: rewards, label: "Rewards", href: "/rewards" },
  { icon: giftCard, label: "Giftcards", href: "/giftcards" },
];

const helpmenuItems = [
  {
    icon: notificationPreferences,
    label: "Notification Preferences",
    href: "/notificationPreferences",
  },
  { icon: helpcenter, label: "24 x 7 Support Care", href: "/support" },
  { icon: advertise, label: "Advertise", href: "/advertise" },
  { icon: download, label: "Download App", href: "/download" },
];

function Navbar() {
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const [isHelpHovered, setIsHelpHovered] = useState(false);

  return (
    <nav className="w-full h-16 bg-white px-10 py-2 flex justify-between items-center relative shadow-sm">
      {/* threeBar */}

      <div className=" md:hidden ">
        <img src={baricon} />
      </div>

      {/* Logo */}
      <div className="flex flex-1 items-center mx-2 gap-4">
        <a href="/" className="shrink-0">
          <img
            src={logo}
            title="Flipkart"
            alt="flipkart-logo"
            className="w-40 h-10 object-contain"
          />
        </a>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 items-center bg-blue-50 px-2 py-1 rounded-md" title="Search for Products, Brands and More">
          <div>
            <button>
              <svg width="24" height="24"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 16L21 21" stroke="#717478" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </button>
          </div>
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center text-gray-800 text-md gap-4">
        {/* Shortcut*/}
        <div className=" md:hidden ">
          <img src={shortcuticon} />
        </div>
        {/* Login Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsLoginHovered(true)}
          onMouseLeave={() => setIsLoginHovered(false)}
        >
          <div
            className={`inline-flex items-center px-2 py-0 rounded-md cursor-pointer text-md ${
              isLoginHovered ? "bg-blue-600 text-white" : "text-gray-800"
            }`}
            title="Login"
          >
            <img
              src={isLoginHovered ? userwhiteicon : usericon}
              alt="user-icon"
              className="mr-1"
            />
            <span>Login</span>
            <img
              src={isLoginHovered ? arrowupicon : arrowdownicon}
              className={`ml-1 transition-transform duration-500 ${
                isLoginHovered ? "rotate-180" : ""
              }`}
            />
          </div>

          {isLoginHovered && (
            <div className="absolute top-full mt-2 left-0 bg-white shadow-md rounded-md w-56 z-50 text-sm cursor-pointer">
              <div
                className="p-3 border-b flex justify-between items-center "
                title="Sign Up"
              >
                <span className="text-gray-500 ">New Customer?</span>
                <a href="/Signup" className="text-blue-600 font-semibold">
                  Sign Up
                </a>
              </div>

              <ul className="p-2 space-y-2">
                {loginmenuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="flex items-center gap-2 hover:bg-gray-100 px-4 py-1 cursor-pointer rounded"
                      title={item.label}
                    >
                      <img src={item.icon} alt={item.label} />
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Cart */}
        <a
          href="/Cart"
          title="Cart"
          className="flex items-center px-1 py-0 gap-2 cursor-pointer"
        >
          <img src={carticon} alt="cart-icon" />
          <span className="hidden md:flex">Cart</span>
        </a>

        {/* Become a Seller */}
        <a
          href="/Store"
          title="Become a Seller"
          className=" hidden md:flex items-center px-4 py-2 gap-2 cursor-pointer"
        >
          <img src={storeicon} alt="store-icon" />
          <span>Become a Seller</span>
        </a>

        {/* 3-dot Menu */}
        <div
          className="relative hidden md:flex"
          onMouseEnter={() => setIsHelpHovered(true)}
          onMouseLeave={() => setIsHelpHovered(false)}
        >
          <div
            className="px-3 py-2 rounded-md hover:bg-gray-100"
            title="Dropdown with more help links"
          >
            <img src={eclipsedoticon} alt="more-icon" />
          </div>

          {isHelpHovered && (
            <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg w-56 z-50 text-sm">
              <ul className="p-2 space-y-2">
                {helpmenuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="flex items-center gap-2 hover:bg-gray-100 px-4 py-1 cursor-pointer rounded"
                      title={item.label}
                    >
                      <img src={item.icon} alt={item.label} />
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

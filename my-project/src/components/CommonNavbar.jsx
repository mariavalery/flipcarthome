import { useEffect, useRef, useState } from "react";
import commonflipkartlogo from "../assets/common nav icons/common flipkart logo.png";
import pluslogo from "../assets/common nav icons/plus logo.png";
import SearchAutoSuggestion from "../components/SearchAutoSuggestion";
import arrowupicon from "../assets/arrowupicon.svg";
import arrowdowniconwhite from "../assets/arrowdowniconwhite.svg";
function CommonNavbar({ loginmenuItems, helpmenuItems }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const [isHelpHovered, setIsHelpHovered] = useState(false);
  const searchWrapper = useRef(null);

  useEffect(() => {
    function handleClickOpen(e) {
      if (searchWrapper.current && !searchWrapper.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOpen);
    return () => {
      document.removeEventListener("mousedown", handleClickOpen);
    };
  }, []);
  return (
    <nav className="fixed top-0 left-0 z-10 w-full h-[56px] text-[10px] bg-[#2874f0] text-[#f0f0f0] flex items-center gap-2 ">
      <div className="min-w-[30px] md:min-w-[120px]" />

      <div className="flex items-center w-full ">
        {/* Logo Section */}
        <div className="flex flex-col flex-wrap md:flex-nowrap md:m-8 m-1 flex-shrink-0">
          <a href="/">
            <img src={commonflipkartlogo} className="md:w-20 w-10" />
          </a>
          <div className="flex items-center">
            <a href="/" className="hover:border-b border-white">
              Explore
              <span className="text-yellow-500 font-serif px-1">Plus</span>
            </a>
            <img src={pluslogo} className="w-2 md:w-4" />
          </div>
        </div>

        {/* Search Bar */}
        <div
          ref={searchWrapper}
          onFocus={() => setIsSearchOpen(true)}
          className="relative  w-full max-w-60 md:max-w-xl m-1 flex-1 "
        >
          <div className=" bg-white px-1 py-1 rounded flex items-center">
            <input
              placeholder="Search for Products and More"
              title="Search for Products and More"
              className="w-full outline-none text-sm text-black px-2"
            />
            <button className="px-1 w-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
                  stroke="blue"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 16L21 21"
                  stroke="blue"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {isSearchOpen && <SearchAutoSuggestion />}
          </div>
        </div>

        {/* Right Section */}
        <div className=" flex items-center gap-2 md:gap-6 font-bold text-[10px] md:text-sm whitespace-nowrap flex-shrink-0 mr-1 ">
          <div className="relative">
            <button
              className=" flex text-[#5f4eeb] font-medium bg-white px-2 md:px-4 py-1 rounded"
              onMouseEnter={() => setIsLoginHovered(true)}
              onMouseLeave={() => setIsLoginHovered(false)}
            >
              Login
            </button>

            {isLoginHovered && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50">
                {/* Triangle */}
                <div
                  className="absolute -top-[6px] left-1/2 border-l-[15px]  border-r-[15px] border-b-[8px] border-l-transparent border-r-transparent  border-b-white transform -translate-x-1/2 w-0 h-0"
                />

                {/* Dropdown panel */}
                <div className="bg-white shadow-md rounded-md w-56 text-sm cursor-pointer">
                  <div
                    className="p-3 border-b flex justify-between items-center"
                    title="Sign Up"
                  >
                    <span className="text-gray-500">New Customer?</span>
                    <a href="/Signup" className="text-blue-600 font-semibold">
                      Sign Up
                    </a>
                  </div>
                  <ul className="p-2 space-y-2 text-black font-normal">
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
              </div>
            )}
          </div>

          <span className="inline ">Become a Seller</span>
          <div
            className="relative flex top-full left-0"
            onMouseEnter={() => setIsHelpHovered(true)}
            onMouseLeave={() => setIsHelpHovered(false)}
          >
              <span>More</span>
              <img
              src={isHelpHovered ? arrowupicon : arrowdowniconwhite}
              className={`ml-1  transition-transform duration-100 ${
                isHelpHovered ? "rotate-180" : ""
              }`}
            />
            {isHelpHovered && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white mt-2 shadow-lg rounded-lg w-56 z-50 text-sm">
                 <div
                  className="absolute -top-[6px] left-1/2 border-l-[15px]  border-r-[15px] border-b-[8px] border-l-transparent border-r-transparent  border-b-white transform -translate-x-1/2 w-0 h-0"
                />
                <ul className="p-2 space-y-2 text-black font-normal">
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
          <div className="hidden md:inline-flex items-center">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.25 17.25H6.54545L3.93015 2.86584C3.89873 2.69303 3.80766 2.53673 3.67281 2.42419C3.53796 2.31164 3.36789 2.25 3.19225 2.25H1.5"
                stroke="white"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.5 21C8.53553 21 9.375 20.1605 9.375 19.125C9.375 18.0895 8.53553 17.25 7.5 17.25C6.46447 17.25 5.625 18.0895 5.625 19.125C5.625 20.1605 6.46447 21 7.5 21Z"
                stroke="white"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.25 21C18.2855 21 19.125 20.1605 19.125 19.125C19.125 18.0895 18.2855 17.25 17.25 17.25C16.2145 17.25 15.375 18.0895 15.375 19.125C15.375 20.1605 16.2145 21 17.25 21Z"
                stroke="white"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.86363 13.5H17.6345C17.9858 13.5 18.3259 13.3767 18.5956 13.1516C18.8653 12.9265 19.0475 12.6139 19.1103 12.2683L20.25 6H4.5"
                stroke="white"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Cart</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default CommonNavbar;

import { useState } from "react";
// import arrowupicon from "../assets/arrowupicon.svg";
// import arrowdownicon from "../assets/arrowdownicon.svg";
import { allProductsDropDownArray } from "../items/DropDownItems";

function AllCategoryNav() {
  const [isCategoryHovered, setisCategoryHovered] = useState(null);

  return (
    <div className="shadow-md w-full">
      <ul className="flex flex-wrap justify-center items-center  mx-auto px-2 sm:px-4">
        {allProductsDropDownArray.map((item) => {
          const isHovered = isCategoryHovered === item.id;

          return (
            <li
              key={item.id}
              className={`flex items-center font-semibold px-2 sm:px-4 py-2 cursor-pointer 
                text-sm sm:text-base`}
              onMouseEnter={() => setisCategoryHovered(item.id)}
              onMouseLeave={() => setisCategoryHovered(null)}
            >
              <span className={`${isHovered ? "text-blue-500" : ""}`}>
                {item?.category?.title}
              </span>
              {item?.category?.subItems.length > 0 && (
                <span
                  className={`ml-1 transition-transform duration-100 ${
                    isHovered ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    width="13"
                    className={`w-3 h-2  ${
                      isHovered ? "text-blue-500" : "text-gray-400"
                    }`}
                    height="10"
                    viewBox="0 0 14 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_4974_75969)">
                      <path
                        d="M3 2L7 6L11 2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_4974_75969"
                        x="0.25"
                        y="0.25"
                        width="13.5"
                        height="9.8125"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_4974_75969"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_4974_75969"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AllCategoryNav;

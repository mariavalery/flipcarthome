import { useState } from "react";
// import arrowupicon from "../assets/arrowupicon.svg";
// import arrowdownicon from "../assets/arrowdownicon.svg";
import { allProductsDropDownArray } from "../items/DropDownItems";

function AllCategoryNav() {
  const [isCategoryHovered, setisCategoryHovered] = useState(null);

  return (
    <div className="shadow-md w-full">
      <div className="flex flex-nowrap md:justify-center items-center md:gap-4 px-1">
        {allProductsDropDownArray.map((item) => {
          const isHovered = isCategoryHovered === item.id;

          return (
            <div
              key={item.id}
              className={`flex  justify-start items-center font-semibold  h-5 md:h-7 md:px-2 cursor-pointer 
                md:text-sm text-[5px] whitespace-nowrap`}
              onMouseEnter={() => setisCategoryHovered(item.id)}
              onMouseLeave={() => setisCategoryHovered(null)}
            >
              <span className={`${isHovered ? "text-blue-500" : ""}`}>
                {item?.category?.title}
              </span>
              {item?.category?.subItems.length > 0 && (
                <span
                  className={`ml-[2px] md:ml-1 transition-transform duration-100 ${
                    isHovered ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    width="13"
                    className={`md:w-3 md:h-2 w-[2px] h-[2px] ${
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllCategoryNav;

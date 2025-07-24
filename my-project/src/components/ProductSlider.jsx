import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { useState } from "react";

function ProductSlider({ items, title, bannerImg, showNavigation }) {
  const [isShifted, setIsShifted] = useState(false);
  const itemsLength = items.length;

  const handleNext = () => setIsShifted(true);
  const handlePrevious = () => setIsShifted(false);

  const slideShow = isShifted
    ? items.slice(2, itemsLength + 1)
    : items.slice(0, 6);

  return (
    <div className="flex mx-4 my-2 bg-white w-full">
      <div className="flex-1 ">
        <div className="py-2 px-4 text:xl md:text-2xl font-semibold ">
          {title}
        </div>
        <div className="relative  text-lg font-semibold">
          {showNavigation && isShifted && (
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-xl w-10 h-28  items-center justify-center z-10 hidden md:flex"
            >
              <FaChevronLeft />
            </button>
          )}

          <div className="overflow-y-auto  md:overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory ">
            <div className="flex flex-col  md:flex-row md:gap-4">
              {slideShow.map((item) => (
                <div
                  key={item.id}
                  className="flex-1  snap-start text-sm  border-b-2 border-gray-300 md:border-none   "
                >
                  <div className="flex items-center  w-full justify-between md:flex-col md:items-center gap-3 md:gap-6 px-4 py-3   md:border-none ">
                    {/* Image */}
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="h-20 w-16 md:h-28 md:w-36 object-contain shrink-0 hover:scale-110 transition-transform duration-300"
                    />

                    {/* Text */}
                    <div className="flex-1 min-w-0 px-4  md:px-0 md:text-center">
                      <p className="text-sm font-semibold text-black ">
                        {item.label}
                      </p>
                      <p className="text-sm text-gray-500 ">{item.sublabel}</p>
                    </div>

                    {/* Chevron Icon (Mobile only) */}
                    <div className="md:hidden shrink-0">
                      <FaChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {showNavigation && !isShifted && (
            <button
              onClick={handleNext}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-xl w-10 h-28  items-center justify-center z-10 hidden md:flex"
            >
              <FaChevronRight />
            </button>
          )}
        </div>
      </div>

      {bannerImg && (
        <div className="hidden md:flex justify-center items-center">
          <a>
            <img
              src={bannerImg}
              alt="flight-banner"
              loading="lazy"
              className="w-52 h-60 object-contain"
            />
          </a>
        </div>
      )}
    </div>
  );
}

export default ProductSlider;

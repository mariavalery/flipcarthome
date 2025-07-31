import { useEffect, useState } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function HomeTopCaroussel({ items }) {
  const [homeSlideActiveIndex, setHomeSlideActiveIndex] = useState(0);
  const slideCount = items.length;
  const intervalTime = 2000;

  useEffect(() => {
    const interval = setInterval(() => {
      setHomeSlideActiveIndex((prev) => (prev + 1) % slideCount);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [slideCount]);

  return (
    <div className="relative bg-white  my-4 md:mx-4">
      {/* Left Button */}
      <div className="hidden md:flex">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white  w-10 h-20 flex items-center justify-center z-10"
          onClick={() =>
            setHomeSlideActiveIndex((prev) =>
              prev === 0 ? slideCount - 1 : prev - 1
            )
          }
        >
          <FaChevronLeft />
        </button>
      </div>
      {/* Sliding Category Items */}
      <div className="mb-4">
        <div className="flex flex-col items-center ">
          <img src={items[homeSlideActiveIndex].icon} className="w-full" />
          <div className="flex my-2">
            {items.map((item, index) => (
              <div
                className={`relative bg-gray-200  h-1 mx-1 rounded-sm ${
                  index === homeSlideActiveIndex ? "w-10" : "w-6"
                } `}
                key={item.id}
              >
                {index === homeSlideActiveIndex && (
                  <div
                    className="absolute  left-0 top-0 h-full bg-black "
                    style={{
                      width: "100%",
                      animation: `fillBar ${intervalTime}ms linear`,
                    }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Button */}
      <div className="hidden md:flex">
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white  w-10 h-20 flex items-center justify-center z-10"
          onClick={() =>
            setHomeSlideActiveIndex((prev) =>
              prev === slideCount - 1 ? 0 : prev + 1
            )
          }
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default HomeTopCaroussel;

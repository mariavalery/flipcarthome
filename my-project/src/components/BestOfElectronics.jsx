import Slider from "react-slick";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import flightbanner from "../assets/flightbanner.webp";
import laptopstands from "../assets/electronics/laptopstands.webp";
import abaccus from "../assets/electronics/abaccus.webp";
import coolingpads from "../assets/electronics/coolingpads.webp";
import keyboards from "../assets/electronics/keyboards.webp";
import mouse from "../assets/electronics/mouse.webp";
import powerbanks from "../assets/electronics/powerbanks.webp";
import printers from "../assets/electronics/printers.webp";
import projector from "../assets/electronics/projector.webp";
import smartwatch from "../assets/electronics/smartwatch.webp";
import { useState } from "react";

const slidesItem = [
  { id: crypto.randomUUID(), icon: laptopstands, label: "Laptop Stands" },
  { id: crypto.randomUUID(), icon: abaccus, label: "Abaccus" },
  { id: crypto.randomUUID(), icon: coolingpads, label: "Cooling Pads" },
  { id: crypto.randomUUID(), icon: keyboards, label: "Keyboard" },
  { id: crypto.randomUUID(), icon: mouse, label: "Mouse" },
  { id: crypto.randomUUID(), icon: powerbanks, label: "Power Banks" },
  { id: crypto.randomUUID(), icon: printers, label: "Printers" },
  { id: crypto.randomUUID(), icon: projector, label: "Projector" },
  { id: crypto.randomUUID(), icon: smartwatch, label: "Smart Watch" },
];

function BestOfElectronics() {
  const [isShifted, setIsShifted] = useState(false);
  const itemsLength = slidesItem.length;
  console.log(itemsLength);

  const handleNext = () => {
    setIsShifted(true);
  };

  const handlePrevious = () => {
    setIsShifted(false);
  };
  const slideShow = isShifted
    ? slidesItem.slice(2, itemsLength + 1)
    : slidesItem.slice(0, 6);
  return (
    <div className=" flex mx-4 my-2  bg-white">
      <div className="flex flex-col w-11/12 font-semibold text-lg mx-2">
        <div className="py-2 px-4">Best Of Electronics</div>
        <div className="flex relative">
          <div>
            {/* Left arrow button */}
            {isShifted && (
              <div>
                <button
                  onClick={() => handlePrevious()}
                  className="absolute left-0  top-1/2 transform -translate-y-1/2 w-10 h-20 z-10 bg-white border  hidden md:block"
                >
                  <FaChevronLeft />
                </button>
              </div>
            )}
            <div>
              <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-4">
                <div className="flex gap-4">
                  {slideShow.map((item) => (
                    <div
                      key={item.id}
                      className="flex-shrink-0 w-[15.5%] sm:w-[47%] md:w-[31%] lg:w-[15.5%] snap-start"
                    >
                      <div className=" p-2 ">
                        <img
                          src={item.icon}
                          alt={item.label}
                          className="h-32 w-full object-contain"
                        />
                        <p className="text-center text-sm mt-1 py-3">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Right arrow button */}
            {!isShifted && (
              <div>
                <button
                  onClick={() => handleNext()}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border w-10 h-20  hidden md:block"
                >
                  <FaChevronRight />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="hidden md:inline-flex  justify-center items-center">
          <div>
            <a>
              <img
                src={flightbanner}
                alt="flight-banner"
                lazy="loading"
                className="w-52 h-60 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestOfElectronics;

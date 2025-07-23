import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import flightbanner from "../assets/flightbanner.webp";
import laptopstands from "../assets/electronics/laptopstands.webp";
import headphone from "../assets/electronics/headphone.webp";
import mirrorlesscamera from "../assets/electronics/mirrorlesscamera.webp";
import keyboards from "../assets/electronics/keyboards.webp";
import mouse from "../assets/electronics/mouse.webp";
import powerbanks from "../assets/electronics/powerbanks.webp";
import printers from "../assets/electronics/printers.webp";
import projector from "../assets/electronics/projector.webp";
import smartwatch from "../assets/electronics/smartwatch.webp";
import { useState } from "react";

const slidesItem = [
  {
    id: crypto.randomUUID(),
    icon: laptopstands,
    label: "Laptop Stands",
    sublabel: "Grab Now",
  },
  {
    id: crypto.randomUUID(),
    icon: headphone,
    label: "Headphones",
    sublabel: "Grab Now",
  },
  {
    id: crypto.randomUUID(),
    icon: mirrorlesscamera,
    label: "Mirrorless Camera",
    sublabel: "Shop Now",
  },
  {
    id: crypto.randomUUID(),
    icon: keyboards,
    label: "Keyboard",
    sublabel: "Shop Now",
  },
  {
    id: crypto.randomUUID(),
    icon: mouse,
    label: "Mouse",
    sublabel: "Shop Now",
  },
  {
    id: crypto.randomUUID(),
    icon: powerbanks,
    label: "Power Banks",
    sublabel: "Grab Now",
  },
  {
    id: crypto.randomUUID(),
    icon: printers,
    label: "Printers",
    sublabel: "From ₹10999",
  },
  {
    id: crypto.randomUUID(),
    icon: projector,
    label: "Projector",
    sublabel: "From ₹4599",
  },
  {
    id: crypto.randomUUID(),
    icon: smartwatch,
    label: "Smart Watch",
    sublabel: "From ₹1399",
  },
];

function BestOfElectronics() {
  const [isShifted, setIsShifted] = useState(false);
  const itemsLength = slidesItem.length;

  const handleNext = () => setIsShifted(true);
  const handlePrevious = () => setIsShifted(false);

  const slideShow = isShifted
    ? slidesItem.slice(2, itemsLength + 1)
    : slidesItem.slice(0, 6);

  return (
    <div className="flex mx-4 my-2 bg-white">
      <div className="flex-1">
        <div className="py-2 px-4 font-semibold">Best Of Electronics</div>
        <div className="relative w-11/12 mx-2 text-lg font-semibold">
          {isShifted && (
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-20 z-10 bg-white border-none hidden md:flex"
            >
              <FaChevronLeft />
            </button>
          )}

          <div className="overflow-y-auto md:overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory  px-4">
            <div className="flex flex-col  md:flex-row md:gap-4">
              {slideShow.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0  snap-start text-sm  border-b-2 border-gray-300 md:border-none   "
                >
                  <div className="flex items-center  w-full justify-center md:flex-col md:items-center md:gap-6 px-4 py-3   md:border-none ">
                    {/* Image */}
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="h-28 w-28 md:h-28 md:w-32 object-contain shrink-0"
                    />

                    {/* Text */}
                    <div className="flex-1 min-w-0  md:px-0 md:text-center">
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

          {!isShifted && (
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-20 z-10 bg-white border-none hidden md:flex"
            >
              <FaChevronRight />
            </button>
          )}
        </div>
      </div>

      <div className="hidden md:flex justify-center items-center">
        <a>
          <img
            src={flightbanner}
            alt="flight-banner"
            loading="lazy"
            className="w-52 h-60 object-contain"
          />
        </a>
      </div>
    </div>
  );
}

export default BestOfElectronics;


import { useState } from "react";
import goatsaleoppo from "../assets/homeslider/goatsaleoppo.webp";
import homeutilitiessale from "../assets/homeslider/homeutilitiessale.webp";
import leathersale from "../assets/homeslider/leathersale.jpg";
import motorologoatsale from "../assets/homeslider/motorologoatsale.webp";
import opposale from "../assets/homeslider/opposale.webp";
import phone3a from "../assets/homeslider/phone3a.webp";
import saleislive from "../assets/homeslider/saleislive.webp";
import samsungsale from "../assets/homeslider/samsungsale.webp";
import smarttv from "../assets/homeslider/smarttv.webp";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const homeSliderItems=[{id:crypto.randomUUID(),icon:goatsaleoppo},
    {id:crypto.randomUUID(),icon:homeutilitiessale},{id:crypto.randomUUID(),icon:leathersale},
    {id:crypto.randomUUID(),icon:motorologoatsale},{id:crypto.randomUUID(),icon:opposale},
    {id:crypto.randomUUID(),icon:phone3a},
    {id:crypto.randomUUID(),icon:saleislive},
    {id:crypto.randomUUID(),icon:samsungsale},
    {id:crypto.randomUUID(),icon:smarttv}
]


function HomeTopCaroussel() {
  const[homeSlideActiveIndex,setHomeSlideActiveIndex]=useState(0);

  return (
    <div className="relative bg-white   my-4 md:mx-4">
      {/* Left Button */}
      <div className="hidden md:flex">
      <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white  w-10 h-20 flex items-center justify-center z-10" onClick={()=>setHomeSlideActiveIndex(prev=>prev===0?homeSliderItems.length-1:prev-1)}>
        <FaChevronLeft />
      </button>
      </div>
      {/* Sliding Category Items */}
      <div className="mb-4">
       
        <div className="flex flex-col items-center ">
         
          <img src={homeSliderItems[homeSlideActiveIndex].icon} className="w-full"/>
          <div className="border border-gray-500 border-t-2"></div>
        </div>
        
      
         
      </div>

      {/* Right Button */}
      <div className="hidden md:flex">
      <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white  w-10 h-20 flex items-center justify-center z-10" onClick={()=>setHomeSlideActiveIndex(prev=>prev===homeSliderItems.length-1?0:prev+1)}>
        <FaChevronRight />
      </button>
      </div>
    </div>
  );
}

export default HomeTopCaroussel;




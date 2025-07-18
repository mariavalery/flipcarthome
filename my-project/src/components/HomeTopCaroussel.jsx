
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
  return (
    <div className="relative bg-white px-4 py-2 mx-4 my-2">
      {/* Left Button */}
      <button className="absolute left-1 top-1/2 -translate-y-1/2 bg-white  w-8 h-8 flex items-center justify-center z-10">
        <FaChevronLeft />
      </button>

      {/* Sliding Category Items */}
      <div>
        {homeSliderItems.map(item=>(
           <div key={item.id}>
            <img src={item.icon}></img>
            <span></span>
           </div>

        ))}
      </div>

      {/* Right Button */}
      <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-white shadow  w-8 h-8 flex items-center justify-center z-10">
        <FaChevronRight />
      </button>
    </div>
  );
}

export default HomeTopCaroussel;




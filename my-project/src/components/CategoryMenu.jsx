import topoffers from "../assets/category items/topoffers.webp";
import beauty from "../assets/category items/beauty.png";
import appliances from "../assets/category items/appliances.webp";
import electronics from "../assets/category items/electronics.png";
import fashion from "../assets/category items/fashion.webp";
import flight from "../assets/category items/flight.webp";
import furnitures from "../assets/category items/furnitures.webp";
import grocery from "../assets/category items/grocery.webp";
import homedecor from "../assets/category items/homedecor.webp";
import mobilephones from "../assets/category items/mobilephones.webp";

const categoryItems=[{id:crypto.randomUUID(),icon:topoffers,label:"Top Offers"},{id:crypto.randomUUID(),icon:mobilephones,label:"Mobiles & Tablet"},{id:crypto.randomUUID(),icon:appliances,label:"TV's & Appliances"},{id:crypto.randomUUID(),icon:electronics,label:"Electronics"},{id:crypto.randomUUID(),icon:fashion,label:"Fashion"},{id:crypto.randomUUID(),icon:beauty,label:"Beauty,Food"},{id:crypto.randomUUID(),icon:homedecor,label:"Home Kitchen"},{id:crypto.randomUUID(),icon:furnitures,label:"Furniture"},{id:crypto.randomUUID(),icon:flight,label:"flight Bookings"},{id:crypto.randomUUID(),icon:grocery,label:"Grocery"}]

function Categorymenu() {
  return (
    <div className="my-2 mx-2">
     <div  className="flex  items-center justify-around shadow-md bg-white px-4 py-4 ">
      
      {categoryItems.map((item)=>(
    
        <div key={item.id} className="flex flex-col items-center min-w-fit text-sm">
        <img src={item.icon} className="w-16 h-16"/>
        <span>{item.label}</span>
        </div>
     

      ))}
       </div>
    </div>
  )
}

export default Categorymenu

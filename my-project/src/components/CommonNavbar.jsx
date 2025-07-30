import commonflipkartlogo from "../assets/common nav icons/common flipkart logo.png"
import pluslogo from "../assets/common nav icons/plus logo.png"
function CommonNavbar() {
  return (
    
       <nav className="fixed top-0 left-0 z-50 w-full h-16 bg-blue-700 px-4 py-2 flex justify-between items-center  shadow-sm ">
        <div>
             {/* Logo Section */}
            <div className="flex flex-col ">
                <a href="/">
                <img src={commonflipkartlogo} className="w-20" href="/login"/>
                </a>
                <div className="flex text-white ">
                   <a href="/" className="hover:underline text-gray-50" >
                   Explore
                   <span className="text-yellow-500  font-serif px-1">Plus</span>
                   </a>
                   <img src={pluslogo} className="w-5 "/>
                </div>
            </div>
        </div>
       </nav>

  )
}

export default CommonNavbar

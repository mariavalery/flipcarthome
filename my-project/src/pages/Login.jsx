import CommonNavbar from "../components/CommonNavbar"
import {helpmenuItems,loginmenuItems} from "../items/ItemsArray";
function Login() {
  return (
    <div className="bg-[#f5f5f5] ">
         <CommonNavbar loginmenuItems={loginmenuItems} helpmenuItems={helpmenuItems}/>
         <div className="min-h-screen">hello</div>
    </div>
  )
}

export default Login

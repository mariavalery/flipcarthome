import CommonNavbar from "../components/CommonNavbar";
import { Outlet } from "react-router-dom";
import { helpmenuItems, loginmenuItems } from "../items/ItemsArray";

export default function LoginLayout() {
  return (
    <>
      <CommonNavbar loginmenuItems={loginmenuItems} helpmenuItems={helpmenuItems} />
      <Outlet /> {/* child pages will appear here */}
    </>
  );
}

// HomeLayout.jsx
import HomeNavbar from "../components/HomeNavbar";
import { Outlet } from "react-router-dom";
import { loginmenuItems,helpmenuItems } from "../items/ItemsArray";

export default function HomeLayout() {
  return (
    <>
      <HomeNavbar loginmenuItems={loginmenuItems} helpmenuItems={helpmenuItems} />
      <Outlet /> {/* child pages will appear here */}
    </>
  );
}

import CommonNavbar from "../components/CommonNavbar";
import { Outlet } from "react-router-dom";
import { helpmenuItems, loginmenuItems } from "../items/ItemsArray";
import FooterCopyright from "../components/FooterCopyright";

export default function LoginLayout() {
  return (
    <div className="flex flex-col min-h-screen"> {/* full height flex container */}
      
      {/* Navbar */}
      <CommonNavbar
        loginmenuItems={loginmenuItems}
        helpmenuItems={helpmenuItems}
      />

      {/* Main content takes up available space */}
      <main className="flex-grow pt-14">
        <Outlet /> {/* child pages will appear here */}
      </main>

      {/* Footer always at the bottom */}
      <footer className="mt-auto">
        <div className="w-full">
          <FooterCopyright />
        </div>
      </footer>
    </div>
  );
}

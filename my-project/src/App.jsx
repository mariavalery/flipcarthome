import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import HomeLayout from "./layouts/HomeLayout";
import LoginLayout from "./layouts/LoginLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home routes */}
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Login routes */}
        <Route element={<LoginLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

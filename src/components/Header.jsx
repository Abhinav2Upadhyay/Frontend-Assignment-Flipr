import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/Logo.svg";

function Header() {
const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {/* <h1>Header</h1> */}
      <header className="flex items-center justify-between px-16 py-3 text-white bg-black">
        <div className="font-sans text-2xl font-bold">
        {/* {"{"}Finsweet */}
        <img src={logo} alt="logo" />
        </div>
        <nav className="flex gap-10 ">
          <ul className="flex items-center gap-5 font-semibold">
            <li className={`cursor-pointer hover:text-sky-300 hover:border-b-2 hover:border-sky-300 ${path === "/" ? "border-b-2 border-sky-300 text-sky-300" : ""}`} onClick={() => navigate("/")}>Home</li>
            <li className={`cursor-pointer hover:text-sky-300 hover:border-b-2 hover:border-sky-300 ${path === "/blog" ? "border-b-2 border-sky-300 text-sky-300" : ""}`} onClick={() => navigate("/blog")}>Blog</li>
            <li className={`cursor-pointer hover:text-sky-300 hover:border-b-2 hover:border-sky-300 ${path === "/about-us" ? "border-b-2 border-sky-300 text-sky-300" : ""}`} onClick={() => navigate("/about-us")}>About Us</li>
            <li className={`cursor-pointer hover:text-sky-300 hover:border-b-2 hover:border-sky-300 ${path === "/contact" ? "border-b-2 border-sky-300 text-sky-300" : ""}`} onClick={() => navigate("/contact")}>Contact Us</li>
          </ul>
          <div>
            <button className="px-10 py-3 font-bold text-black bg-white hover:bg-gray-100 active:scale-95">Subscribe</button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

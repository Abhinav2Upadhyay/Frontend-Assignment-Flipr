import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/Images/Logo.svg";
import facebook_icon from "../assets/Icons/facebook_icon.svg";
import twitter_icon from "../assets/Icons/twitter_icon.svg";
import instagram_icon from "../assets/Icons/instagram_icon.svg";
import linkedIn_icon from "../assets/Icons/linkedIn_icon.svg";

function Footer() {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;

  return (
    <>
      {/* <h1>Footer</h1> */}
      <footer className="px-16 py-12 mt-24 text-white bg-black">
        <div className="flex justify-between mb-10">
            <div className="text-2xl font-bold">
            {/* {"{"}Finsweet */}
              <img src={logo} alt="logo" />
            </div>
            <ul className="flex items-center h-10 gap-5 font-semibold">
              <li className={`cursor-pointer hover:text-sky-300 hover:border-b-2 hover:border-sky-300 ${path === "/" ? "border-b-2 border-sky-300 text-sky-300" : ""}`} onClick={() => navigate("/")}>Home</li>
              <li className={`cursor-pointer hover:text-sky-300 hover:border-b-2 hover:border-sky-300 ${path === "/blog" ? "border-b-2 border-sky-300 text-sky-300" : ""}`} onClick={() => navigate("/blog")}>Blog</li>
              <li className={`cursor-pointer hover:text-sky-300 hover:border-b-2 hover:border-sky-300 ${path === "/about-us" ? "border-b-2 border-sky-300 text-sky-300" : ""}`} onClick={() => navigate("/about-us")}>About Us</li>
              <li className={`cursor-pointer hover:text-sky-300 hover:border-b-2 hover:border-sky-300 ${path === "/contact" ? "border-b-2 border-sky-300 text-sky-300" : ""}`} onClick={() => navigate("/contact")}>Contact Us</li>
              <li className={`cursor-pointer hover:text-sky-300 hover:border-b-2 hover:border-sky-300 ${path === "/privacy-policy" ? "border-b-2 border-sky-300 text-sky-300" : ""}`} onClick={() => navigate("/privacy-policy")}>Privacy Policy</li>
            </ul>
        </div>
        <div className="flex justify-between p-16 bg-gray-700">
            <div className="font-semibold text-3xl w-[50%]">Subscribe to our news letter to get latest updates and news</div>
            <div className="flex gap-8 items-center w-[50%] justify-end">
                <div className="w-[70%]">
                    <input className="bg-gray-800 bg-opacity-50 px-6 py-4 w-[100%] border-[2px] border-gray-600 " type="text" placeholder="Enter Your Email" />
                </div>
                <button className="px-16 py-4 font-semibold text-black bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-400">Subscribe</button>
            </div>
        </div>
        <div className="flex justify-between mt-12">
            <div className="text-gray-300">
                <p>Finstreet 118 2561 Fintown</p>
                <p>Hello@finsweet.com 020 7993 2905</p>
            </div>
            <div className="flex gap-8">
                <img className="w-4 h-4 cursor-pointer invert" src={facebook_icon} alt="facebook icon" />
                <img className="w-4 h-4 cursor-pointer invert" src={twitter_icon} alt="twitter icon" />
                <img className="w-4 h-4 cursor-pointer invert" src={instagram_icon} alt="instagram icon" />
                <img className="w-4 h-4 cursor-pointer invert" src={linkedIn_icon} alt="linkedIn icon" />
            </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

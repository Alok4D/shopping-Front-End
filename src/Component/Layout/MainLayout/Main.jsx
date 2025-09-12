import Header from "../../Pages/SharedPages/Header/Header";
import navlogo from '../../../assets/navLogo/plant 1.png'
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { FaHeart, FaPhoneAlt, FaShoppingBag, FaUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/SharedPages/Footer/Footer";

const Main = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    return (
        <div>
           <Header/>
           <div>
                {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="container flex items-center justify-between px-6 py-3 mx-auto lg:px-7">
          {/* Left side - Nav Links */}
          <div className="flex items-center gap-6">
            {/* Mobile menu button */}
            <button
              className="text-2xl lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <HiOutlinex /> : <HiOutlineMenu />}
            </button>

            <ul
              className={`lg:flex items-center gap-6 absolute lg:static bg-white left-0 top-14 w-full lg:w-auto px-6 lg:px-0 transition-all duration-300 ${
                mobileOpen ? "block" : "hidden"
              }`}
            >
              <li className="py-2 lg:py-0">
                <a href="#" className="font-medium hover:text-green-700">Home</a>
              </li>
              <li className="py-2 lg:py-0">
                <a href="#" className="font-medium hover:text-green-700">Shop</a>
              </li>
              <li className="py-2 lg:py-0">
                <a href="#" className="font-medium hover:text-green-700">Pages</a>
              </li>
              <li className="py-2 lg:py-0">
                <a href="#" className="font-medium hover:text-green-700">Blog</a>
              </li>
              <li className="py-2 lg:py-0">
                <a href="#" className="font-medium hover:text-green-700">About Us</a>
              </li>
            </ul>
          </div>

          {/* Center - Logo */}
          <a href="/" className="absolute flex items-center gap-2 text-2xl font-bold text-green-800 transform -translate-x-1/2 left-1/2">
            <span className="text-3xl"><img src={navlogo} alt="" /></span> Ecobazar
          </a>

          {/* Right side - Icons */}
          <div className="flex items-center gap-6 text-xl">
            {/* Phone */}
            <div className="items-center hidden gap-2 text-base text-gray-700 md:flex">
              <FaPhoneAlt className="text-green-700" />
              <span>(219) 555-0114</span>
            </div>

            <FiSearch className="cursor-pointer hover:text-green-700" />
            <FaHeart className="cursor-pointer hover:text-green-700" />
            <div className="relative cursor-pointer">
              <FaShoppingBag className="hover:text-green-700" />
              <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-green-700 rounded-full -top-2 -right-2">
                2
              </span>
            </div>
            <FaUser className="cursor-pointer hover:text-green-700" />
          </div>
        </div>
      </nav>
           </div>
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default Main;
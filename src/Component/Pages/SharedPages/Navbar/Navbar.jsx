import { useState } from "react";
import {
  FiPhone,
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import navLogo from "../../../../assets/navLogo/plant 1.png";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shops" },
  { name: "Pages", path: "/dashboard" },
  { name: "Blog", path: "/blog" },
  { name: "About Us", path: "/aboutUS" },
  { name: "Contact Us", path: "/contactUs" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full bg-gray-100 border-b border-gray-200 backdrop-blur-3xl">
    
        <div className="bg-[#f1f5f1] text-sm text-gray-600 py-2 px-4">
      <div className="container flex flex-col items-center justify-between gap-2 mx-auto sm:flex-row">
        <span className="text-center sm:text-left">
          📍 Store Location: Lincoln- 344, Illinois, Chicago, USA
        </span>

        <div className="flex items-center space-x-4">

          {/* Language Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-2 py-1 transition rounded hover:bg-green-100">
              Eng <FaAngleDown className="text-xs transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute right-0 hidden w-20 mt-1 bg-white rounded shadow-lg group-hover:block">
              <div className="px-3 py-1 cursor-pointer hover:bg-green-50">Eng</div>
              <div className="px-3 py-1 cursor-pointer hover:bg-green-50">Spa</div>
              <div className="px-3 py-1 cursor-pointer hover:bg-green-50">Fra</div>
            </div>
          </div>

          {/* Currency Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-2 py-1 transition rounded hover:bg-green-100">
              USD <FaAngleDown className="text-xs transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute right-0 hidden w-20 mt-1 bg-white rounded shadow-lg group-hover:block">
              <div className="px-3 py-1 cursor-pointer hover:bg-green-50">USD</div>
              <div className="px-3 py-1 cursor-pointer hover:bg-green-50">EUR</div>
              <div className="px-3 py-1 cursor-pointer hover:bg-green-50">GBP</div>
            </div>
          </div>

        </div>
      </div>
    </div>

      {/* Main Navbar */}
      <nav className="px-4 py-3 bg-white shadow-sm">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={navLogo} alt="Logo" className="h-8" />
            <span className="text-2xl font-bold text-green-700">Ecobazar</span>
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 lg:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>

          {/* Desktop Nav */}
          <div className="items-center justify-center flex-1 hidden mx-10 lg:flex">
            <ul className="flex space-x-6 font-medium text-gray-700">
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `cursor-pointer hover:text-green-700 ${
                        isActive ? "text-green-700 font-semibold" : ""
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Icons */}
          <div className="items-center hidden space-x-5 text-xl text-gray-700 lg:flex">
            <div className="flex items-center space-x-1 text-sm">
              <FiPhone />
              <span className="text-base">(219) 555-0114</span>
            </div>
            <FiSearch className="cursor-pointer hover:text-green-700" />
            <Link to="/wishlist">
              <FiHeart className="cursor-pointer hover:text-green-700" />
            </Link>
            <Link
              to="/shoppingCart"
              className="relative cursor-pointer hover:text-green-700"
            >
              <FiShoppingBag />
              <span className="absolute flex items-center justify-center w-4 h-4 text-xs text-white bg-green-600 rounded-full -top-2 -right-2">
                0
              </span>
            </Link>
            <Link to="/signIn">
              <FiUser className="cursor-pointer hover:text-green-700" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="px-4 pb-4 mt-4 lg:hidden">
            <ul className="mb-4 space-y-2 font-medium text-gray-700">
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-1 hover:text-green-700 ${
                        isActive ? "text-green-700 font-semibold" : ""
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile Icons */}
            <div className="flex flex-wrap gap-4 text-xl text-gray-700">
              <div className="flex items-center space-x-1 text-sm">
                <FiPhone />
                <span className="text-base">(219) 555-0114</span>
              </div>
              <FiSearch className="cursor-pointer hover:text-green-700" />
              <FiHeart className="cursor-pointer hover:text-green-700" />
              <div className="relative cursor-pointer hover:text-green-700">
                <FiShoppingBag />
                <span className="absolute flex items-center justify-center w-4 h-4 text-xs text-white bg-green-600 rounded-full -top-2 -right-2">
                  0
                </span>
              </div>
              <Link to="/signIn">
                <FiUser className="cursor-pointer hover:text-green-700" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

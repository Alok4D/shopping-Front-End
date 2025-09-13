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

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);

  return (
    <div className="w-full border-b border-gray-200">
      {/* Top Bar */}
      <div className="bg-[#f1f5f1] text-sm text-gray-600 py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="text-center sm:text-left">
            📍 Store Location: Lincoln- 344, Illinois, Chicago, USA
          </span>
          <div className="flex items-center space-x-4">
            <span className="cursor-pointer hover:text-green-700">
              Eng <FaAngleDown className="inline ml-1" />
            </span>
            <span className="cursor-pointer hover:text-green-700">
              USD <FaAngleDown className="inline ml-1" />
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white px-4 py-3 shadow-sm">
        <div className="container mx-auto flex items-center justify-between flex-wrap">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img src={navLogo} alt="Logo" className="h-8" />
            <span className="text-2xl font-bold text-green-700">Ecobazar</span>
          </a>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Nav (Large screen) */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-10">
            <ul className="flex space-x-6 font-medium text-gray-700 relative">
              <NavLink to="/">
                {" "}
                <li className="cursor-pointer hover:text-green-700">Home</li>
              </NavLink>

              {/* Shop dropdown only on large screens */}
              <li
                className="relative cursor-pointer flex items-center hover:text-green-700"
                onClick={() => setShopDropdownOpen(!shopDropdownOpen)}
              >
                Shop <FaAngleDown className="ml-1 text-xs" />
                {shopDropdownOpen && (
                  <ul className="absolute top-full left-0 mt-2 w-40 bg-white shadow-md rounded-md z-20">
                    <Link to="/productDetails">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Products Details
                      </li>
                    </Link>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Categories
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Best Sellers
                    </li>
                  </ul>
                )}
              </li>

              {/* Pages dropdown only on large screens */}
              <li
                className="relative cursor-pointer flex items-center hover:text-green-700"
                onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
              >
                Pages <FaAngleDown className="ml-1 text-xs" />
                {pagesDropdownOpen && (
                  <ul className="absolute top-full left-0 mt-2 w-40 bg-white shadow-md rounded-md z-20">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      About Us
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Contact
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      FAQ
                    </li>
                  </ul>
                )}
              </li>

              {/* Blog dropdown only on large screens */}
                <NavLink to="/blog">
                <li className="cursor-pointer hover:text-green-700">Blog</li>
              </NavLink>

              <li className="cursor-pointer hover:text-green-700">About Us</li>
            </ul>
          </div>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center space-x-5 text-gray-700 text-xl">
            <div className="flex items-center text-sm space-x-1">
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
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </Link>
            <div className="border-2">
              <Link to="/signIn">
                <FiUser className="cursor-pointer hover:text-green-700" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Menu (Small & Medium devices) */}
        {menuOpen && (
          <div className="lg:hidden mt-4 px-4 pb-4">
            <ul className="space-y-2 text-gray-700 font-medium mb-4">
              <NavLink to="/">
                {" "}
                <li className="cursor-pointer hover:text-green-700">Home</li>
              </NavLink>
              {/* Shop dropdown only on large screens */}
              <li
                className="relative cursor-pointer flex items-center hover:text-green-700"
                onClick={() => setShopDropdownOpen(!shopDropdownOpen)}
              >
                Shop <FaAngleDown className="ml-1 text-xs" />
                {shopDropdownOpen && (
                  <ul className="absolute top-full left-0 mt-2 w-40 bg-white shadow-md rounded-md z-20">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      All Products
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Categories
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Best Sellers
                    </li>
                  </ul>
                )}
              </li>

              {/* Pages dropdown only on large screens */}
              <li
                className="relative cursor-pointer flex items-center hover:text-green-700"
                onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
              >
                Pages <FaAngleDown className="ml-1 text-xs" />
                {pagesDropdownOpen && (
                  <ul className="absolute top-full left-0 mt-2 w-40 bg-white shadow-md rounded-md z-20">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      About Us
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Contact
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      FAQ
                    </li>
                  </ul>
                )}
              </li>

              {/* Blog dropdown only on large screens */}
                <NavLink to="/blog">
                <li className="cursor-pointer hover:text-green-700">Blog</li>
              </NavLink>
              <li className="cursor-pointer hover:text-green-700">About Us</li>
            </ul>
            <div className="flex flex-wrap gap-4 text-gray-700 text-xl">
              <div className="flex items-center text-sm space-x-1">
                <FiPhone />
                <span className="text-base">(219) 555-0114</span>
              </div>
              <FiSearch className="cursor-pointer hover:text-green-700" />
              <FiHeart className="cursor-pointer hover:text-green-700" />
              <div className="relative cursor-pointer hover:text-green-700">
                <FiShoppingBag />
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  0
                </span>
              </div>
              <div>
                <Link to="/signIn">
                  <FiUser className="cursor-pointer hover:text-green-700" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

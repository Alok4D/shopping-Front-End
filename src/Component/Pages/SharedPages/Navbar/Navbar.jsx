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
  { name: "Pages", path: "/pages" },
  { name: "Blog", path: "/blog" },
  { name: "About Us", path: "/aboutUS" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full border-b border-gray-200">
    
        <div className="bg-[#f1f5f1] text-sm text-gray-600 py-2 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <span className="text-center sm:text-left">
          📍 Store Location: Lincoln- 344, Illinois, Chicago, USA
        </span>

        <div className="flex items-center space-x-4">

          {/* Language Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-2 py-1 rounded hover:bg-green-100 transition">
              Eng <FaAngleDown className="transition-transform duration-200 group-hover:rotate-180 text-xs" />
            </button>
            <div className="absolute right-0 mt-1 w-20 bg-white shadow-lg rounded hidden group-hover:block">
              <div className="px-3 py-1 hover:bg-green-50 cursor-pointer">Eng</div>
              <div className="px-3 py-1 hover:bg-green-50 cursor-pointer">Spa</div>
              <div className="px-3 py-1 hover:bg-green-50 cursor-pointer">Fra</div>
            </div>
          </div>

          {/* Currency Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-2 py-1 rounded hover:bg-green-100 transition">
              USD <FaAngleDown className="transition-transform duration-200 group-hover:rotate-180 text-xs" />
            </button>
            <div className="absolute right-0 mt-1 w-20 bg-white shadow-lg rounded hidden group-hover:block">
              <div className="px-3 py-1 hover:bg-green-50 cursor-pointer">USD</div>
              <div className="px-3 py-1 hover:bg-green-50 cursor-pointer">EUR</div>
              <div className="px-3 py-1 hover:bg-green-50 cursor-pointer">GBP</div>
            </div>
          </div>

        </div>
      </div>
    </div>

      {/* Main Navbar */}
      <nav className="bg-white px-4 py-3 shadow-sm">
        <div className="container mx-auto flex items-center justify-between flex-wrap">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={navLogo} alt="Logo" className="h-8" />
            <span className="text-2xl font-bold text-green-700">Ecobazar</span>
          </Link>

          {/* Mobile Toggle */}
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-10">
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
            <Link to="/signIn">
              <FiUser className="cursor-pointer hover:text-green-700" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4 px-4 pb-4">
            <ul className="space-y-2 text-gray-700 font-medium mb-4">
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


// import { useState } from "react";
// import {
//   FiPhone,
//   FiSearch,
//   FiHeart,
//   FiShoppingBag,
//   FiUser,
// } from "react-icons/fi";
// import { FaAngleDown } from "react-icons/fa";
// import navLogo from "../../../../assets/navLogo/plant 1.png";
// import { Link, NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   return (
//     <div className="w-full border-b border-gray-200">
//       {/* Top Bar */}
//       <div className="bg-[#f1f5f1] text-sm text-gray-600 py-2 px-4">
//         <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
//           <span className="text-center sm:text-left">
//             📍 Store Location: Lincoln- 344, Illinois, Chicago, USA
//           </span>
//           <div className="flex items-center space-x-4">
//             <span className="cursor-pointer hover:text-green-700">
//               Eng <FaAngleDown className="inline ml-1" />
//             </span>
//             <span className="cursor-pointer hover:text-green-700">
//               USD <FaAngleDown className="inline ml-1" />
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <nav className="bg-white px-4 py-3 shadow-sm">
//         <div className="container mx-auto flex items-center justify-between flex-wrap">
//           {/* Logo */}
//           <a href="/" className="flex items-center space-x-2">
//             <img src={navLogo} alt="Logo" className="h-8" />
//             <span className="text-2xl font-bold text-green-700">Ecobazar</span>
//           </a>

//           {/* Mobile Toggle Button */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="lg:hidden text-gray-700 focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>

//           {/* Desktop Nav (Large screen) */}
//           <div className="hidden lg:flex items-center justify-center flex-1 mx-10">
//             <ul className="flex space-x-6 font-medium text-gray-700 relative">
//               <NavLink to="/">
//                 {" "}
//                 <li className="cursor-pointer hover:text-green-700">Home</li>
//               </NavLink>

//               {/* Shop dropdown only on large screens */}
//               <li className="relative cursor-pointer flex items-center hover:text-green-700">
//                 Shop
//               </li>

//               {/* Pages dropdown only on large screens */}
//               <li className="relative cursor-pointer flex items-center hover:text-green-700">
//                 Pages
//               </li>

//               {/* Blog dropdown only on large screens */}
//               <NavLink to="/blog">
//                 <li className="cursor-pointer hover:text-green-700">Blog</li>
//               </NavLink>

//               <li className="cursor-pointer hover:text-green-700">About Us</li>
//             </ul>
//           </div>

//           {/* Desktop Icons */}
//           <div className="hidden lg:flex items-center space-x-5 text-gray-700 text-xl">
//             <div className="flex items-center text-sm space-x-1">
//               <FiPhone />
//               <span className="text-base">(219) 555-0114</span>
//             </div>
//             <FiSearch className="cursor-pointer hover:text-green-700" />
//             <Link to="/wishlist">
//               <FiHeart className="cursor-pointer hover:text-green-700" />
//             </Link>
//             <Link
//               to="/shoppingCart"
//               className="relative cursor-pointer hover:text-green-700"
//             >
//               <FiShoppingBag />
//               <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
//                 0
//               </span>
//             </Link>
//             <div className="border-2">
//               <Link to="/signIn">
//                 <FiUser className="cursor-pointer hover:text-green-700" />
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Mobile/Tablet Menu (Small & Medium devices) */}
//         {menuOpen && (
//           <div className="lg:hidden mt-4 px-4 pb-4">
//             <ul className="space-y-2 text-gray-700 font-medium mb-4">
//               <NavLink to="/">
//                 <li className="cursor-pointer hover:text-green-700">Home</li>
//               </NavLink>
//               {/* Shop dropdown only on large screens */}
//               <li className="relative cursor-pointer flex items-center hover:text-green-700">
//                 Shop
//               </li>

//               {/* Pages dropdown only on large screens */}
//               <li className="relative cursor-pointer flex items-center hover:text-green-700">
//                 Pages
//               </li>

//               {/* Blog dropdown only on large screens */}
//               <NavLink to="/blog">
//                 <li className="cursor-pointer hover:text-green-700">Blog</li>
//               </NavLink>
//               <li className="cursor-pointer hover:text-green-700">About Us</li>
//             </ul>
//             <div className="flex flex-wrap gap-4 text-gray-700 text-xl">
//               <div className="flex items-center text-sm space-x-1">
//                 <FiPhone />
//                 <span className="text-base">(219) 555-0114</span>
//               </div>
//               <FiSearch className="cursor-pointer hover:text-green-700" />
//               <FiHeart className="cursor-pointer hover:text-green-700" />
//               <div className="relative cursor-pointer hover:text-green-700">
//                 <FiShoppingBag />
//                 <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
//                   0
//                 </span>
//               </div>
//               <div>
//                 <Link to="/signIn">
//                   <FiUser className="cursor-pointer hover:text-green-700" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

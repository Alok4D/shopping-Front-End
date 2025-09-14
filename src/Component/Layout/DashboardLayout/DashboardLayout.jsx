import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineSetting,
  AiOutlineHeart,
  AiOutlineLogout,
} from "react-icons/ai";


const Dashboard = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col lg:flex-row   p-4 lg:p-8">
        {/* বাম পাশের নেভিগেশন সাইডবার */}
        {/* ছোট স্ক্রিনে মেনুবারটি অনুভূমিকভাবে (horizontally) দেখাবে */}
        <div className="w-full lg:w-64  p-4 rounded-box shadow mb-4 text-center  lg:mb-0 lg:mr-4">
          {/* 'Navigation' টাইটেলটি শুধু বড় স্ক্রিনে দেখাবে */}
          <h2 className="text-xl font-bold mb-4 hidden lg:block">Navigation</h2>

          {/* মেনু আইটেম */}
          <ul className="menu   menu-horizontal lg:menu-vertical rounded-box gap-1 lg:gap-3 justify-around">
            <li>
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `flex flex-col md:flex-row lg:gap-3 items-center p-2 rounded-box ${
                    isActive ? "bg-[#E5F5E5] text-[#48BB78] font-semibold" : ""
                  }`
                }
              >
                <AiOutlineDashboard className="h-5 w-5" />
                <span className="text-xs md:text-base mt-1">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order-history"
                className={({ isActive }) =>
                  `flex flex-col md:flex-row lg:gap-3 items-center p-2 rounded-box ${
                    isActive ? "bg-[#E5F5E5] text-[#48BB78] font-semibold" : ""
                  }`
                }
              >
                <AiOutlineShoppingCart className="h-5 w-5" />
                <span className="text-xs  md:text-base mt-1">Order History</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wishlist"
                className={({ isActive }) =>
                  `flex flex-col md:flex-row lg:gap-3 items-center p-2 rounded-box ${
                    isActive ? "bg-[#E5F5E5] text-[#48BB78] font-semibold" : ""
                  }`
                }
              >
                <AiOutlineHeart className="h-5 w-5" />
                <span className="text-xs md:text-base mt-1">Wishlist</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shoppingCart"
                className={({ isActive }) =>
                  `flex flex-col md:flex-row lg:gap-3 items-center p-2 rounded-box ${
                    isActive ? "bg-[#E5F5E5] text-[#48BB78] font-semibold" : ""
                  }`
                }
              >
                <AiOutlineShoppingCart className="h-5 w-5" />
                <span className="text-xs md:text-base mt-1">Shopping Cart</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  `flex flex-col md:flex-row lg:gap-3 items-center p-2 rounded-box ${
                    isActive ? "bg-[#E5F5E5] text-[#48BB78] font-semibold" : ""
                  }`
                }
              >
                <AiOutlineSetting className="h-5 w-5" />
                <span className="text-xs md:text-base mt-1">Settings</span>
              </NavLink>
            </li>
            {/* Log-out অপশনটি শুধু বড় স্ক্রিনে দেখাবে */}
            <li className="mt-8 hidden lg:block">
              <a
                href="#"
                className="flex flex-col md:flex-row lg:gap-3 items-center p-2 rounded-box text-gray-500 hover:text-gray-700"
              >
                <AiOutlineLogout className="h-5 w-5" />
                <span className="text-xs md:text-base mt-1">Log-out</span>
              </a>
            </li>
          </ul>
        </div>

        {/* ডান পাশের কন্টেন্ট এরিয়া */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    
    </>
  );
};

export default Dashboard;

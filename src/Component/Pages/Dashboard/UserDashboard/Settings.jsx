import  { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Settings = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <div className=" rounded-lg w-full">
      {/* Account Settings Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-lg font-bold mb-6">Account Settings</h2>
        <div className="divider"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black">First Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-[#48BB78] focus:border-[#48BB78] sm:text-sm"
                  placeholder="Dianne"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black">Last Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-[#48BB78] focus:border-[#48BB78] sm:text-sm"
                  placeholder="Russell"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-black">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-[#48BB78] focus:border-[#48BB78] sm:text-sm"
                  placeholder="dianne.russell@gmail.com"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-black">Phone Number</label>
                <input
                  type="tel"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-[#48BB78] focus:border-[#48BB78] sm:text-sm"
                  placeholder="(603) 555-0123"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMFT__mSaXJA1VDapfRw50WaFEQimQ9T_DrA&s"
              alt="Profile"
              className="w-24 h-24 rounded-full mb-4"
            />
            <button className="text-green-600  border p-4 rounded-full outline-1 font-semibold text-xs">
              Change Image
            </button>
          </div>
        </div>
        <button className="mt-6 px-4 py-2 bg-green-500 text-white rounded-full">
          Save Changes
        </button>
      </div>

      {/* Billing Address Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-lg font-bold mb-6">Billing Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-black">First Name</label>
            <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md " placeholder="Dianne" />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Last Name</label>
            <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md " placeholder="Dianne" />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Company Name (optional)</label>
            <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md " placeholder="Zakirsoft" />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <label className="block text-sm font-medium text-black">Street Address</label>
            <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md " placeholder="4840 Parker Rd." />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Country / Region</label>
            <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md ">
              <option>United States</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-black">State</label>
            <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md ">
              <option>Washington DC</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Zip Code</label>
            <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md " placeholder="20001" />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black">Email</label>
                <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md " placeholder="dianne.russell@gmail.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-black">Phone</label>
                <input type="tel" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md " placeholder="(603) 555-0123" />
              </div>
            </div>
          </div>
        </div>
        <button className="mt-6 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-[#3B8E5F] transition-colors">
          Save Changes
        </button>
      </div>

      {/* Change Password Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-bold mb-6">Change Password</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-black">Current Password</label>
            <div className="relative mt-1">
              <input
                type={passwordVisible ? "text" : "password"}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md  pr-10 focus:outline-none focus:ring-[#48BB78] focus:border-[#48BB78] sm:text-sm"
                placeholder="Password"
              />
              <span
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-black">New Password</label>
            <div className="relative mt-1">
              <input
                type={newPasswordVisible ? "text" : "password"}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md  pr-10 focus:outline-none focus:ring-[#48BB78] focus:border-[#48BB78] sm:text-sm"
                placeholder="Password"
              />
              <span
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                onClick={() => setNewPasswordVisible(!newPasswordVisible)}
              >
                {newPasswordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Confirm Password</label>
            <div className="relative mt-1">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md  pr-10 focus:outline-none focus:ring-[#48BB78] focus:border-[#48BB78] sm:text-sm"
                placeholder="Password"
              />
              <span
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              >
                {confirmPasswordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </span>
            </div>
          </div>
        </div>
        <button className="mt-6 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-[#3B8E5F] transition-colors">
          Change Password
        </button>
      </div>
    </div>
  );
};

export default Settings;
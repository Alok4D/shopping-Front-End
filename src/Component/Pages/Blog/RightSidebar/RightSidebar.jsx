import { FaSearch, FaRegBookmark } from "react-icons/fa";

const RightSidebar = () => {
  return (
    <div className="hidden lg:block w-full lg:w-1/4 border-red-400 border-2 px-6 py-6 bg-gray-100 shadow-md rounded-lg">
      {/* Search Field */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 p-3 w-full rounded-md"
          />
          <FaSearch className="absolute right-3 top-3 text-gray-600" />
        </div>
      </div>

      {/* Top Categories */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Top Categories</h3>
        <ul className="space-y-2">
          <li className="text-gray-700 hover:text-green-500 cursor-pointer">
            Fresh Fruit (134)
          </li>
          <li className="text-gray-700 hover:text-green-500 cursor-pointer">
            Vegetables (150)
          </li>
          <li className="text-gray-700 hover:text-green-500 cursor-pointer">
            Cooking (54)
          </li>
          <li className="text-gray-700 hover:text-green-500 cursor-pointer">
            Snacks (47)
          </li>
        </ul>
      </div>

      {/* Popular Tags */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs bg-green-500 text-white py-1 px-3 rounded-full cursor-pointer">
            Healthy
          </span>
          <span className="text-xs text-black py-1 px-3 rounded-full cursor-pointer">
            Low fat
          </span>
          <span className="text-xs text-black py-1 px-3 rounded-full cursor-pointer">
            Bread
          </span>
        </div>
      </div>

      {/* Recently Added */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Recently Added</h3>
        <ul className="space-y-3">
          <li className="text-sm text-gray-700 flex justify-between">
            <span>Curabitur porttitor orci eget neque accumsan.</span>
            <span className="text-xs text-gray-500">Apr 25, 2021</span>
          </li>
          <li className="text-sm text-gray-700 flex justify-between">
            <span>Donec mattis arcu faucibus suscipit viverra.</span>
            <span className="text-xs text-gray-500">Apr 25, 2021</span>
          </li>
        </ul>
      </div>

      {/* Filter Button */}
      <button className="w-full text-center bg-green-500 text-white py-2 px-4 rounded-md">
        Filter <FaRegBookmark className="inline ml-2" />
      </button>
    </div>
  );
};

export default RightSidebar;

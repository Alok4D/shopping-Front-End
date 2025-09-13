import { FiCalendar, FiFilter, FiSearch } from "react-icons/fi";

const FilterSidebar = () => {
  return (
    <div className="w-full h-[50%] md:w-1/4 bg-white px-6 pb-6 shadow-md rounded-lg border-1">
      {/* Filter Button */}
      <button className="w-full text-center bg-green-500 text-white py-2 px-4 rounded-md mb-6 flex items-center justify-center space-x-2">
        <FiFilter className="text-white" />
        <span>Filter</span>
      </button>

      {/* Search Field */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 p-3 pl-10 rounded-md w-full"
          />
          {/* Search Icon */}
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Top Categories */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Top Categories</h3>
        <ul className="space-y-2">
          <li className="flex justify-between text-gray-700 hover:text-green-500 cursor-pointer">
            <span>Fresh Fruit</span> <span>(134)</span>
          </li>
          <li className="flex justify-between text-gray-700 hover:text-green-500 cursor-pointer">
            <span>Vegetables</span> <span>(150)</span>
          </li>
          <li className="flex justify-between text-gray-700 hover:text-green-500 cursor-pointer">
            <span>Cooking</span> <span>(54)</span>
          </li>
          <li className="flex justify-between text-gray-700 hover:text-green-500 cursor-pointer">
            <span>Snacks</span> <span>(47)</span>
          </li>
          <li className="flex justify-between text-gray-700 hover:text-green-500 cursor-pointer">
            <span>Beverages</span> <span>(43)</span>
          </li>
          <li className="flex justify-between text-gray-700 hover:text-green-500 cursor-pointer">
            <span>Beauty & Health</span> <span>(38)</span>
          </li>
          <li className="flex justify-between text-gray-700 hover:text-green-500 cursor-pointer">
            <span>Bread & Bakery</span> <span>(15)</span>
          </li>
        </ul>
      </div>

      {/* Popular Tags */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs bg-green-500 text-white py-1 px-3 rounded-full cursor-pointer hover:bg-green-400 transition-colors duration-200">
            Healthy
          </span>
          <span className="text-xs text-gray-700 py-1 px-3 rounded-full cursor-pointer hover:bg-gray-200 hover:text-gray-900 transition-colors duration-200">
            Low fat
          </span>
          <span className="text-xs text-gray-700 py-1 px-3 rounded-full cursor-pointer hover:bg-gray-200 hover:text-gray-900 transition-colors duration-200">
            Bread
          </span>
          <span className="text-xs text-gray-700 py-1 px-3 rounded-full cursor-pointer hover:bg-gray-200 hover:text-gray-900 transition-colors duration-200">
            Kid foods
          </span>
          <span className="text-xs text-gray-700 py-1 px-3 rounded-full cursor-pointer hover:bg-gray-200 hover:text-gray-900 transition-colors duration-200">
            Vitamins
          </span>
          <span className="text-xs text-gray-700 py-1 px-3 rounded-full cursor-pointer hover:bg-gray-200 hover:text-gray-900 transition-colors duration-200">
            Snacks
          </span>
          <span className="text-xs text-gray-700 py-1 px-3 rounded-full cursor-pointer hover:bg-gray-200 hover:text-gray-900 transition-colors duration-200">
            Tiffin
          </span>
          <span className="text-xs text-gray-700 py-1 px-3 rounded-full cursor-pointer hover:bg-gray-200 hover:text-gray-900 transition-colors duration-200">
            Meat
          </span>
          <span className="text-xs text-gray-700 py-1 px-3 rounded-full cursor-pointer hover:bg-gray-200 hover:text-gray-900 transition-colors duration-200">
            Launch
          </span>
          <span className="text-xs text-gray-700 py-1 px-3 rounded-full cursor-pointer hover:bg-gray-200 hover:text-gray-900 transition-colors duration-200">
            Dinner
          </span>
        </div>
      </div>

      {/* Our Gallery */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Our Gallery</h3>
        <div className="grid grid-cols-3 gap-2">
          <img
            src="https://thewoksoflife.com/wp-content/uploads/2022/02/vegetable-stir-fry-10.jpg"
            alt="Gallery Item"
            className="w-full h-24 object-cover rounded-md"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRddGsrkWZk_GETUzGWFeUhTfxsj--yis-M9Q&s"
            alt="Gallery Item"
            className="w-full h-24 object-cover rounded-md"
          />
          <img
            src="https://getinspiredeveryday.com/wp-content/uploads/2022/05/Grilled-Vegetables-Get-Inspired-Everyday-6.jpg"
            alt="Gallery Item"
            className="w-full h-24 object-cover rounded-md"
          />
          <img
            src="https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/goodvegetablesoup_73412_16x9.jpg"
            alt="Gallery Item"
            className="w-full h-24 object-cover rounded-md"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL8Uw--kS6TfoaMz4mvgeiFV2DBrlZYxO8qg&s"
            alt="Gallery Item"
            className="w-full h-24 object-cover rounded-md"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmTmg-w5kSL4mpuopTT68KkWE1Gi-t7_-lmg&s"
            alt="Gallery Item"
            className="w-full h-24 object-cover rounded-md"
          />
        </div>
      </div>

      {/* Recently Added */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Recently Added</h3>
        <ul className="space-y-4">
          <li className="flex items-center space-x-4">
            {/* Image on the left */}
            <img
              src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/09/Vegetable-Soup-main.jpg"
              alt="Image 1"
              className="w-16 h-16 object-cover rounded-md"
            />
            {/* Content and Date on the right */}
            <div className="flex-1">
              <span className="text-sm text-gray-700">
                Curabitur porttitor orci eget neque accumsan.
              </span>
              <div className="flex items-center text-xs text-gray-500 mt-2">
                <FiCalendar className="mr-2" /> <span>Apr 25, 2021</span>
              </div>
            </div>
          </li>

          <li className="flex items-center space-x-4">
            {/* Image on the left */}
            <img
              src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/rice_paper_gochujang_94109_16x9.jpg"
              alt="Image 2"
              className="w-16 h-16 object-cover rounded-md"
            />
            {/* Content and Date on the right */}
            <div className="flex-1">
              <span className="text-sm text-gray-700">
                Donec mattis arcu faucibus suscipit viverra.
              </span>
              <div className="flex items-center text-xs text-gray-500 mt-2">
                <FiCalendar className="mr-2" /> <span>Apr 25, 2021</span>
              </div>
            </div>
          </li>

          <li className="flex items-center space-x-4">
            {/* Image on the left */}
            <img
              src="https://www.kawalingpinoy.com/wp-content/uploads/2015/05/ginisang-gulay-1.jpg"
              alt="Image 3"
              className="w-16 h-16 object-cover rounded-md"
            />
            {/* Content and Date on the right */}
            <div className="flex-1">
              <span className="text-sm text-gray-700">
                Quisque posuere tempus rutrum.
              </span>
              <div className="flex items-center text-xs text-gray-500 mt-2">
                <FiCalendar className="mr-2" /> <span>Apr 25, 2021</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterSidebar;


import { FaCheckCircle } from "react-icons/fa";
import Man1 from "../../../../../assets/sabbirassets/TopCategories/Man.png";
import Man2 from "../../../../../assets/sabbirassets/TopCategories/Man1.png";

import { Link } from "react-router-dom";

const Trusted = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-12 md:py-16 flex flex-col lg:flex-row gap-10 items-center bg-white">
      {/* Left Images */}
      <div className="flex flex-col md:flex-row gap-4 w-full h-full  justify-center">
        <img
          src={Man2}
          alt="Farmer 1"
          className="md:w-1/2  h-72 object-cover rounded-lg"
        />
        <img
          src={Man1}
          alt="Farmer 2"
          className="md:w-1/2 h-full object-cover rounded-lg"
        />
      </div>

      {/* Right Text */}
      <div className="w-full  space-y-6 text-center md:text-left md:pt-10 lg:pt-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-snug">
          100% Trusted <br className="hidden md:block" /> Organic Food Store
        </h2>

        {/* Feature 1 */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center sm:items-start">
          <FaCheckCircle className="text-green-600 text-xl shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-700">
              Healthy & natural food for lovers of healthy food.
            </h4>
            <p className="text-sm text-gray-500 mt-1">
              Ut quis tempus erat. Phasellus euismod bibendum magna non
              tristique. Pellentesque semper vestibulum elit sed condimentum.
              Nunc pretium fermentum interdum.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center sm:items-start">
          <FaCheckCircle className="text-green-600 text-xl shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-700">
              Every day fresh and quality products for you.
            </h4>
            <p className="text-sm text-gray-500 mt-1">
              Maecenas vehicula a justo quis laoreet. Sed in placerat nibh, a
              posuere ex. Morbi sem neque, aliquam sed orci et, rhoncus lobortis
              felis. Sed vestibulum nisl sit amet sapien.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <Link to="#">
          <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300">
            Shop Now →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Trusted;
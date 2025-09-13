import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Image1 from "../../../../../assets/sabbirassets/TopCategories/Image.png";
import Image2 from "../../../../../assets/sabbirassets/TopCategories/Image1.png";


const CardSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto p-6">
      {/* Card 1 */}
      <div
        className="relative w-full md:w-1/2 rounded-lg overflow-hidden bg-gray-900 text-white h-64 md:h-80"
        style={{
          backgroundImage: `url(${Image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0  bg-opacity-60 p-6 flex flex-col justify-center">
          <p className="text-sm mb-2 opacity-70">100% ORGANIC</p>
          <h1 className="text-3xl font-bold mb-3">Fruit & Vegetable</h1>
          <p className="mb-5">
            Starting at{" "}
            <span className="bg-orange-500 px-2 py-1 rounded font-semibold text-white">
              $11.99
            </span>
          </p>
          <Link to="#">
            <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300">
              Shop Now →
            </button>
          </Link>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="relative w-full md:w-1/2 rounded-lg overflow-hidden bg-gradient-to-r from-blue-400 to-blue-600 text-white h-64 md:h-80"
        style={{
          backgroundImage: `url(${Image2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0  bg-opacity-40 p-6 flex flex-col justify-center">
          <p className="text-xs mb-1">SALE OFF THE WEEK</p>
          <h1 className="text-3xl font-bold mb-4">Sales of the Year</h1>
          <div className="flex gap-4 text-sm mb-6">
            <span>00 DAYS</span>
            <span>02 HOURS</span>
            <span>18 MINS</span>
            <span>46 SECS</span>
          </div>
          <Link to="#">
            <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300">
              Shop Now →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardSection;

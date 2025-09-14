import { FaCheckCircle } from "react-icons/fa";
import Man1 from "../../../../../assets/sabbirassets/TopCategories/Man.png";
import Man2 from "../../../../../assets/sabbirassets/TopCategories/Man1.png";
import { Link } from "react-router-dom";

const Trusted = () => {
  return (
    <section className="bg-white py-16">
      <div className=" flex flex-col lg:flex-row items-center gap-10 px-4 md:px-6 lg:px-10">
        {/* Left Images */}
        <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-1/2 justify-center">
          <img
            src={Man2}
            alt="Farmer with apples"
            className="w-full sm:w-1/2 h-72 md:h-80 lg:h-96 rounded-lg object-cover shadow-lg"
          />
          <img
            src={Man1}
            alt="Man with basket"
            className="w-full sm:w-1/2 h-72 md:h-80 lg:h-96 rounded-lg object-cover shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
            100% Trusted <br /> Organic Food Store
          </h2>

          {/* Feature 1 */}
          <div className="flex items-start gap-3 mb-5">
            <FaCheckCircle className="text-green-500 text-xl mt-1 shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-800">
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
          <div className="flex items-start gap-3 mb-6">
            <FaCheckCircle className="text-green-500 text-xl mt-1 shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-800">
                Every day fresh and quality products for you.
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                Maecenas vehicula a justo quis laoreet. Sed in placerat nibh, a
                posuere ex. Morbi sem neque, aliquam sed orci et, rhoncus lobortis
                felis. Sed vestibulum nisl sit amet sapien.
              </p>
            </div>
          </div>

          {/* Button */}
          <Link to="#">
            <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
              Shop Now →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Trusted;

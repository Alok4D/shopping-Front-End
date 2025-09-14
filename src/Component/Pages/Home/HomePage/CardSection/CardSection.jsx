import { Link } from "react-router-dom";
import Image1 from "../../../../../assets/sabbirassets/TopCategories/Image.png";
import Image2 from "../../../../../assets/sabbirassets/TopCategories/Image1.png";

const CardSection = () => {
  return (
    <section className="py-10 px-4 md:px-8 lg:px-16 bg-white">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* --- Card 1 --- */}
        <div
          className="relative rounded-xl overflow-hidden h-72 md:h-80 lg:h-96 shadow-lg"
          style={{
            backgroundImage: `url(${Image1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-6 text-white">
            <p className="text-sm text-green-200 mb-2 font-medium tracking-wider">
              100% ORGANIC
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Fruits & Vegetables
            </h2>
            <p className="mb-4">
              Starting from{" "}
              <span className="bg-orange-500 px-2 py-1 rounded text-white font-semibold">
                $11.99
              </span>
            </p>
            <Link to="#">
              <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300 w-max">
                Shop Now →
              </button>
            </Link>
          </div>
        </div>

        {/* --- Card 2 --- */}
        <div
          className="relative rounded-xl overflow-hidden h-72 md:h-80 lg:h-96 shadow-lg"
          style={{
            backgroundImage: `url(${Image2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center p-6 text-white">
            <p className="text-xs text-yellow-300 mb-1 tracking-wider uppercase">
              SALE OF THE WEEK
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Best Deals of the Year
            </h2>
            <div className="flex gap-4 text-sm font-medium mb-5">
              <span>00 DAYS</span>
              <span>02 HOURS</span>
              <span>18 MINS</span>
              <span>46 SECS</span>
            </div>
            <Link to="#">
              <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300 w-max">
                Shop Now →
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CardSection;

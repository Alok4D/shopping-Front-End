
import { FaRegHeart, FaUser, FaComments, FaArrowRight } from "react-icons/fa";

import Image1 from "../../../src/assets/sabbirassets/TopCategories/Image (2).png";
import Image2 from "../../../src/assets/sabbirassets/TopCategories/Image (3).png";
import Image3 from "../../../src/assets/sabbirassets/TopCategories/Image (4).png";

const LatestNews = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <p className="text-green-500 uppercase text-sm tracking-widest mb-2">
          Blog
        </p>
        <h2 className="text-3xl font-bold">Latest News</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          <div className="relative">
            <img
              src={Image1}
              alt="Orange slices"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="absolute top-3 left-3 bg-white text-black text-xs font-semibold px-3 py-1 rounded shadow">
              18 NOV
            </div>
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <div className="flex gap-4 text-xs text-gray-400 mb-2">
              <span className="flex items-center gap-1">
                <FaRegHeart /> Food
              </span>
              <span className="flex items-center gap-1">
                <FaUser /> By Admin
              </span>
              <span className="flex items-center gap-1">
                <FaComments /> 65 Comments
              </span>
            </div>
            <h3 className="text-sm font-semibold mb-3">
              Curabitur porttitor orci eget neque accumsan venenatis. Nunc
              fermentum.
            </h3>
            <a
              href="#"
              className="text-green-600 font-semibold flex items-center gap-1 hover:underline mt-auto"
            >
              Read More <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          <div className="relative">
            <img
              src={Image2}
              alt="Egg Salad"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="absolute top-3 left-3 bg-white text-black text-xs font-semibold px-3 py-1 rounded shadow">
              23 JAN
            </div>
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <div className="flex gap-4 text-xs text-gray-400 mb-2">
              <span className="flex items-center gap-1">
                <FaRegHeart /> Food
              </span>
              <span className="flex items-center gap-1">
                <FaUser /> By Admin
              </span>
              <span className="flex items-center gap-1">
                <FaComments /> 65 Comments
              </span>
            </div>
            <h3 className="text-sm font-semibold mb-3">
              Curabitur porttitor orci eget neque accumsan venenatis. Nunc
              fermentum.
            </h3>
            <a
              href="#"
              className="text-green-600 font-semibold flex items-center gap-1 hover:underline mt-auto"
            >
              Read More <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          <div className="relative">
            <img
              src={Image3}
              alt="Fresh Salad"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="absolute top-3 left-3 bg-white text-black text-xs font-semibold px-3 py-1 rounded shadow">
              18 NOV
            </div>
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <div className="flex gap-4 text-xs text-gray-400 mb-2">
              <span className="flex items-center gap-1">
                <FaRegHeart /> Food
              </span>
              <span className="flex items-center gap-1">
                <FaUser /> By Admin
              </span>
              <span className="flex items-center gap-1">
                <FaComments /> 65 Comments
              </span>
            </div>
            <h3 className="text-sm font-semibold mb-3">
              Curabitur porttitor orci eget neque accumsan venenatis. Nunc
              fermentum.
            </h3>
            <a
              href="#"
              className="text-green-600 font-semibold flex items-center gap-1 hover:underline mt-auto"
            >
              Read More <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;

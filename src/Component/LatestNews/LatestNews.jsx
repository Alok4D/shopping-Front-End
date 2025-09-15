import { FaRegHeart, FaUser, FaComments, FaArrowRight } from "react-icons/fa";

import Image1 from "../../../src/assets/sabbirassets/TopCategories/Image (2).png";
import Image2 from "../../../src/assets/sabbirassets/TopCategories/Image (3).png";
import Image3 from "../../../src/assets/sabbirassets/TopCategories/Image (4).png";


const LatestNews = () => {
  return (
    <section className="w-full bg-[#F2F2F2]">
  <div className="container mx-auto lg:px-0 px-2 sm:px-6 py-12">
    <div className="text-center mb-10">
      <p className="text-green-500 uppercase text-sm tracking-widest mb-2">
        Blog
      </p>
      <h2 className="text-3xl font-bold text-gray-800">Latest News</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[Image1, Image2, Image3].map((img, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition hover:shadow-xl hover:-translate-y-1 duration-300 group"
        >
          {/* Image */}
          <div className="relative w-full h-[220px] overflow-hidden">
            <img
              src={img}
              alt="Blog Cover"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 left-3 bg-white text-black text-xs font-semibold px-3 py-1 rounded shadow">
              {index === 1 ? "23 JAN" : "18 NOV"}
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-grow">
            <div className="flex gap-4 text-xs text-gray-400 mb-2 flex-wrap">
              <span className="flex items-center gap-1">
                <FaRegHeart className="text-green-500" /> Food
              </span>
              <span className="flex items-center gap-1">
                <FaUser className="text-green-500" /> By Admin
              </span>
              <span className="flex items-center gap-1">
                <FaComments className="text-green-500" /> 65 Comments
              </span>
            </div>

            <h3 className="text-base font-semibold text-gray-800 mb-4 leading-snug">
              Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.
            </h3>

            <a
              href="#"
              className="text-green-600 font-semibold flex items-center gap-2 mt-auto hover:underline"
            >
              Read More <FaArrowRight />
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default LatestNews;

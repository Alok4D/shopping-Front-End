import { FaStar, FaQuoteLeft } from "react-icons/fa";

import JennyWilson from "../../../../../assets/sabbirassets/about/Jenny Wilson.png";
import JaneCooper from "../../../../../assets/sabbirassets/about/Jane Cooper.png";
import CodyFisher from "../../../../../assets/sabbirassets/about/Cody Fisher.png";

const ClientTestimonial = () => {
  return (
    <section className="container relative px-6 py-12 mx-auto bg-gradient-to-b from-white to-gray-50">
      {/* Title */}
      <div className="flex items-center justify-between max-w-5xl mx-auto mb-10">
        <div>
          <h1 className="text-3xl font-bold">Client Testimonail</h1>
        </div>
        {/* arrow button */}
        <div className="flex gap-4">
          <button className="flex items-center justify-center w-8 h-8 transition border border-gray-300 rounded-full hover:bg-green-500 hover:text-white">
            ←
          </button>
          <button className="flex items-center justify-center w-8 h-8 text-white transition bg-green-500 rounded-full hover:bg-green-600">
            →
          </button>
        </div>
      </div>

      {/* Cards container */}
      <div className="flex flex-col max-w-5xl gap-8 mx-auto md:flex-row">
        {/* Card 1 */}
        <div className="relative flex flex-col justify-between flex-1 p-6 bg-white rounded-lg shadow-md">
          <FaQuoteLeft className="text-3xl text-green-400 top-6 left-6 " />
          <p className="mt-4 mb-10 text-sm leading-relaxed text-gray-600">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
            sodales. Donec sed neque eget.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={JennyWilson}
                alt="Robert Fox"
                className="object-cover w-8 h-8 rounded-full"
              />
              <div>
                <p className="font-semibold">Robert Fox</p>
                <p className="text-xs text-gray-500">Customer</p>
              </div>
            </div>
            <div className="flex space-x-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative flex flex-col justify-between flex-1 p-6 bg-white rounded-lg shadow-md">
          <FaQuoteLeft className="text-3xl text-green-400 top-6 left-6" />
          <p className="mt-4 mb-10 text-sm leading-relaxed text-gray-600">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
            sodales. Donec sed neque eget.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={JaneCooper}
                alt="Dianne Russell"
                className="object-cover w-8 h-8 rounded-full"
              />
              <div>
                <p className="font-semibold">Dianne Russell</p>
                <p className="text-xs text-gray-500">Customer</p>
              </div>
            </div>
            <div className="flex space-x-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative flex flex-col justify-between flex-1 p-6 bg-white rounded-lg shadow-md">
          <FaQuoteLeft className="text-3xl text-green-400 top-6 left-6" />
          <p className="mt-4 mb-10 text-sm leading-relaxed text-gray-600">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
            sodales. Donec sed neque eget.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={CodyFisher}
                alt="Eleanor Pena"
                className="object-cover w-8 h-8 rounded-full"
              />
              <div>
                <p className="font-semibold">Eleanor Pena</p>
                <p className="text-xs text-gray-500">Customer</p>
              </div>
            </div>
            <div className="flex space-x-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
    </section>
  );
};

export default ClientTestimonial;

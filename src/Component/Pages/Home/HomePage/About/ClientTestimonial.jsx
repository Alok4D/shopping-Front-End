import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import JennyWilson from '../../assets/about/Jenny Wilson.png' 
import JaneCooper from '../../assets/about/Jane Cooper.png' 
import CodyFisher from '../../assets/about/Cody Fisher.png' 

const ClientTestimonial = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 bg-gradient-to-b from-white to-gray-50 relative">
      {/* Title */}
      <div className="flex justify-between items-center max-w-5xl mx-auto mb-10">
        <div>
          <h1 className="text-3xl font-bold">Client Testimonail</h1>
        </div>
        {/* arrow button */}
        <div className="flex  gap-4">
          <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-green-500 hover:text-white transition">
            ←
          </button>
          <button className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition">
            →
          </button>
        </div>
      </div>

      {/* Cards container */}
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between flex-1 relative">
          <FaQuoteLeft className="text-green-400 text-3xl top-6 left-6 " />
          <p className="text-gray-600 mb-10 mt-4 leading-relaxed text-sm">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
            sodales. Donec sed neque eget.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={JennyWilson}
                alt="Robert Fox"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">Robert Fox</p>
                <p className="text-gray-500 text-xs">Customer</p>
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
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between flex-1 relative">
          <FaQuoteLeft className="text-green-400 text-3xl  top-6 left-6" />
          <p className="text-gray-600 mb-10 mt-4 leading-relaxed text-sm">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
            sodales. Donec sed neque eget.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={JaneCooper}
                alt="Dianne Russell"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">Dianne Russell</p>
                <p className="text-gray-500 text-xs">Customer</p>
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
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between flex-1 relative">
          <FaQuoteLeft className="text-green-400 text-3xl  top-6 left-6" />
          <p className="text-gray-600 mb-10 mt-4 leading-relaxed text-sm">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
            sodales. Donec sed neque eget.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={CodyFisher}
                alt="Eleanor Pena"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">Eleanor Pena</p>
                <p className="text-gray-500 text-xs">Customer</p>
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

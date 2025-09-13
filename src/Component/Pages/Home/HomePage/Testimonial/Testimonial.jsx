import { FaStar, FaQuoteLeft } from "react-icons/fa";
import JennyWilson from '../../../../../assets/sabbirassets/about/Jenny Wilson.png';
import JaneCooper from '../../../../../assets/sabbirassets/about/Jane Cooper.png';
import CodyFisher from '../../../../../assets/sabbirassets/about/Cody Fisher.png';

const Testimonial = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 px-4">
      <div className="container mx-auto">
        {/* Top Section: Title + Arrows */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          {/* Left: Title */}
          <div className="text-left">
            <p className="text-green-500 text-xs uppercase italic tracking-widest mb-1">Testimonial</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Our Customer Says</h2>
          </div>

          {/* Right: Navigation Arrows */}
          <div className="flex gap-3">
            <button className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-green-500 hover:text-white transition">
              ←
            </button>
            <button className="w-9 h-9 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition">
              →
            </button>
          </div>
        </div>

        {/* Testimonials Cards */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between flex-1">
            <FaQuoteLeft className="text-green-400 text-3xl mb-4" />
            <p className="text-gray-600 mb-10 leading-relaxed text-sm">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.
              Donec sed neque eget.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={JennyWilson} alt="Robert Fox" className="w-8 h-8 rounded-full object-cover" />
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
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between flex-1">
            <FaQuoteLeft className="text-green-400 text-3xl mb-4" />
            <p className="text-gray-600 mb-10 leading-relaxed text-sm">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.
              Donec sed neque eget.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={JaneCooper} alt="Dianne Russell" className="w-8 h-8 rounded-full object-cover" />
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
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between flex-1">
            <FaQuoteLeft className="text-green-400 text-3xl mb-4" />
            <p className="text-gray-600 mb-10 leading-relaxed text-sm">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.
              Donec sed neque eget.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={CodyFisher} alt="Eleanor Pena" className="w-8 h-8 rounded-full object-cover" />
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
      </div>
    </section>
  );
};

export default Testimonial;

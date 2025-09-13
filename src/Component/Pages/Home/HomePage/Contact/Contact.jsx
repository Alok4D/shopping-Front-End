
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <footer className="bg-white py-8 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-col space-y-4 md:items-center justify-between gap-6">
        {/* Logos section */}
        <div className="flex items-center space-x-10 overflow-x-auto scrollbar-hide">
          <p className="text-green-500 italic lowercase tracking-wide font-semibold">steps</p>
          <img src="/images/logo1.png" alt="Mango" className="h-6 opacity-40" />
          <img src="/images/logo2.png" alt="Food" className="h-6 opacity-40" />
          <img src="/images/logo3.png" alt="Food" className="h-6 opacity-40" />
          <img src="/images/logo4.png" alt="Book-Off" className="h-6 opacity-40" />
          <img src="/images/logo5.png" alt="G Series" className="h-6 opacity-40" />
        </div>

        {/* Contact and newsletter */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 mt-6 md:mt-0">
          {/* Location */}
          <div className="border border-green-200 rounded p-4 flex items-start gap-4 max-w-xs">
            <FaMapMarkerAlt className="text-green-400 text-xl mt-1" />
            <div>
              <p className="uppercase text-xs font-bold text-gray-700 mb-1">Our Location</p>
              <p className="text-xs text-gray-500 leading-tight">
                1901 Thornridge Cir. Shiloh, Washington DC 20200, United States
              </p>
            </div>
          </div>

          {/* Call us */}
          <div className="border border-green-200 rounded p-4 flex items-center gap-4 max-w-xs">
            <FaPhone className="text-green-400 text-xl" />
            <div>
              <p className="uppercase text-xs font-bold text-gray-700 mb-1">Call us 24/7</p>
              <p className="text-green-600 font-semibold">(303) 555-0105</p>
            </div>
          </div>

          {/* Subscribe newsletter */}
          <div className="border border-green-200 rounded p-4 flex flex-col max-w-xs w-full">
            <div className="flex items-center gap-4 mb-2">
              <FaEnvelope className="text-green-400 text-xl" />
              <p className="uppercase text-xs font-bold text-gray-700 mb-0">Subscribe Newsletter</p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow border border-green-300 rounded px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-600 text-white text-xs px-4 rounded hover:bg-green-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
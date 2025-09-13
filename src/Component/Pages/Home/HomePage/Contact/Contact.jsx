import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import contact from '../../../../../assets/contact/bookoff-corporation-logo.png';
import contact1 from '../../../../../assets/contact/food.png';
import contact2 from '../../../../../assets/contact/Group (1).png';
import contact3 from '../../../../../assets/contact/mango-1.png';
import contact4 from '../../../../../assets/contact/Vector (1).png';

const Contact = () => {
  return (
    <footer className="bg-white py-8 px-4 sm:px-6 lg:px-8 container mx-auto">
      {/* Logos Section */}
      <div className="flex items-center space-x-10 overflow-x-auto scrollbar-hide pb-8">
        <p className="text-green-500 italic lowercase tracking-wide font-semibold whitespace-nowrap">steps</p>
        <img src={contact} alt="Book Off Corporation Logo" className="h-6 opacity-40" />
        <img src={contact1} alt="Food" className="h-6 opacity-40" />
        <img src={contact2} alt="Group" className="h-6 opacity-40" />
        <img src={contact3} alt="Mango" className="h-6 opacity-40" />
        <img src={contact4} alt="Vector" className="h-6 opacity-40" />
      </div>

      {/* Contact & Newsletter Section */}
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        
        {/* Location */}
        <div className="border border-green-200 rounded p-6 flex flex-col items-center text-center max-w-xs mx-auto md:mx-0">
          <FaMapMarkerAlt className="text-green-400 text-3xl mb-3" />
          <p className="uppercase text-xs font-bold text-gray-700 mb-1">Our Location</p>
          <p className="text-xs text-gray-500 leading-tight">
            1901 Thornridge Cir.<br />Shiloh, Washington DC 20200,<br />United States
          </p>
        </div>

        {/* Call Us */}
        <div className="border border-green-200 rounded p-6 flex flex-col items-center text-center max-w-xs mx-auto md:mx-0">
          <FaPhone className="text-green-400 text-3xl mb-3" />
          <p className="uppercase text-xs font-bold text-gray-700 mb-1">Call us 24/7</p>
          <p className="text-green-600 font-semibold">(303) 555-0105</p>
        </div>

        {/* Subscribe Newsletter */}
        <div className="border border-green-200 rounded p-6 max-w-xs mx-auto md:mx-0 w-full md:w-auto">
          <div className="flex flex-col items-center text-center mb-4">
            <FaEnvelope className="text-green-400 text-3xl mb-2" />
            <p className="uppercase text-xs font-bold text-gray-700 mb-0">Subscribe Newsletter</p>
          </div>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow border border-green-300 rounded px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="bg-green-600 text-white text-xs px-4 rounded hover:bg-green-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
};

export default Contact;

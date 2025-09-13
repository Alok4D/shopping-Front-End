import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import contact from '../../../../../assets/contact/bookoff-corporation-logo.png';
import contact1 from '../../../../../assets/contact/food.png';
import contact2 from '../../../../../assets/contact/Group (1).png';
import contact3 from '../../../../../assets/contact/mango-1.png';
import contact4 from '../../../../../assets/contact/Vector (1).png';

const Contact = () => {
  return (
    <footer className="bg-white py-12 px-6 container mx-auto">
      
      {/* Logos Section */}
      <div className="flex items-center space-x-12 overflow-x-auto scrollbar-hide mb-12">
        <p className="text-green-600 italic lowercase tracking-wide font-semibold whitespace-nowrap">steps</p>
        <img src={contact} alt="Book Off Corporation Logo" className="h-8 opacity-40" />
        <img src={contact1} alt="Food" className="h-8 opacity-40" />
        <img src={contact2} alt="Group" className="h-8 opacity-40" />
        <img src={contact3} alt="Mango" className="h-8 opacity-40" />
        <img src={contact4} alt="Vector" className="h-8 opacity-40" />
      </div>

      {/* Contact & Newsletter Section */}
      <div className="flex flex-col md:flex-row md:space-x-10 gap-8">

        {/* Location */}
        <div className="flex items-start gap-5 p-6 border border-green-100 rounded-lg shadow-sm max-w-md mx-auto md:mx-0">
          <FaMapMarkerAlt className="text-green-500 text-4xl mt-1" />
          <div>
            <p className="uppercase text-xs font-bold text-gray-700 mb-2">Our Location</p>
            <address className="not-italic text-sm text-gray-600 leading-relaxed">
              1901 Thornridge Cir.<br />
              Shiloh, Washington DC 20200,<br />
              United States
            </address>
          </div>
        </div>

        {/* Call Us */}
        <div className="flex items-start gap-5 p-6 border border-green-100 rounded-lg shadow-sm max-w-md mx-auto md:mx-0">
          <FaPhone className="text-green-500 text-4xl mt-1" />
          <div>
            <p className="uppercase text-xs font-bold text-gray-700 mb-2">Call us 24/7</p>
            <p className="text-green-600 font-semibold text-lg">(303) 555-0105</p>
          </div>
        </div>

        {/* Subscribe Newsletter */}
        <div className="p-6 border border-green-100 rounded-lg shadow-sm max-w-md mx-auto md:mx-0 w-full">
          <div className="flex items-center gap-4 mb-5">
            <FaEnvelope className="text-green-500 text-4xl" />
            <p className="uppercase text-xs font-bold text-gray-700 mb-0">Subscribe Newsletter</p>
          </div>
          <form className="flex gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow border border-green-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="bg-green-600 text-white text-sm px-6 rounded hover:bg-green-700 transition"
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

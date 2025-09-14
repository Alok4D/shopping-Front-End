import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import contact from '../../../../../assets/contact/bookoff-corporation-logo.png';
import contact1 from '../../../../../assets/contact/food.png';
import contact2 from '../../../../../assets/contact/Group (1).png';
import contact3 from '../../../../../assets/contact/mango-1.png';
import contact4 from '../../../../../assets/contact/Vector (1).png';

const Contact = () => {
  return (
    <footer className="container px-6 py-12 mx-auto text-center bg-white">
      
      {/* Logos Section */}
      <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
        <p className="italic font-semibold tracking-wide text-green-600 lowercase whitespace-nowrap">
          steps
        </p>
        <img src={contact} alt="Book Off Corporation Logo" className="h-8 opacity-40" />
        <img src={contact1} alt="Food" className="h-8 opacity-40" />
        <img src={contact2} alt="Group" className="h-8 opacity-40" />
        <img src={contact3} alt="Mango" className="h-8 opacity-40" />
        <img src={contact4} alt="Vector" className="h-8 opacity-40" />
      </div>

      {/* Contact & Newsletter Section */}
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-10">

        {/* Location */}
        <div className="flex items-center gap-5 p-6 border border-green-100 rounded-lg shadow-sm">
          <FaMapMarkerAlt className="text-4xl text-green-500" />
          <div className="text-left">
            <p className="mb-2 text-xs font-bold text-gray-700 uppercase">Our Location</p>
            <address className="text-sm not-italic leading-relaxed text-gray-600">
              1901 Thornridge Cir.<br />
              Shiloh, Washington DC 20200,<br />
              United States
            </address>
          </div>
        </div>

        {/* Call Us */}
        <div className="flex items-center gap-5 p-6 border border-green-100 rounded-lg shadow-sm">
          <FaPhone className="text-4xl text-green-500" />
          <div className="text-left">
            <p className="mb-2 text-xs font-bold text-gray-700 uppercase">Call us 24/7</p>
            <p className="text-lg font-semibold text-green-600">(303) 555-0105</p>
          </div>
        </div>

        {/* Subscribe Newsletter */}
        <div className="w-full max-w-md p-6 border border-green-100 rounded-lg shadow-sm">
          <div className="flex items-center justify-center gap-4 mb-5">
            <FaEnvelope className="text-4xl text-green-500" />
            <p className="mb-0 text-xs font-bold text-gray-700 uppercase">Subscribe Newsletter</p>
          </div>
          <form className="flex justify-center gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 text-sm border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="px-6 text-sm text-white transition bg-green-600 rounded hover:bg-green-700"
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

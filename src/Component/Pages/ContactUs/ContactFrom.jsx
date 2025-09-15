import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactForm = () => {
  return (
    <section className="bg-gray-50 py-12 px-5 md:px-20">
      <div className="container mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-8">
        
        {/* Left Info as Cards */}
        <div className="w-full md:w-1/3 flex flex-col gap-6 hover:border-green-300">
          {/* Card 1 - Address */}
          <div className="bg-white hover:border-green-300 p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
            <FaMapMarkerAlt className="text-green-600 text-2xl mb-3" />
            <p className="text-gray-700 text-sm">
              2716 Ash Dr. San Jose, South Dakota 83475
            </p>
          </div>

          {/* Card 2 - Email */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
            <FaEnvelope className="text-green-600 text-2xl mb-3" />
            <p className="text-gray-700 text-sm">Proxy@gmail.com</p>
            <p className="text-gray-700 text-sm">help.proxy@gmail.com</p>
          </div>

          {/* Card 3 - Phone */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
            <FaPhoneAlt className="text-green-600 text-2xl mb-3" />
            <p className="text-gray-700 text-sm">(210) 555-0114</p>
            <p className="text-gray-700 text-sm">(414) 333-0487</p>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-2/3 bg-white rounded-xl shadow-md p-6 md:p-10">
          <h3 className="text-2xl font-bold mb-2">Just Say Hello!</h3>
          <p className="text-gray-600 mb-6">
            Do you fancy reaching out to hire or start a project? Feel free to contact me.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition resize-none"
          ></textarea>

          <button className="w-full md:w-auto bg-green-600 text-white px-8 py-3 rounded-full text-sm hover:bg-green-700 transition">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

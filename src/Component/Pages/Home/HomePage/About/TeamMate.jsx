import React from "react";
import { FaChevronLeft, FaChevronRight, FaTwitter, FaFacebookF, FaGithub } from "react-icons/fa";
import JennyWilson from '../../assets/about/Jenny Wilson.png' 
import JaneCooper from '../../assets/about/Jane Cooper.png' 
import CodyFisher from '../../assets/about/Cody Fisher.png' 
import RobertFox from '../../assets/about/Robert Fox.png' 

const TeamMate = () => {
  return (
    <section className="bg-gray-50 py-14 px-5 md:px-20 text-center relative">
      <h2 className="text-3xl font-bold mb-2">Our Awesome Team</h2>
      <p className="text-gray-600 mb-12 max-w-xl mx-auto text-sm">
        Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla
        et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi.
      </p>

      <div className="relative max-w-7xl mx-auto flex items-center justify-center">
        {/* Left Arrow */}
        <button className="custom-prev absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-green-500 p-3 rounded-full text-green-600 hover:bg-green-100 shadow">
          <FaChevronLeft />
        </button>

        {/* Static Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
            <div className="relative group">
              <img
                src={JennyWilson}
                alt="Jenny Wilson"
                className="w-full h-64 object-cover"
              />
              {/* Overlay icons only on image hover */}
              <div className="absolute inset-0  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center space-x-4 text-white text-lg pointer-events-none">
                <FaTwitter className="hover:text-green-400 pointer-events-auto cursor-pointer" />
                <FaFacebookF className="hover:text-green-400 pointer-events-auto cursor-pointer" />
                <FaGithub className="hover:text-green-400 pointer-events-auto cursor-pointer" />
              </div>
            </div>
            {/* Text always visible below image */}
            <div className="p-4 text-left">
              <h3 className="font-semibold text-sm">Jenny Wilson</h3>
              <p className="text-gray-500 text-xs mt-1">Cook & Founder</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
            <div className="relative group">
              <img
                src={JaneCooper}
                alt="Jane Cooper"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center space-x-4 text-white text-lg pointer-events-none">
                <FaTwitter className="hover:text-green-400 pointer-events-auto cursor-pointer" />
                <FaFacebookF className="hover:text-green-400 pointer-events-auto cursor-pointer" />
                <FaGithub className="hover:text-green-400 pointer-events-auto cursor-pointer" />
              </div>
            </div>
            <div className="p-4 text-left">
              <h3 className="font-semibold text-sm">Jane Cooper</h3>
              <p className="text-gray-500 text-xs mt-1">Worker</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
            <div className="relative group">
              <img
                src={CodyFisher}
                alt="Cody Fisher"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center space-x-4 text-white text-lg pointer-events-none">
                <FaTwitter className="hover:text-green-400 pointer-events-auto cursor-pointer" />
                <FaFacebookF className="hover:text-green-400 pointer-events-auto cursor-pointer" />
                <FaGithub className="hover:text-green-400 pointer-events-auto cursor-pointer" />
              </div>
            </div>
            <div className="p-4 text-left">
              <h3 className="font-semibold text-sm">Cody Fisher</h3>
              <p className="text-gray-500 text-xs mt-1">Security Guard</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
            <div className="relative group">
              <img
                src={RobertFox}
                alt="Robert Fox"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center space-x-4 text-white text-lg pointer-events-none">
                <FaTwitter className="hover:text-green-400 pointer-events-auto cursor-pointer" />
                <FaFacebookF className="hover:text-green-400 pointer-events-auto cursor-pointer" />
                <FaGithub className="hover:text-green-400 pointer-events-auto cursor-pointer" />
              </div>
            </div>
            <div className="p-4 text-left">
              <h3 className="font-semibold text-sm">Robert Fox</h3>
              <p className="text-gray-500 text-xs mt-1">Senior Farmer Manager</p>
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button className="custom-next absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-green-500 p-3 rounded-full text-green-600 hover:bg-green-100 shadow">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default TeamMate;

import {
  FaRegCommentDots,
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaUserAlt,
  FaRegCalendarAlt,
} from "react-icons/fa";

import singleBlogImage from "../../../../assets/blogsImage/singleBlog/Image 0.png";
import singleBlogImage1 from "../../../../assets/blogsImage/singleBlog/image11.png";
import singleBlogImage2 from "../../../../assets/blogsImage/singleBlog/image12.png";
import singleBlogImage3 from "../../../../assets/blogsImage/singleBlog/rectangle51.png";
import FilterSidebar from "../FilterSidebar/FilterSidebar";
import { SlCalender } from "react-icons/sl";

const SingleBlog = () => {
  return (
    <div className="container mx-auto mt-4 pb-6 px-4 gap-4 flex">
      {/* Main Blog Content */}
      <div className="container mx-auto py-6 px-4">
        {/* Blog Post Header */}
        <div className="mb-6">
          <img
            src={singleBlogImage}
            alt="Blog Image"
            className="w-full h-[500px] object-cover rounded-lg shadow-md"
          />
          <div className="flex items-center mt-3 text-sm text-gray-600 gap-6">
            {/* Author */}
            <div className="flex items-center gap-2">
              <FaUserAlt className="text-green-600" />
              <span>By Admin</span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2">
              <FaRegCalendarAlt className="text-green-600" />
              <span>18 Nov</span>
            </div>

            {/* Comments */}
            <div className="flex items-center gap-2">
              <FaRegCommentDots className="text-green-600" />
              <span>65 Comments</span>
            </div>
          </div>
          <h1 className="text-3xl font-semibold mt-4">
            Maecenas tempor urna sed quam mollis, a placerat dui fringilla
            Suspendisse
          </h1>
        </div>

        {/* User Profile and Social Media */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 p-6 bg-gray-50 rounded-xl shadow-sm">
          {/* Left Side: User Profile */}
          <div className="flex items-center gap-4">
            <img
              src="https://img.freepik.com/free-photo/student-girl-holding-american-flag-isolated_231208-5435.jpg?semt=ais_hybrid&w=740&q=80"
              alt="User Profile"
              className="w-16 h-16 rounded-full object-cover ring-2 ring-green-500"
            />
            <div>
              <h2 className="font-semibold text-lg text-gray-900">
                Cameron Williamson
              </h2>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <span>April 4, 2021</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span>6 min read</span>
              </p>
            </div>
          </div>

          {/* Right Side: Social Icons */}
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <h3 className="font-medium text-gray-700">Share This Post:</h3>
            <div className="flex gap-3">
              <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition shadow-md">
                <FaFacebookF />
              </button>
              <button className="bg-sky-400 text-white p-3 rounded-full hover:bg-sky-500 transition shadow-md">
                <FaTwitter />
              </button>
              <button className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition shadow-md">
                <FaPinterest />
              </button>
            </div>
          </div>
        </div>

        {/* Blog Post Content */}
        <div className="mb-8">
          <p className="text-lg text-gray-700 font-bold">
            Maecenas lacinia felis nec placerat sollicitudin. Quisque placerat
            dolor at scelerisque imperdiet. Phasellus tristique felis dolor.
          </p>{" "}
          <br />
          <p className="text-lg text-gray-700">
            Maecenas elementum in risus sed condimentum. Duis convallis ante ac
            tempus maximus. Fusce malesuada sed velit ut dictum. Morbi faucibus
            vitae orci at euismod. Integer auctor augue in erat vehicula, quis
            fermentum ex finibus.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Mauris pretium elit a dui pulvinar, in ornare sapien euismod. Nullam
            interdum nisl ante, id feugiat quam euismod commodo. Sed ultrices
            lectus ut iaculis rhoncus. Aenean non dignissim justo, at fermentum
            turpis. Sed molestie, ligula ut molestie ultrices, tellus ligula
            viverra neque, malesuada consectetur diam sapien volutpat
            risus.Quisque eget tortor lobortis, facilisis metus eu, elementum
            est. Nunc sit amet erat quis ex convallis suscipit. ur ridiculus
            mus.
          </p>
          {/* Left and Right Images with Text */}
          <div className="flex justify-between gap-4">
            <div className="w-full lg:w-1/2">
              <img
                src={singleBlogImage1}
                alt="Related Image 1"
                className="w-full h-auto object-cover rounded-lg shadow-md mb-4"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src={singleBlogImage2}
                alt="Related Image 2"
                className="w-full h-auto object-cover rounded-lg shadow-md mb-4"
              />
            </div>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate quis
            vehicula ut, vestibulum ut mauris. Nullam non felis varius dui
            rutrum rutrum in a nisi. Suspendisse elementum rutrum lorem sed
            luctus. Proin iaculis euismod metus non sollicitudin. Duis vel
            luctus lacus. Nullam faucibus iaculis convallis. In ullamcorper nibh
            ipsum, eget lacinia eros pulvinar a. Integer accumsan arcu nec
            faucibus ultricies.
          </p>
        </div>

        {/* Gallery Section */}
        <div
          className="relative w-full bg-cover bg-center h-[250px] rounded-xl overflow-hidden"
          style={{ backgroundImage: `url(${singleBlogImage3})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content wrapper */}
          <div className="relative z-10 container mx-auto h-full flex items-center gap-44 px-10">
            {/* Left Side Text */}
            <div className="text-white max-w-lg">
              <h3 className="text-2xl font-semibold tracking-wide text-green-400 uppercase">
                Summer Sales
              </h3>
              <h2 className="text-5xl font-extrabold leading-tight">
                Fresh <span className="text-orange-400">Fruit</span>
              </h2>
              <p className="text-xl">
                Up to{" "}
                <span className="font-bold text-orange-400 drop-shadow-lg">
                  56% Off
                </span>
              </p>

              {/* Shop Now Button */}
              <button className="bg-green-500 text-white mt-4 py-3 px-8 rounded-lg text-lg font-medium hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-xl">
                Shop Now →
              </button>
            </div>

            {/* Circular Percentage Badge */}
            <div className="flex items-center justify-center w-32 h-32 bg-white/90 text-black rounded-full shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <span className="text-sm block">Up to</span>
                <span className="text-3xl font-extrabold text-orange-500">
                  56%
                </span>
                <span className="text-sm block">Off</span>
              </div>
            </div>
          </div>
        </div>

        {/* Comment Section */}
        <div className="container mx-auto py-10">
          {/* Leave a Comment */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Leave a Comment</h2>

            {/* Form */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value="Zakir Hossen"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value="zakirsoft.20@gl"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your comment here..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
              ></textarea>
            </div>

            {/* Save Info Checkbox */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="saveInfo" className="w-4 h-4" />
              <label htmlFor="saveInfo" className="text-gray-700 text-sm">
                Save my name and email in this browser for the next time I
                comment.
              </label>
            </div>

            {/* Submit Button */}
            <button className="bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 transition duration-300">
              Post Comments
            </button>
          </div>

          <div className="mt-5">
            <h3 className="text-2xl font-bold mb-8">Comments</h3>

            {/* Single Comment */}
            <div className="flex items-start gap-4 border-b border-gray-200 pb-6 mb-6">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <img
                  src="https://newsukraine.rbc.ua/static/img/_/t/_tramp_gettyimages_2201631004_7c4cc22887cdf9d5b1451326c2a5bca0_1300x820_3024cd369e9989ebd009e5cf0f2b1735_1200x675.jpg"
                  alt="Annette Black"
                  className="w-12 h-12 rounded-full object-cover border border-gray-300 shadow-sm"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="font-semibold text-gray-900">
                    Annette Black
                  </span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <SlCalender className="w-4 h-4" />
                    <span>26 Apr, 2021</span>
                  </span>
                </div>
                <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                  In a nisi commodo, porttitor ligula consequat, tincidunt dui.
                  Nulla volutpat, metus eu aliquam malesuada, elit libero
                  venenatis urna, consequat maximus arcu diam non diam.
                </p>
              </div>
            </div>

            {/* Repeatable Comment */}
            <div className="flex items-start gap-4 border-b border-gray-200 pb-6 mb-6">
              <div className="flex-shrink-0">
                <img
                  src="https://img.freepik.com/free-photo/student-girl-holding-american-flag-isolated_231208-5435.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="Devon Lane"
                  className="w-12 h-12 rounded-full object-cover border border-gray-300 shadow-sm"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="font-semibold text-gray-900">
                    Devon Lane
                  </span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <SlCalender className="w-4 h-4" />
                    <span>24 Apr, 2021</span>
                  </span>
                </div>
                <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                  Quisque eget tortor lobortis, facilisis metus eu, elementum
                  est. Nunc sit amet erat quis ex convallis suscipit. Nam
                  hendrerit, velit ut aliquam euismod, nibh tortor rutrum nisi,
                  ac sodales nunc eros porta nisi. Sed scelerisque, est eget
                  aliquam venenatis, est sem tempor eros.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 border-b border-gray-200 pb-6 mb-6">
              <div className="flex-shrink-0">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDWxD5zzy2xjj89Xa0ME-eXIUCLVzFozRBVg&s"
                  alt="Devon Lane"
                  className="w-12 h-12 rounded-full object-cover border border-gray-300 shadow-sm"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="font-semibold text-gray-900">Alok</span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <SlCalender className="w-4 h-4" />
                    <span>24 Apr, 2021</span>
                  </span>
                </div>
                <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                  Quisque eget tortor lobortis, facilisis metus eu, elementum
                  est. Nunc sit amet erat quis ex convallis suscipit. Nam
                  hendrerit, velit ut aliquam euismod, nibh tortor rutrum nisi,
                  ac sodales nunc eros porta nisi. Sed scelerisque, est eget
                  aliquam venenatis, est sem tempor eros.
                </p>
              </div>
            </div>

            {/* Load More Button */}
            <div className="text-center mt-8">
              <button className="bg-green-100 text-green-600 px-6 py-2 rounded-full font-medium hover:bg-green-200 transition">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
    
          <FilterSidebar  />
     
     
    </div>
  );
};

export default SingleBlog;

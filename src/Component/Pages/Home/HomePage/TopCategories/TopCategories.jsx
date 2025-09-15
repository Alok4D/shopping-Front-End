import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";


// Import images
import vegIcon from "../../../../../assets/sabbirassets/TopCategories/Vegetables.png";
import fruitIcon from "../../../../../assets/sabbirassets/TopCategories/Fresh Fruit.png";
import fishIcon from "../../../../../assets/sabbirassets/TopCategories/Fish.png";
import meatIcon from "../../../../../assets/sabbirassets/TopCategories/meat.png";
import drinksIcon from "../../../../../assets/sabbirassets/TopCategories/soft-drink 1.png";
import snacksIcon from "../../../../../assets/sabbirassets/TopCategories/snacks.png";
import dairyIcon from "../../../../../assets/sabbirassets/TopCategories/snacks.png";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
// import dairyIcon from "../../../../../assets/sabbirassets/TopCategories/dairy.png"; // add dairy image

// Category data
const categories = [
  { id: 1, name: "Vegetables", count: 165, icon: vegIcon, isActive: true },
  { id: 2, name: "Fresh Fruit", count: 137, icon: fruitIcon },
  { id: 3, name: "Fish", count: 34, icon: fishIcon },
  { id: 4, name: "Meat", count: 165, icon: meatIcon },
  { id: 5, name: "Water and Drinks", count: 48, icon: drinksIcon },
  { id: 6, name: "Snacks", count: 165, icon: snacksIcon },
  { id: 7, name: "Dairy", count: 80, icon: dairyIcon },
];

const TopCategories = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#6de4711a] to-white">
       <div className="py-12 px-4 lg:px-0 md:px-16 container mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center my-10">
        <h2 className="text-2xl font-semibold">Shop by Top Categories</h2>
        <Link
          to="/#"
          className="text-green-600 font-medium hover:underline flex items-center gap-1"
        >
          View All →
        </Link>
      </div>

      {/* Swiper Carousel */}
      <div className="relative">
        {/* Custom Prev Button */}
        <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-white border border-green-500 p-2 rounded-full text-green-600 hover:bg-green-100 shadow">
       <FaArrowLeftLong />
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 6 },
          }}
          className="pb-4"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div
                className={`p-4 border rounded-lg text-center transition 
                  ${category.isActive
                    ? "border-green-500 bg-green-50" 
                    : "border-gray-200 bg-white hover:border-green-500 hover:bg-green-50"
                  }`}
              >
                <div className="flex justify-center mb-2">
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h4 className="text-sm font-semibold text-gray-800">
                  {category.name}
                </h4>
                <p className="text-xs text-gray-500">{category.count} Products</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Next Button */}
        <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-white border border-green-500 p-2 rounded-full text-green-600 hover:bg-green-100 shadow">
         <FaArrowRightLong />
        </button>
      </div>
    </div>
    </section>
   
  );
};

export default TopCategories;

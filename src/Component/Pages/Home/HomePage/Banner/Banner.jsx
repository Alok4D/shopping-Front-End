
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import banner1 from "../../../../../assets/banner-logo/best-vegetable-grow-in-greenhouse-scaled.jpeg.webp"; // Your image
import banner2 from "../../../../../assets/banner-logo/blog-large-2020veg.jpg"; // Your image
import banner3 from "../../../../../assets/banner-logo/fresh-organic-vegetable_114106-1589.jpg"; // Your image

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image: banner1, // Use your banner image
    title: "Fresh & Healthy",
    subtitle: "Organic Food",
    discount: "30% OFF",
    description: "Free shipping on all your order, we deliver, you enjoy",
    buttonText: "Shop now",
  },
  {
    id: 2,
    image: banner2,
    title: "Fresh & Healthy",
    subtitle: "Organic Food",
    discount: "30% OFF",
    description: "Free shipping on all your order, we deliver, you enjoy",
    buttonText: "Shop now",
  },
  {
    id: 3,
    image: banner3,
    title: "Fresh & Healthy",
    subtitle: "Organic Food",
    discount: "30% OFF",
    description: "Free shipping on all your order, we deliver, you enjoy",
    buttonText: "Shop now",
  },
];

const Banner = () => {
  return (
    <div className="w-full bg-[#f1fdf7]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20">
              {/* Image Section */}
              <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  className="w-full max-w-md object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                <h4 className="text-green-600 font-semibold uppercase">
                  WELCOME TO SHOPERY
                </h4>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                  {slide.title} <br />{" "}
                  <span className="text-black">{slide.subtitle}</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600">
                  Sale up to{" "}
                  <span className="text-orange-500 font-semibold">
                    {slide.discount}
                  </span>
                </p>
                <p className="text-sm text-gray-500">{slide.description}</p>
                <Link to={"#"} className="pointer-coarse">
                  <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300">
                    Shop Now →
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};



export default Banner;


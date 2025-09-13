import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import banner1 from "../../../../../assets/banner-logo/best-vegetable-grow-in-greenhouse-scaled.jpeg.webp";
import banner2 from "../../../../../assets/banner-logo/blog-large-2020veg.jpg";
import banner3 from "../../../../../assets/banner-logo/fresh-organic-vegetable_114106-1589.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: banner1,
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
    <div className="w-full bg-[#f8fff9]">
      <div className="container mx-auto">
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
              <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-14 md:py-20">
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    className="w-full max-w-lg object-contain drop-shadow-md"
                  />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
                  <h4 className="text-green-600 font-semibold uppercase tracking-wide">
                    Welcome to Shopery
                  </h4>
                  <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-snug">
                    {slide.title} <br />{" "}
                    <span className="text-black">{slide.subtitle}</span>
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600">
                    Sale up to{" "}
                    <span className="text-orange-500 font-bold">
                      {slide.discount}
                    </span>
                  </p>
                  <p className="text-sm md:text-base text-gray-500">
                    {slide.description}
                  </p>
                  <Link to={"#"}>
                    <button className="bg-green-500 text-white px-7 py-3 rounded-full hover:bg-green-600 transition duration-300 flex items-center gap-2 mx-auto md:mx-0">
                      Shop Now <span className="text-lg">→</span>
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;

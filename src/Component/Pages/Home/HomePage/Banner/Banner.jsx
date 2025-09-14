import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import banner1 from "../../../../../assets/banner-logo/Image.png";
import banner2 from "../../../../../assets/banner-logo/Image.png";
import banner3 from "../../../../../assets/banner-logo/Image.png";

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
              <div className="flex flex-col items-center justify-between px-6 md:flex-row md:px-20 py-14 md:py-20">
                {/* Image Section */}
                <div className="flex justify-center w-full md:w-1/2">
                  <img
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    className="object-contain w-full max-w-lg drop-shadow-md"
                  />
                </div>

                {/* Text Content */}
                <div className="w-full space-y-5 text-center md:w-1/2 md:text-left">
                  <h4 className="font-semibold tracking-wide text-green-600 uppercase">
                    Welcome to Shopery
                  </h4>
                  <h1 className="text-4xl font-extrabold leading-snug text-gray-900 md:text-6xl">
                    {slide.title} <br />{" "}
                    <span className="text-black">{slide.subtitle}</span>
                  </h1>
                  <p className="text-lg text-gray-600 md:text-xl">
                    Sale up to{" "}
                    <span className="font-bold text-orange-500">
                      {slide.discount}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500 md:text-base">
                    {slide.description}
                  </p>
                  <Link to={"#"}>
                    <button className="flex items-center gap-2 py-3 mx-auto text-white transition duration-300 bg-green-500 rounded-full px-7 hover:bg-green-600 md:mx-0">
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

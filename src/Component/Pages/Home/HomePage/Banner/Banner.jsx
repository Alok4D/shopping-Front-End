// import { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { Link } from "react-router-dom";
// import banner1 from "../../../../../assets/banner-logo/Image.png";
// import banner2 from "../../../../../assets/banner-logo/Image.png";
// import banner3 from "../../../../../assets/banner-logo/Image.png";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const slides = [
//   {
//     id: 1,
//     image: banner1,
//     title: "Fresh & Healthy",
//     subtitle: "Organic Food",
//     discount: "30% OFF",
//     description: "Free shipping on all your order, we deliver, you enjoy",
//     buttons: [
//       {
//         text: "Shop Now",
//         link: "/shop",
//         style: "primary",
//       },
//       {
//         text: "Learn More",
//         link: "/about",
//         style: "secondary",
//       },
//     ],
//   },
//   {
//     id: 2,
//     image: banner2,
//     title: "Fresh & Healthy",
//     subtitle: "Organic Food",
//     discount: "30% OFF",
//     description: "Free shipping on all your order, we deliver, you enjoy",
//     buttons: [
//       {
//         text: "Order Now",
//         link: "/order",
//         style: "primary",
//       },
//     ],
//   },
//   {
//     id: 3,
//     image: banner3,
//     title: "Fresh & Healthy",
//     subtitle: "Organic Food",
//     discount: "30% OFF",
//     description: "Free shipping on all your order, we deliver, you enjoy",
//     buttons: [
//       {
//         text: "Explore",
//         link: "/explore",
//         style: "primary",
//       },
//       {
//         text: "Contact",
//         link: "/contact",
//         style: "secondary",
//       },
//     ],
//   },
// ];

// const Banner = () => {
//   // Refs for custom navigation buttons
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   return (
//     <div className="w-full bg-[#f1fdf7] lg:h-[624px]">
//       <div className="relative h-full container mx-auto">
//         <Swiper
//           modules={[Autoplay, Navigation, Pagination]}
//           spaceBetween={30}
//           slidesPerView={1}
//           loop={true}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           pagination={{
//             clickable: true,
//             bulletClass: "swiper-pagination-bullet",
//             bulletActiveClass: "swiper-pagination-bullet-active",
//           }}
//           // Fix navigation issue using onInit
//           onInit={(swiper) => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//             swiper.navigation.init();
//             swiper.navigation.update();
//           }}
//           className="w-full h-full"
//         >
//           {slides.map((slide) => (
//             <SwiperSlide key={slide.id}>
//               <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 md:py-20 h-full">
//                 {/* Image Section */}
//                 <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
//                   <img
//                     src={slide.image}
//                     alt={`Slide ${slide.id}`}
//                     className="w-full max-w-md object-contain"
//                   />
//                 </div>

//                 {/* Text Content */}
//                 <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
//                   <h4 className="text-green-600 font-semibold uppercase">
//                     WELCOME TO SHOPERY
//                   </h4>
//                   <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
//                     {slide.title} <br />
//                     <span className="text-black">{slide.subtitle}</span>
//                   </h1>
//                   <p className="text-lg md:text-xl text-gray-600">
//                     Sale up to{" "}
//                     <span className="text-orange-500 font-semibold">
//                       {slide.discount}
//                     </span>
//                   </p>
//                   <p className="text-sm text-gray-500">{slide.description}</p>

//                   {/* Dynamic Buttons */}
//                   <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-4">
//                     {slide.buttons?.map((btn, index) => (
//                       <Link key={index} to={btn.link}>
//                         <button
//                           className={`px-6 py-2 rounded-full transition duration-300 ${
//                             btn.style === "primary"
//                               ? "bg-green-500 text-white hover:bg-green-600"
//                               : "bg-white text-green-600 border border-green-500 hover:bg-green-100"
//                           }`}
//                         >
//                           {btn.text}
//                         </button>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Custom Navigation Buttons (with refs) */}
//         <button
//           ref={prevRef}
//           className="custom-prev absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white border border-green-500 p-2 rounded-full text-green-600 hover:bg-green-100 shadow-md"
//         >
//           <FaChevronLeft />
//         </button>
//         <button
//           ref={nextRef}
//           className="custom-next absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white border border-green-500 p-2 rounded-full text-green-600 hover:bg-green-100 shadow-md"
//         >
//           <FaChevronRight />
//         </button>
//       </div>

//       {/* Swiper custom bullet styling */}
//       <style jsx>{`
//         .swiper-pagination-bullet {
//           background-color: #86efac;
//           opacity: 1;
//         }

//         .swiper-pagination-bullet-active {
//           background-color: #22c55e;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Banner;


// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { Link } from "react-router-dom";

// import banner1 from "../../../../../assets/banner-logo/Image.png";
// import banner2 from "../../../../../assets/banner-logo/Image.png";
// import banner3 from "../../../../../assets/banner-logo/Image.png";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const slides = [
//   {
//     id: 1,
//     image: banner1,
//     title: "Fresh & Healthy",
//     subtitle: "Organic Food",
//     discount: "30% OFF",
//     description: "Free shipping on all your order, we deliver, you enjoy",
//     buttonText: "Shop now",
//   },
//   {
//     id: 2,
//     image: banner2,
//     title: "Fresh & Healthy",
//     subtitle: "Organic Food",
//     discount: "30% OFF",
//     description: "Free shipping on all your order, we deliver, you enjoy",
//     buttonText: "Shop now",
//   },
//   {
//     id: 3,
//     image: banner3,
//     title: "Fresh & Healthy",
//     subtitle: "Organic Food",
//     discount: "30% OFF",
//     description: "Free shipping on all your order, we deliver, you enjoy",
//     buttonText: "Shop now",
//   },
// ];

// const Banner = () => {
//   return (
//     <div className="w-full  bg-[#f8fff9]">
//       <div className="container lg:h-[624px] mx-auto">
//         <Swiper
//           modules={[Autoplay, Navigation, Pagination]}
//           spaceBetween={30}
//           slidesPerView={1}
//           loop={true}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           className="text-red-300 border-2 h-full"
//         >
//           {slides.map((slide) => (
//             <SwiperSlide key={slide.id}>
//               <div className="flex flex-col items-center justify-between px-6 md:flex-row md:px-20 py-14 md:py-20">
//                 {/* Image Section */}
//                 <div className="flex justify-center w-full md:w-1/2">
//                   <img
//                     src={slide.image}
//                     alt={`Slide ${slide.id}`}
//                     className="object-contain w-full max-w-lg drop-shadow-md"
//                   />
//                 </div>

//                 {/* Text Content */}
//                 <div className="w-full space-y-5 text-center md:w-1/2 md:text-left">
//                   <h4 className="font-semibold tracking-wide text-green-600 uppercase">
//                     Welcome to Shopery
//                   </h4>
//                   <h1 className="text-4xl font-extrabold leading-snug text-gray-900 md:text-6xl">
//                     {slide.title} <br />{" "}
//                     <span className="text-black">{slide.subtitle}</span>
//                   </h1>
//                   <p className="text-lg text-gray-600 md:text-xl">
//                     Sale up to{" "}
//                     <span className="font-bold text-orange-500">
//                       {slide.discount}
//                     </span>
//                   </p>
//                   <p className="text-sm text-gray-500 md:text-base">
//                     {slide.description}
//                   </p>
//                   <Link to={"#"}>
//                     <button className="flex items-center gap-2 py-3 mx-auto text-white transition duration-300 bg-green-500 rounded-full px-7 hover:bg-green-600 md:mx-0">
//                       Shop Now <span className="text-lg">→</span>
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      prevRef.current &&
      nextRef.current &&
      swiperRef.current.params &&
      swiperRef.current.navigation
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="w-full relative  bg-[#f8fff9]">
      <div className="container mx-auto lg:h-[600px] relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="relative h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col items-center justify-between gap-10 px-6 md:flex-row md:px-20 py-14 md:py-20">
                <div className="flex justify-center w-full md:w-1/2">
                  <img
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    className="object-contain w-full  drop-shadow-md"
                  />
                </div>
                <div className="w-full space-y-5  text-center md:w-1/2 md:text-left">
                  <h4 className="font-semibold tracking-wide text-green-600 uppercase ">
                    Welcome to Shopery
                  </h4>
                  <h1 className="text-4xl font-extrabold leading-snug text-gray-900 md:text-6xl  ">
                    {slide.title} <br />
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
                    <button className="flex mt-3 items-center gap-2 py-3 mx-auto text-white transition duration-300 bg-green-500 rounded-full px-7 hover:bg-green-600 md:mx-0">
                      Shop Now <span className="text-lg">→</span>
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-white text-gray-700 p-3 rounded-full shadow-md hover:bg-green-100 transition"
          aria-label="Previous Slide"
        >
          <FaChevronLeft />
        </button>

        <button
          ref={nextRef}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-white text-gray-700 p-3 rounded-full shadow-md hover:bg-green-100 transition"
          aria-label="Next Slide"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Banner;


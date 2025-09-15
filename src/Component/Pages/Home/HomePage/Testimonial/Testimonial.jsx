import { useRef, useEffect, useState } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import JennyWilson from "../../../../../assets/sabbirassets/about/Jenny Wilson.png";
import JaneCooper from "../../../../../assets/sabbirassets/about/Jane Cooper.png";
import CodyFisher from "../../../../../assets/sabbirassets/about/Cody Fisher.png";

const testimonials = [
  {
    img: JennyWilson,
    name: "Jenny Wilson",
    role: "Marketing Manager",
    text: "This platform has transformed the way we handle customer feedback. The UI is intuitive, and our response time has improved significantly.",
  },
  {
    img: JaneCooper,
    name: "Jane Cooper",
    role: "E-commerce Seller",
    text: "Using this service has been a game-changer for my online store. Sales are up, and customer trust is higher than ever.",
  },
  {
    img: CodyFisher,
    name: "Cody Fisher",
    role: "Product Designer",
    text: "I love how seamless everything feels. From navigation to user experience, this platform does it all with elegance.",
  },
  {
    img: JennyWilson,
    name: "Amelia Hart",
    role: "Freelance Developer",
    text: "I’ve been using it for months now — the performance is consistent and support is super responsive. Highly recommended!",
  },
  {
    img: JaneCooper,
    name: "Liam Johnson",
    role: "Startup Founder",
    text: "This is one of those tools you didn’t know you needed until you used it. Our team is more efficient and focused.",
  },
  {
    img: CodyFisher,
    name: "Sophia Lee",
    role: "UI/UX Expert",
    text: "A clean interface and smooth interactions make this platform stand out from the rest. Loved it from day one!",
  },
  {
    img: JennyWilson,
    name: "Noah Martinez",
    role: "Content Creator",
    text: "I’m amazed at how this helped me engage better with my audience. Their feedback module is top-notch.",
  },
];


const Testimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isReady, setIsReady] = useState(false); // Ensure refs are set

  useEffect(() => {
    setIsReady(true); // When refs are set, re-render to apply Swiper navigation
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-[#20B5261A] py-12 lg:px-0 px-2">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="text-left">
            <p className="text-green-500 text-xs uppercase italic tracking-widest mb-1">Testimonial</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Our Customer Says</h2>
          </div>
          <div className="flex gap-3">
            <button
              ref={prevRef}
              className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-green-500 hover:text-white transition"
            >
              ←
            </button>
            <button
              ref={nextRef}
             className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-green-500 hover:text-white transition"
            >
              →
            </button>
          </div>
        </div>

        {/* Swiper Section */}
        {isReady && (
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between h-full">
                  <FaQuoteLeft className="text-green-400 text-3xl mb-4" />
                  <p className="text-gray-600 mb-10 leading-relaxed text-sm">{item.text}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-gray-500 text-xs">{item.role}</p>
                      </div>
                    </div>
                    <div className="flex space-x-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Testimonial;


import React from "react";
import { useLocation, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

// Capitalize helper
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const BreadcrumbHeader = () => {
  const location = useLocation();
  const path = location.pathname;

  if (path === "/") return null;

  const pathSegments = path.split("/").filter(Boolean);

  return (
    <div className="relative w-full h-[120px] overflow-hidden z-30">
      {/* Background Image */}
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/022/452/980/small_2x/panoramic-collection-fresh-fruits-and-vegetables-background-side-view-generative-ai-photo.jpg"
        alt="Vegetables Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Breadcrumb Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center">
        <div className="flex items-center justify-center text-white text-base gap-2">
          {/* Home Icon + First Chevron */}
          <Link to="/" className="flex items-center gap-1 hover:text-green-400 transition">
            <FaHome className="text-md leading-none" />
            <FiChevronRight className="text-xl pt-[0.5px] leading-none" />
          </Link>

          {/* Dynamic Path Segments */}
          {pathSegments.map((segment, index) => {
            const isLast = index === pathSegments.length - 1;
            return (
              <React.Fragment key={index}>
                {/* Middle Chevrons */}
                {index !== 0 && (
                  <FiChevronRight className="text-lg text-gray-400 leading-none" />
                )}
                <span
                  className={`capitalize ${
                    isLast
                      ? "text-green-400 font-semibold animate-pulse-slow"
                      : "text-gray-300"
                  }`}
                >
                  {capitalize(segment)}
                </span>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbHeader;

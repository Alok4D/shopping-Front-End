// src/components/HeroSection.jsx
import React from "react";
import farmer1 from "../../assets/about/Image (6).png"; // Use your images accordingly

const HeroSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center px-5 md:px-20 py-10">
      <div className="px-10 ">
        <h1 className="text-4xl font-bold mb-8">
          100% Trusted
          <br /> <span className="text-green-600">Organic Food Store</span>
        </h1>
        <p className="text-gray-600">
          Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
          laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
          Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a
          eros non massa vulputate ornare. Vivamus ornare commodo ante, at
          commodo felis congue vitae.
        </p>
      </div>
      <div className=" max-w-md  mt-6 md:mt-0 shadow-md">
        <img
          src={farmer1}
          alt="Farmer with vegetables"
          className="w-full rounded-lg  "
        />
      </div>
    </div>
  );
};

export default HeroSection;

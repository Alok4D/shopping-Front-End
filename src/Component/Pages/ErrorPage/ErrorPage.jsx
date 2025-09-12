import React from "react";
import errPageImg from '../../../assets/errPageImg/Illustration.png'
export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="text-center">
        {/* 404 Text */}
        <div className="relative flex justify-center items-center">
          <h1 className="text-[100px] sm:text-[150px] md:text-[200px] font-extrabold text-green-600 tracking-widest">
            404
          </h1>

          {/* Illustration Image */}
          <div className="absolute top-1/2 -translate-y-1/2">
            <img
              src={errPageImg}
              alt="Confused Person"
              className="w-full mx-auto"
            />
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-2xl md:text-3xl font-bold text-gray-800">
          Oops! page not found
        </h2>

        {/* Description */}
        <p className="mt-2 text-gray-500 max-w-md mx-auto">
          Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.
          Maecenas sagittis tortor at metus mollis.
        </p>

        {/* Button */}
        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

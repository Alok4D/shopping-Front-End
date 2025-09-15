import farmer1 from "../../../../../assets/sabbirassets/about/Image (6).png"; // Adjust path as needed

const HeroSection = () => {
  return (
    <div className="container mx-auto sm:px-4 lg:px-0  py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Text Section */}
        <div>
          <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            100% Trusted
            <br />
            <span className="text-green-600">Organic Food Store</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-md leading-relaxed">
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec
            a eros non massa vulputate ornare. Vivamus ornare commodo ante, at
            commodo felis congue vitae.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src={farmer1}
            alt="Farmer with vegetables"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

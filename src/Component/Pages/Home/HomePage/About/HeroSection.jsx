

import farmer1 from "../../../../../assets/sabbirassets/about/Image (6).png"; // Use your images accordingly

const HeroSection = () => {
  return (
    <div className="container grid items-center gap-10 px-5 py-10 mx-auto md:grid-cols-2 md:px-20">
      <div className="px-10 ">
        <h1 className="mb-8 text-4xl font-bold">
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
      <div className="max-w-md mt-6 shadow-md md:mt-0">
        <img
          src={farmer1}
          alt="Farmer with vegetables"
          className="w-full rounded-lg "
        />
      </div>
    </div>
  );
};

export default HeroSection;

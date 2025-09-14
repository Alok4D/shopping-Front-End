// import { Link } from "react-router-dom";
// import Image1 from "../../../../../assets/sabbirassets/TopCategories/Image.png";
// import Image2 from "../../../../../assets/sabbirassets/TopCategories/Image1.png";

// const CardSection = () => {
//   return (
//     <section className="py-10 bg-white">
//       <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">

//         {/* --- Card 1 --- */}
//         <div
//           className="relative rounded-xl overflow-hidden h-72 md:h-80 lg:h-96 shadow-lg"
//           style={{
//             backgroundImage: `url(${Image1})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-6 text-white">
//             <p className="text-sm text-green-200 mb-2 font-medium tracking-wider">
//               100% ORGANIC
//             </p>
//             <h2 className="text-2xl md:text-3xl font-bold mb-2">
//               Fruits & Vegetables
//             </h2>
//             <p className="mb-4">
//               Starting from{" "}
//               <span className="bg-orange-500 px-2 py-1 rounded text-white font-semibold">
//                 $11.99
//               </span>
//             </p>
//             <Link to="#">
//               <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300 w-max">
//                 Shop Now →
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* --- Card 2 --- */}
//         <div
//           className="relative rounded-xl overflow-hidden h-72 md:h-80 lg:h-96 shadow-lg"
//           style={{
//             backgroundImage: `url(${Image2})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center p-6 text-white">
//             <p className="text-xs text-yellow-300 mb-1 tracking-wider uppercase">
//               SALE OF THE WEEK
//             </p>
//             <h2 className="text-2xl md:text-3xl font-bold mb-3">
//               Best Deals of the Year
//             </h2>
//             <div className="flex gap-4 text-sm font-medium mb-5">
//               <span>00 DAYS</span>
//               <span>02 HOURS</span>
//               <span>18 MINS</span>
//               <span>46 SECS</span>
//             </div>
//             <Link to="#">
//               <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300 w-max">
//                 Shop Now →
//               </button>
//             </Link>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default CardSection;
import { Link } from "react-router-dom";
import Image1 from "../../../../../assets/sabbirassets/TopCategories/Image.png";
import Image2 from "../../../../../assets/sabbirassets/TopCategories/Image1.png";

const CardSection = () => {
  return (
    <section className="py-6 md:py-10 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

        {/* --- Card 1 --- */}
        <div
          className="relative rounded-xl overflow-hidden h-64 sm:h-72 md:h-80 lg:h-96 shadow-lg"
          style={{
            backgroundImage: `url(${Image1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-4 sm:p-6 text-white">
            <p className="text-xs sm:text-sm text-green-200 mb-1 sm:mb-2 font-medium tracking-wider">
              100% ORGANIC
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
              Fruits & Vegetables
            </h2>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              Starting from{" "}
              <span className="bg-orange-500 px-2 py-1 rounded text-white font-semibold text-xs sm:text-sm">
                $11.99
              </span>
            </p>
            <Link to="#">
              <button className="bg-green-500 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full hover:bg-green-600 transition duration-300 w-full sm:w-max text-sm sm:text-base">
                Shop Now →
              </button>
            </Link>
          </div>
        </div>

        {/* --- Card 2 --- */}
        <div
          className="relative rounded-xl overflow-hidden h-64 sm:h-72 md:h-80 lg:h-96 shadow-lg"
          style={{
            backgroundImage: `url(${Image2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center p-4 sm:p-6 text-white">
            <p className="text-[9px] sm:text-xs text-yellow-200 mb-1 tracking-wider uppercase">
              SALE OF THE WEEK
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
              Best Deals of the Year
            </h2>
            <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm font-medium mb-4 sm:mb-5">
              <span>00 DAYS :</span>
              <span>02 HOURS :</span>
              <span>18 MINS :</span>
              <span>46 SECS</span>
            </div>
            <Link to="#">
              <button className="bg-green-500 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full hover:bg-green-600 transition duration-300 w-full sm:w-max text-sm sm:text-base">
                Shop Now →
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CardSection;


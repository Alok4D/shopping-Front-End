import {
  FaLeaf,
  FaShippingFast,
  FaLock,
  FaHeadset,
  FaStar,
  FaCube,
} from "react-icons/fa";

import farmer3 from "../../../../../assets/sabbirassets/about/BG (2).png";
import farmer4 from "../../../../../assets/sabbirassets/about/Image (7).png";

const FeaturesSection = () => {
  return (
    <div className="">
        <div className="container mx-auto grid items-center gap-10 py-5  md:grid-cols-2  bg-base-100">
      {/* Left Image Area */}
      <div className="relative flex items-center justify-center w-full h-full">
        {/* Background Image */}
        <img
          src={farmer3}
          alt="Background"
          className="object-cover w-full h-auto rounded-lg opacity-40"
        />

        {/* Foreground Image */}
        <img
          src={farmer4}
          alt="Farmer"
          className="absolute z-10 w-4/6 transform -translate-x-1/2 -translate-y-1/2 rounded-lg top-1/2 left-1/2 sm:w-3/8 md:w-2/3"
        />
      </div>

      {/* Right Text Area */}
      <div>
        <h2 className="mb-4 text-3xl font-bold">
          100% Trusted <br />
          <span className="text-green-600">Organic Food Store</span>
        </h2>
        <p className="mb-4 text-gray-600">
          Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
          Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
          mi. Nulla eu eros consequat tortor tincidunt feugiat.
        </p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="flex items-center space-x-4">
            <div className="p-3 text-base text-green-500 bg-green-100 rounded-full">
              <FaLeaf />
            </div>
            <div>
              <h3 className="text-sm font-semibold">100% Organic food</h3>
              <p className="text-sm text-gray-500">
                100% healthy & Fresh food.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start space-x-4">
            <div className="p-3 text-base text-green-500 bg-green-100 rounded-full">
              <FaHeadset />
            </div>
            <div>
              <h3 className="text-sm font-semibold">Great Support 24/7</h3>
              <p className="text-sm text-gray-500">Instant access to Contact</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start space-x-4">
            <div className="p-3 text-base text-green-500 bg-green-100 rounded-full">
              <FaStar />
            </div>
            <div>
              <h3 className="text-sm font-semibold">Customer Feedback</h3>
              <p className="text-sm text-gray-500">Our happy customer</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start space-x-4">
            <div className="p-3 text-base text-green-500 bg-green-100 rounded-full">
              <FaLock />
            </div>
            <div>
              <h3 className="text-sm font-semibold">100% Secure Payment</h3>
              <p className="text-sm text-gray-500">
                We ensure your money is safe
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="flex items-start space-x-4">
            <div className="p-3 text-base text-green-500 bg-green-100 rounded-full">
              <FaShippingFast />
            </div>
            <div>
              <h3 className="text-sm font-semibold">Free Shipping</h3>
              <p className="text-sm text-gray-500">
                Free shipping with discount
              </p>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="flex items-start space-x-4">
            <div className="p-3 text-base text-green-500 bg-green-100 rounded-full">
              <FaCube />
            </div>
            <div>
              <h3 className="text-sm font-semibold">100% Organic Food</h3>
              <p className="text-sm text-gray-500">
                100% healthy & Fresh food.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  
  );
};

export default FeaturesSection;

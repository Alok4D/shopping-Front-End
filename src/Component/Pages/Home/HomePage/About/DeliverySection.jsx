// src/components/DeliverySection.jsx
import React from "react";
import deliveryGuy from "../../assets/about/Image (8).png"; // Replace with your delivery image
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const DeliverySection = () => {
  return (
    // <div className="grid md:grid-cols-2 gap-10 items-center px-5 md:px-20 py-16 bg-base-200">
    //   <div>
    //     <h2 className="text-3xl font-bold mb-4">
    //       We Delivered, You <br />{" "}
    //       <span className="text-green-600">Enjoy Your Order.</span>
    //     </h2>
    //     <p className="text-gray-600 mb-6">
    //       Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices
    //       consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac
    //       mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget
    //       elementum.
    //     </p>
    //     <Link to={"#"} className="pointer-coarse">
    //       <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300">
    //         Shop Now →
    //       </button>
    //     </Link>
    //   </div>
    //   <img src={deliveryGuy} alt="Delivery" className="rounded-lg shadow-md" />
    // </div>

    <div className="grid md:grid-cols-2 gap-10 items-center px-5 md:px-20 py-10">
      <div className="md:px-10 ">
        <h2 className="text-3xl font-bold mb-4">
          We Delivered, You <br />{" "}
          <span className="text-green-600">Enjoy Your Order.</span>
        </h2>
        <p className="text-gray-600 mb-6">
          Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices
          consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac
          mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget
          elementum.
        </p>
       <ul className="mb-6">
         <li className="flex items-center space-x-3 text-gray-600">
          <FaCheckCircle className="text-green-500" size={18} />
          <span>Sed in metus pellentesque.</span>
        </li>
        <li className="flex items-center space-x-3 text-gray-600">
          <FaCheckCircle className="text-green-500" size={18} />
          <span>
            Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
          </span>
        </li>
        <li className="flex items-center space-x-3 text-gray-600">
          <FaCheckCircle className="text-green-500" size={18} />
          <span>Maecenas ut nunc fringilla erat varius.</span>
        </li>
       </ul>
        <Link to={"#"} className="pointer-coarse">
          <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300">
            Shop Now →
          </button>
        </Link>
      </div>
      <div className=" max-w-md  mt-6 md:mt-0 ">
        <img
          src={deliveryGuy}
          alt="Farmer with vegetables"
          className="w-full rounded-lg  "
        />
      </div>
    </div>
  );
};

export default DeliverySection;

import deliveryGuy from "../../../../../assets/sabbirassets/about/Image (8).png"; // Replace with your delivery image
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const DeliverySection = () => {
  return (
    <div className="container grid items-center gap-10  py-10 mx-auto md:grid-cols-2 ">
      <div className="">
        <h2 className="mb-4 text-3xl font-bold">
          We Delivered, You <br />{" "}
          <span className="text-green-600">Enjoy Your Order.</span>
        </h2>
        <p className="mb-6 text-gray-600">
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
          <button className="px-6 py-2 text-white transition duration-300 bg-green-500 rounded-full hover:bg-green-600">
            Shop Now →
          </button>
        </Link>
      </div>
      <div className=" mt-4  md:mt-0">
        <img
          src={deliveryGuy}
          alt="Farmer with vegetables"
          className="w-full rounded-lg "
        />
      </div>
    </div>
  );
};

export default DeliverySection;

import { FaStar, FaHeart, FaShoppingBag, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

import Apple from "../../../../../assets/sabbirassets/a/Apple.png";
import Cabbage from "../../../../../assets/sabbirassets/a/Cabbage.png";
import Capsicum from "../../../../../assets/sabbirassets/a/Capsicum.png";
import Finger from "../../../../../assets/sabbirassets/a/Finger.png";

const products = [
  {
    id: 1,
    name: "Green Apple",
    price: 14.99,
    oldPrice: 29.99,
    image: Apple,
    rating: 4,
    isOnSale: true,
  },
  {
    id: 2,
    name: "Chinese Cabbage",
    price: 14.99,
    image: Cabbage,
    rating: 4,
  },
  {
    id: 3,
    name: "Green Capsicum",
    price: 14.99,
    image: Capsicum,
    rating: 4,
    isSelected: true,
  },
  {
    id: 4,
    name: "Ladies Finger",
    price: 14.99,
    image: Finger,
    rating: 3,
  },
];

const FeatureProduct = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Featured Products</h2>
        <Link
          to="/shop"
          className="text-green-600 font-medium hover:underline flex items-center gap-1"
        >
          View All →
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative border rounded-lg p-4 bg-white transition group overflow-hidden hover:shadow-lg ${
              product.isSelected ? "border-green-500" : "border-gray-200"
            }`}
          >
            {/* Sale badge */}
            {product.isOnSale && (
              <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                Sale 50%
              </div>
            )}

            {/* Action Icons */}
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
              <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow hover:bg-green-100">
                <FaHeart className="text-gray-600 text-sm" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow hover:bg-green-100">
                <FaEye className="text-gray-600 text-sm" />
              </button>
            </div>

            {/* Product image */}
            <div className="w-full h-40 flex justify-center items-center mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full object-contain"
              />
            </div>

            {/* Product details */}
            <h4 className="text-sm font-semibold text-gray-800 mb-1">
              {product.name}
            </h4>

            {/* Pricing */}
            <div className="text-sm text-gray-700 mb-1">
              <span className="font-bold text-black">
                ${product.price.toFixed(2)}
              </span>{" "}
              {product.oldPrice && (
                <span className="line-through text-gray-400 ml-1">
                  ${product.oldPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 text-yellow-500 text-xs mb-2">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                  key={i}
                  className={i < product.rating ? "" : "text-gray-300"}
                />
              ))}
            </div>

            {/* Cart Icon */}
            <div className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full hover:bg-green-500 hover:text-white transition">
              <FaShoppingBag size={14} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProduct;

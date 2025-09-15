
import { ShoppingCart, Heart, Eye, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 p-4 shadow-sm relative overflow-hidden hover:border-green-400 transition duration-300">
    

      {/* Image */}
      <div className="relative flex justify-center items-center h-44 mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* Hover icons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link to="/wishlist">
            <button className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow border hover:bg-gray-100">
              <Heart size={18} className="text-gray-600" />
            </button>
          </Link>
          <Link to="/productDetails">
            <button className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow border hover:bg-gray-100">
              <Eye size={18} className="text-gray-600" />
            </button>
          </Link>
        </div>
      </div>

      {/* Product Info */}
      <h3 className="font-semibold text-gray-800 truncate">{product.name}</h3>

      <div className="mt-2">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-green-600 font-bold">${product.price.toFixed(2)}</div>
            {product.oldPrice && (
              <div className="text-sm line-through text-gray-400">
                ${product.oldPrice.toFixed(2)}
              </div>
            )}
            {/* Rating below price */}
            <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
                  size={14}
                />
              ))}
            </div>
          </div>

          {/* Cart Button */}
          <div>
            <button className="w-10 h-10 flex items-center justify-center bg-gray-400 text-white rounded-full shadow hover:bg-green-700">
              <ShoppingCart className="text-white" size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


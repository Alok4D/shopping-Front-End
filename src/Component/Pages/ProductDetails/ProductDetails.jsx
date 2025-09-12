import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  ShoppingCart,
  Heart,
  CheckCircle2,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

const product = {
  id: 1,
  name: "Chinese Cabbage",
  price: 17.28,
  oldPrice: 48.0,
  discount: 64,
  status: "In Stock",
  sku: "254964",
  reviews: 4,
  brand: "Fresh Farm",
  image:
    "https://visitokinawajapan.com/wp-content/themes/visit-okinawa_multi-language/lang/en/assets/img/discover/133/di133_kv_okinawan-island-vegetables.webp",
  description:
    "Sed commodo aliquam dui ut porta. Fusce felis felis, imperdiet ut posuere a, viverra ut mauris. Maecenas tincidunt ligula in sem vestibulum pharetra. Maecenas auctor tortor lacus, et tristique mi fermentum sit amet.",
  tags: ["Vegetables", "Healthy", "Chinese Cabbage", "Green Cabbage"],
  related: [
    {
      id: 2,
      name: "Green Apple",
      price: 14.99,
      oldPrice: 19.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlItdunKKrV-8fQutsMrMnVLuRdWpUOuA7-g&s",
      discount: 50,
    },
    {
      id: 3,
      name: "Cauliflower",
      price: 14.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGMsreLavs85BsvcYp7ctra4eumvdwSBckzg&s",
    },
    {
      id: 4,
      name: "Green Capsicum",
      price: 14.99,
      image:
        "https://images.everydayhealth.com/images/diet-nutrition/surprising-side-effects-of-eating-vegetables-1440x810.jpg?sfvrsn=7746adb5_5",
    },
    {
      id: 5,
      name: "Ladies Finger",
      price: 14.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZYREBYWTkXV9DlKltR7FznU975XiBFW8pA&s",
    },
  ],
};

export default function ProductDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="flex flex-col items-center">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-xl w-[350px] h-[280px] object-contain"
          />
          <div className="flex gap-3 mt-4">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src={product.image}
                alt="thumb"
                className="w-20 h-20 border rounded-lg object-cover cursor-pointer hover:border-green-500"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-yellow-500">⭐⭐⭐⭐</span>
            <span className="text-sm text-gray-500">
              {product.reviews} Reviews
            </span>
            <span className="text-sm text-gray-500">SKU: {product.sku}</span>
            <span className="text-sm text-green-600 font-medium">
              {product.status}
            </span>
          </div>

          {/* Price */}
          <div className="mt-4 flex items-center gap-3">
            <span className="text-2xl font-bold text-green-600">
              ${product.price.toFixed(2)}
            </span>
            <span className="line-through text-gray-400">
              ${product.oldPrice.toFixed(2)}
            </span>
            <span className="bg-red-500 text-white px-2 py-1 text-sm rounded">
              {product.discount}% Off
            </span>
          </div>

          {/* Brand & Share */}
          <div className="mt-4 flex items-center gap-5">
            <p className="text-sm">
              Brand: <span className="font-medium">{product.brand}</span>
            </p>
            <div className="flex items-center gap-2">
              <Share2 size={16} className="text-gray-500" />
              <Facebook size={16} className="cursor-pointer text-blue-600" />
              <Twitter size={16} className="cursor-pointer text-sky-500" />
              <Linkedin size={16} className="cursor-pointer text-blue-800" />
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex items-center gap-4 mt-6">
            <input
              type="number"
              defaultValue={1}
              min={1}
              className="w-16 border rounded-lg text-center py-2"
            />
            <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              <ShoppingCart size={18} /> Add to Cart
            </button>
            <button className="p-3 border rounded-lg hover:bg-gray-100">
              <Heart size={18} />
            </button>
          </div>

          {/* Category & Tags */}
          <div className="mt-6 text-sm text-gray-600">
            <p>
              Category: <span className="font-medium">Vegetables</span>
            </p>
            <p className="mt-2">Tags: {product.tags.join(", ")}</p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12 border-t pt-8">
        <div className="flex gap-6 border-b pb-2 mb-4">
          <button
            onClick={() => setActiveTab("description")}
            className={`font-medium border-b-2 pb-1 ${
              activeTab === "description"
                ? "text-green-600 border-green-600"
                : "text-gray-500 border-transparent hover:text-green-600"
            }`}
          >
            Descriptions
          </button>
          <button
            onClick={() => setActiveTab("additional")}
            className={`font-medium border-b-2 pb-1 ${
              activeTab === "additional"
                ? "text-green-600 border-green-600"
                : "text-gray-500 border-transparent hover:text-green-600"
            }`}
          >
            Additional Information
          </button>
          <button
            onClick={() => setActiveTab("feedback")}
            className={`font-medium border-b-2 pb-1 ${
              activeTab === "feedback"
                ? "text-green-600 border-green-600"
                : "text-gray-500 border-transparent hover:text-green-600"
            }`}
          >
            Customer Feedback
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {activeTab === "description" && (
            <>
              <div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-600" size={18} /> 100%
                    of fresh leaves
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-600" size={18} /> All
                    organic & natural
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-600" size={18} /> Free
                    from pesticides
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-xl overflow-hidden">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/dFqcE7NP9RQ?si=9kepjETdzIS8RBoE"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border p-4 rounded-xl text-center">
                    <p className="font-bold text-green-600">69% Discount</p>
                    <p className="text-xs text-gray-500">Save your money</p>
                  </div>
                  <div className="border p-4 rounded-xl text-center">
                    <p className="font-bold text-green-600">100% Organic</p>
                    <p className="text-xs text-gray-500">
                      Fresh organic veggies
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "additional" && (
            <div className="col-span-2 text-gray-700">
              <h4 className="text-lg font-semibold mb-3">
                Additional Information
              </h4>
              <ul className="space-y-2">
                <li>
                  <strong>Weight:</strong> 500g
                </li>
                <li>
                  <strong>Dimensions:</strong> 20cm x 10cm x 5cm
                </li>
                <li>
                  <strong>Country of Origin:</strong> Japan
                </li>
                <li>
                  <strong>Storage:</strong> Keep refrigerated
                </li>
              </ul>
            </div>
          )}

          {activeTab === "feedback" && (
            <div className="col-span-2 text-gray-700">
              <h4 className="text-lg font-semibold mb-3">Customer Feedback</h4>
              <div className="space-y-4">
                <div className="border rounded-lg p-4 bg-gray-50">
                  <p className="font-medium">🌟🌟🌟🌟🌟</p>
                  <p className="text-sm mt-2">
                    "Very fresh and good quality!"
                  </p>
                </div>
                <div className="border rounded-lg p-4 bg-gray-50">
                  <p className="font-medium">🌟🌟🌟🌟</p>
                  <p className="text-sm mt-2">"Nice taste, arrived quickly."</p>
                </div>
                <div className="border rounded-lg p-4 bg-gray-50">
                  <p className="font-medium">🌟🌟🌟</p>
                  <p className="text-sm mt-2">
                    "Good, but packaging could be better."
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h3 className="text-xl font-bold mb-6">Related Products</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {product.related.map((item) => (
            <div
              key={item.id}
              className="relative border rounded-xl p-4 text-center bg-white shadow-sm hover:shadow-md transition"
            >
              {item.discount && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  Sale {item.discount}%
                </div>
              )}
              <img
                src={item.image}
                alt={item.name}
                className="mx-auto h-32 object-contain mb-3"
              />
              <h4 className="font-medium">{item.name}</h4>
              <p className="text-green-600 font-bold">
                ${item.price.toFixed(2)}
              </p>
              {item.oldPrice && (
                <p className="text-gray-400 line-through text-sm">
                  ${item.oldPrice.toFixed(2)}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

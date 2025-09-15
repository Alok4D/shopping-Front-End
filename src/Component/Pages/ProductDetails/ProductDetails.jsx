import { useParams } from "react-router-dom";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ShoppingCart, Heart, CheckCircle2 } from "lucide-react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

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
  images: [
    "https://visitokinawajapan.com/wp-content/themes/visit-okinawa_multi-language/lang/en/assets/img/discover/133/di133_kv_okinawan-island-vegetables.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlItdunKKrV-8fQutsMrMnVLuRdWpUOuA7-g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGMsreLavs85BsvcYp7ctra4eumvdwSBckzg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGMsreLavs85BsvcYp7ctra4eumvdwSBckzg&s",
  ],
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
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4 md:py-8">
        {/* Left: Image Slider */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Thumbnail Slider */}
          <div className="flex md:flex-col items-center w-full md:w-20">
            <div className="cursor-pointer mb-2 md:mb-0 md:mb-2">
              <FaChevronCircleUp className="text-black text-2xl" />
            </div>
            <Swiper
              direction="vertical"
              slidesPerView={4}
              spaceBetween={8}
              navigation={{
                nextEl: ".swiper-button-next-vertical",
                prevEl: ".swiper-button-prev-vertical",
              }}
              modules={[Navigation]}
              className="h-40 md:h-96 w-full md:w-auto"
            >
              {product.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`thumb-${idx}`}
                    onClick={() => setSelectedImage(img)}
                    className={`w-full md:h-20 object-contain border rounded cursor-pointer transition-all ${
                      selectedImage === img
                        ? "border-green-500"
                        : "border-gray-200 hover:border-blue-400"
                    }`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="cursor-pointer mt-2 md:mt-2">
              <FaChevronCircleDown className="text-black text-2xl" />
            </div>
          </div>

          {/* Main Image */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src={selectedImage}
              alt="product"
              className="max-h-[300px] sm:max-h-[350px] md:max-h-[400px] object-contain border rounded-lg"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            {product.name}
          </h2>

          {/* Rating + SKU */}
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <div className="flex items-center text-yellow-400">
              {"★".repeat(4)}
              <span className="text-sm text-gray-600 ml-2">
                {product.reviews} Review
              </span>
            </div>
            <span className="text-sm text-gray-500">SKU: {product.sku}</span>
            <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
              {product.status}
            </span>
          </div>

          {/* Price */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="line-through text-gray-400 text-lg">
              ${product.oldPrice.toFixed(2)}
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-green-600">
              ${product.price.toFixed(2)}
            </span>
            <span className="ml-2 text-red-500 font-semibold text-sm">
              {Math.round(
                ((product.oldPrice - product.price) / product.oldPrice) * 100
              )}
              % Off
            </span>
          </div>

          {/* Brand */}
          <div className="mt-4 flex items-center gap-2">
            <span className="font-medium">Brand:</span>
            <img
              src={product.images[0]}
              alt=""
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-md"
            />
          </div>

          {/* Description */}
          <p className="mt-4 text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Quantity & Add to Cart */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-6">
            <div className="flex items-center border rounded">
              <button className="px-2 sm:px-3 py-1 sm:py-2 text-lg">-</button>
              <span className="px-3 sm:px-4">1</span>
              <button className="px-2 sm:px-3 py-1 sm:py-2 text-lg">+</button>
            </div>
            <button className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded hover:bg-green-700">
              <ShoppingCart size={18} /> Add to Cart
            </button>
            <button className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center border rounded-full hover:bg-gray-100">
              <Heart size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Category & Tags */}
          <div className="mt-6 text-sm text-gray-500">
            <p>
              <span className="font-medium">Category:</span> Vegetables
            </p>
            <p>
              <span className="font-medium">Tags:</span>{" "}
              {product.tags.join(", ")}
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12 border-t pt-8">
        <div className="flex flex-wrap justify-center items-center gap-6 border-b pb-2 mb-4">
          {["description", "additional", "feedback"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-medium border-b-2 pb-1 ${
                activeTab === tab
                  ? "text-green-600 border-green-600"
                  : "text-gray-500 border-transparent hover:text-green-600"
              } capitalize`}
            >
              {tab
                .replace("description", "Descriptions")
                .replace("additional", "Additional Information")
                .replace("feedback", "Customer Feedback")}
            </button>
          ))}
        </div>

        {/* Tabs Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {activeTab === "description" && (
            <>
              <div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-600" size={18} /> 100%
                    fresh leaves
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-600" size={18} />{" "}
                    Organic & natural
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-600" size={18} /> Free
                    from pesticides
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-xl overflow-hidden w-full">
                  <iframe
                    className="w-full h-64 sm:h-80 md:h-96"
                    src="https://www.youtube.com/embed/dFqcE7NP9RQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
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
                  <p className="text-sm mt-2">"Very fresh and good quality!"</p>
                </div>
                <div className="border rounded-lg p-4 bg-gray-50">
                  <p className="font-medium">🌟🌟🌟🌟</p>
                  <p className="text-sm mt-2">"Nice taste, arrived quickly."</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">
          Related Products
        </h3>
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
                className="mx-auto h-32 sm:h-36 object-contain mb-3"
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

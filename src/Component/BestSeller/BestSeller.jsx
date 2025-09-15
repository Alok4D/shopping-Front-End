import { FaHeart, FaEye, FaShoppingBag, FaLock, FaStar } from "react-icons/fa";
import bestsellerDiscount from "../../../src/assets/banner-logo/627de77363d3144b88888de997dd16b7dda7316e.jpg";
const products = [
  {
    id: 1,
    name: "Green Apple",
    price: 14.99,
    img: "https://t4.ftcdn.net/jpg/02/66/68/37/360_F_266683754_wzx9XxeNXKudct2Q3qwQf1PvVaQaKOf6.jpg",
    rating: 4.5,
    locked: false,
    favorite: true,
    viewed: true,
  },
  {
    id: 2,
    name: "Chinese Cabbage",
    price: 14.99,
    img: "https://media.istockphoto.com/id/1058023252/photo/pumpkin-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=VYFBd-A2d-zPNP4DWPMz-PUBIDP96cQUHqyq15-TOaA=",
    rating: 4,
    locked: true,
  },
  {
    id: 3,
    name: "Green Lettuce",
    price: 14.99,
    img: "https://previews.123rf.com/images/usersam2007/usersam20071112/usersam2007111200005/11645815-single-tomato-vegetable-isolated-on-white-background.jpg",
    rating: 4.5,
    locked: true,
  },
  {
    id: 4,
    name: "Green Chili",
    price: 14.99,
    img: "https://st.depositphotos.com/1036708/4603/i/450/depositphotos_46039707-stock-photo-orange-bell-pepper.jpg",
    rating: 4.5,
    locked: false,
    favorite: true,
    viewed: true,
  },
];

const hotDeals = [
  {
    id: 1,
    name: "Green Apple",
    price: 14.99,
    img: "https://png.pngtree.com/png-clipart/20240325/original/pngtree-green-apple-fresh-fruit-png-image_14671987.png",
    rating: 4.5,
  },
  {
    id: 6,
    name: "Indian Malta",
    price: 9.99,
    img: "https://img.freepik.com/premium-photo/close-up-tomatoes-against-white-background_1048944-1411776.jpg?semt=ais_incoming&w=740&q=80",
    rating: 4,
    favorite: true,
    viewed: true,
  },
  {
    id: 3,
    name: "Green Lettuce",
    price: 14.99,
    img: "https://st3.depositphotos.com/4398543/12621/i/450/depositphotos_126218612-stock-photo-carrot-isolated-on-the-white.jpg",
    rating: 4,
  },
];

const bestSellers = [
  {
    id: 7,
    name: "Eggplant",
    price: 14.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8tTwvPkVqAQsPIOcaHJHUFIf69_JCrXyT5w&s",
    rating: 4.5,
  },
  {
    id: 8,
    name: "Red Capsicum",
    price: 14.99,
    oldPrice: 20.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJOjI4eO-SW07S7bU_zgc5mnXl0n8Rm9jBQ&s",
    rating: 4,
  },
  {
    id: 9,
    name: "Red Tomatoes",
    price: 14.99,
    img: "https://img.freepik.com/free-photo/meal-purple-organic-cabbage-vegetable_1203-6023.jpg?semt=ais_incoming&w=740&q=80",
    rating: 4,
  },
];

const topRated = [
  {
    id: 10,
    name: "Big Potatos",
    price: 14.99,
    img: "https://thumbs.dreamstime.com/b/single-green-oblong-vegetable-white-surface-sunlit-366407449.jpg",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Corn",
    price: 14.99,
    oldPrice: 20.99,
    img: "https://st5.depositphotos.com/38944626/63890/i/450/depositphotos_638907844-stock-photo-ripe-green-broccoli-cabbage-isolated.jpg",
    rating: 4,
  },
  {
    id: 11,
    name: "Fresh Cauliflower",
    price: 14.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8gLJD9-dDgTAvprFCLa9IbcPmatbzKZRog&s",
    rating: 4,
  },
];

// ⭐ Utility for stars
const renderStars = (rating) =>
  Array(5)
    .fill(0)
    .map((_, i) => (
      <span
        key={i}
        className={`text-sm ${
          i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));

const BestSeller = () => {
  return (
    <section className="py-10 lg:px-0 px-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Best Seller Products</h2>
        <button className="text-green-600 hover:underline">View All →</button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative border hover:border-[#00B207] rounded-lg p-4 bg-white transition group overflow-hidden hover:shadow-lg ${
              product.isSelected ? "hover:border-[#00B207]" : "border-gray-200"
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
                src={product.img}
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

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
      {/* Hot Deals */}
<div>
  <h3 className="text-lg font-bold mb-4">Hot Deals</h3>
  <div className="space-y-4">
    {hotDeals.map((p) => (
      <div
        key={p.id}
        className="group flex items-center justify-center gap-4 p-3 border border-gray-200 rounded-lg hover:shadow hover:border-[#00B207] transition-colors duration-300"
      >
        {/* Product Image */}
        <div className="w-16 h-16 flex items-center justify-center">
          <img
            src={p.img}
            alt={p.name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="ml-3 flex-1">
          <p className="font-semibold">{p.name}</p>

          {/* Price + Rating (default visible, hide on hover) */}
          <div className="transition-all duration-300 group-hover:hidden">
            <p className="text-green-600 font-bold">${p.price}</p>
            <div className="flex">{renderStars(p.rating)}</div>
          </div>

          {/* Hover Actions (show below name on hover) */}
          <div className="hidden group-hover:flex gap-2 mt-2">
            <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-green-500 hover:text-white transition">
              <FaShoppingBag size={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-green-500 hover:text-white transition">
              <FaHeart size={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-green-500 hover:text-white transition">
              <FaEye size={14} />
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


        {/* Best Seller */}
         <div>
          <h3 className="text-lg font-bold mb-4">Best Seller</h3>
          <div className="space-y-4">
            {bestSellers.map((p) => (
              <div
                key={p.id}
                className="group flex items-center justify-center gap-4 p-3 border rounded-lg hover:shadow relative overflow-hidden hover:border-[#00B207]"
              >
                {/* Product Image */}
                <div className="w-16 h-16 flex items-center justify-center">
                  <img src={p.img} alt={p.name} className="w-full h-full " />
                </div>

                {/* Product Info */}
                <div className="ml-3 flex-1">
                  <p className="font-semibold">{p.name}</p>

                  {/* Price + Rating (default visible, hide on hover) */}
                  <div className="transition-all duration-300 group-hover:hidden">
                    <p className="text-green-600 font-bold">${p.price}</p>
                    <div className="flex">{renderStars(p.rating)}</div>
                  </div>

                  {/* Hover Actions (show below name on hover) */}
                  <div className="hidden group-hover:flex gap-2 mt-2">
                    <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-green-500 hover:text-white transition">
                      <FaShoppingBag size={14} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-green-500 hover:text-white transition">
                      <FaHeart size={14} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-green-500 hover:text-white transition">
                      <FaEye size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Rated */}
        <div>
          <h3 className="text-lg font-bold mb-4">Top Rated</h3>
          <div className="space-y-4">
            {topRated.map((p) => (
              <div
                key={p.id}
                className="group flex items-center justify-center gap-4 p-3 border rounded-lg hover:shadow relative overflow-hidden hover:border-[#00B207]"
              >
                {/* Product Image */}
                <div className="w-16 h-16 flex items-center justify-center">
                  <img src={p.img} alt={p.name} className="w-full h-full " />
                </div>

                {/* Product Info */}
                <div className="ml-3 flex-1">
                  <p className="font-semibold">{p.name}</p>

                  {/* Price + Rating (default visible, hide on hover) */}
                  <div className="transition-all duration-300 group-hover:hidden">
                    <p className="text-green-600 font-bold">${p.price}</p>
                    <div className="flex">{renderStars(p.rating)}</div>
                  </div>

                  {/* Hover Actions (show below name on hover) */}
                  <div className="hidden group-hover:flex gap-2 mt-2">
                    <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-green-500 hover:text-white transition">
                      <FaShoppingBag size={14} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-green-500 hover:text-white transition">
                      <FaHeart size={14} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-green-500 hover:text-white transition">
                      <FaEye size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Yellow Banner */}
        <div className="relative h-[355px] w-full bg-yellow-400 rounded-xl overflow-hidden flex flex-col items-center text-center">
          {/* Content */}
          <div className="relative z-10 p-6">
            <h4 className="text-sm font-bold text-black mb-2">HOT SALE</h4>
            <p className="text-2xl font-extrabold text-black mb-4">
              Save 37% on Every Order
            </p>
            <button className="bg-white text-green-600 px-6 py-2 rounded-full shadow hover:bg-green-100 transition">
              Shop Now →
            </button>
          </div>

          {/* Bottom Image */}
          <img
            src={bestsellerDiscount}
            alt="Offer"
            className="absolute bottom-0 w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default BestSeller;

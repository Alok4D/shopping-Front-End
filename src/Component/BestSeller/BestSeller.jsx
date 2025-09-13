
import { FaStar, FaHeart, FaEye, FaLock, FaShoppingBag } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Green Apple",
    price: 14.99,
    img: "/images/apple.png",
    rating: 4.5,
    locked: false,
    favorite: true,
    viewed: true,
  },
  {
    id: 2,
    name: "Chinese Cabbage",
    price: 14.99,
    img: "/images/cabbage.png",
    rating: 4,
    locked: true,
  },
  {
    id: 3,
    name: "Green Lettuce",
    price: 14.99,
    img: "/images/lettuce.png",
    rating: 4.5,
    locked: true,
  },
  {
    id: 4,
    name: "Green Chili",
    price: 14.99,
    img: "/images/chili.png",
    rating: 4.5,
    locked: false,
    favorite: true,
    viewed: true,
  },
  {
    id: 5,
    name: "Corn",
    price: 14.99,
    img: "/images/corn.png",
    rating: 3.5,
    locked: true,
  },
];

const hotDeals = [
  {
    id: 1,
    name: "Green Apple",
    price: 14.99,
    img: "/images/apple.png",
    rating: 4.5,
  },
  {
    id: 6,
    name: "Indian Malta",
    price: 9.99,
    img: "/images/malta.png",
    rating: 4,
    favorite: true,
    viewed: true,
  },
  {
    id: 3,
    name: "Green Lettuce",
    price: 14.99,
    img: "/images/lettuce.png",
    rating: 4,
  },
];

const bestSellers = [
  {
    id: 7,
    name: "Eggplant",
    price: 14.99,
    img: "/images/eggplant.png",
    rating: 4.5,
  },
  {
    id: 8,
    name: "Red Capsicum",
    price: 14.99,
    oldPrice: 20.99,
    img: "/images/capsicum.png",
    rating: 4,
  },
  {
    id: 9,
    name: "Red Tomatoes",
    price: 14.99,
    img: "/images/tomatoes.png",
    rating: 4,
  },
];

const topRated = [
  {
    id: 10,
    name: "Big Potatos",
    price: 14.99,
    img: "/images/potatos.png",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Corn",
    price: 14.99,
    oldPrice: 20.99,
    img: "/images/corn.png",
    rating: 4,
  },
  {
    id: 11,
    name: "Fresh Cauliflower",
    price: 14.99,
    img: "/images/cauliflower.png",
    rating: 4,
  },
];

const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  for (let i = 0; i < fullStars; i++)
    stars.push(<FaStar key={i} className="text-yellow-400 inline" />);
  if (halfStar)
    stars.push(<FaStar key={"half"} className="text-yellow-400 inline" />);
  return <div className="text-sm">{stars}</div>;
};

const ProductCard = ({ product, big }) => (
  <div
    className={`relative border rounded-md p-3 cursor-pointer hover:shadow-lg ${
      big ? "border-green-500" : "border-gray-200"
    }`}
  >
    <div className="absolute top-2 right-2 flex gap-2 text-gray-600">
      {product.favorite && <FaHeart />}
      {product.viewed && <FaEye />}
      {product.locked && <FaLock />}
    </div>
    <img
      src={product.img}
      alt={product.name}
      className={`mx-auto ${big ? "h-28" : "h-20"}`}
    />
    <h3 className="text-xs mt-2 font-semibold">{product.name}</h3>
    <div className="flex items-center justify-between mt-1">
      <p className="text-xs font-bold">${product.price.toFixed(2)}</p>
      <StarRating rating={product.rating} />
    </div>
  </div>
);

const BestSeller = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Best Seller Products</h2>
        <a
          href="#"
          className="text-green-500 text-sm hover:underline flex items-center gap-1"
        >
          View All <span>→</span>
        </a>
      </div>

      {/* Top big cards */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mb-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} big />
        ))}
      </div>

      {/* Bottom section: lists + offer */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Hot Deals */}
        <div>
          <h3 className="font-semibold mb-4">Hot Deals</h3>
          <div className="space-y-4">
            {hotDeals.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>

        {/* Best Seller */}
        <div>
          <h3 className="font-semibold mb-4">Best Seller</h3>
          <div className="space-y-4">
            {bestSellers.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>

        {/* Top Rated */}
        <div>
          <h3 className="font-semibold mb-4">Top Rated</h3>
          <div className="space-y-4">
            {topRated.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>

        {/* Offer card */}
        <div className="bg-yellow-400 rounded-lg p-6 flex flex-col justify-center items-center text-center text-black">
          <h3 className="font-bold text-lg mb-3">HOT SALE</h3>
          <p className="font-bold text-xl mb-5">Save 37% on Every Order</p>
          <button className="btn btn-success">Shop Now →</button>
          <img
            src="/images/offer-fruits.png"
            alt="Offer Fruits"
            className="mt-6 max-h-40 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default BestSeller;

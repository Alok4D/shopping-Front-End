
import { FaStar, FaHeart, FaEye, FaLock, FaShoppingBag } from "react-icons/fa";

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
  {
    id: 5,
    name: "Corn",
    price: 14.99,
    img: "https://static.vecteezy.com/system/resources/thumbnails/022/935/638/small/top-view-of-single-fresh-green-cucumber-vegetable-isolated-with-clipping-path-and-shadow-in-file-format-png.png",
    rating: 3.5,
    locked: true,
  },
];

const hotDeals = [
  {
    id: 1,
    name: "Green Apple",
    price: 14.99,
    img: "https://e7.pngegg.com/pngimages/427/117/png-clipart-sweet-potato-illustration-single-potato-food-vegetables.png",
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

const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  for (let i = 0; i < fullStars; i++)
    stars.push(<FaStar key={i} className="inline text-yellow-400" />);
  if (halfStar)
    stars.push(<FaStar key={"half"} className="inline text-yellow-400" />);
  return <div className="text-sm">{stars}</div>;
};

const ProductCard = ({ product, big }) => (
  <div
    className={`relative border rounded-md p-3 cursor-pointer hover:shadow-lg ${
      big ? "border-green-500" : "border-gray-200"
    }`}
  >
    <div className="absolute flex gap-2 text-gray-600 top-2 right-2">
      {product.favorite && <FaHeart />}
      {product.viewed && <FaEye />}
      {product.locked && <FaLock />}
    </div>
    <img
      src={product.img}
      alt={product.name}
      className={`mx-auto ${big ? "h-28" : "h-20"}`}
    />
    <h3 className="mt-2 text-xs font-semibold">{product.name}</h3>
    <div className="flex items-center justify-between mt-1">
      <p className="text-xs font-bold">${product.price.toFixed(2)}</p>
      <StarRating rating={product.rating} />
    </div>
  </div>
);

const BestSeller = () => {
  return (
    <div className="container px-4 py-8 mx-auto sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Best Seller Products</h2>
        <a
          href="#"
          className="flex items-center gap-1 text-sm text-green-500 hover:underline"
        >
          View All <span>→</span>
        </a>
      </div>

      {/* Top big cards */}
      <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} big />
        ))}
      </div>

      {/* Bottom section: lists + offer */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {/* Hot Deals */}
        <div>
          <h3 className="mb-4 font-semibold">Hot Deals</h3>
          <div className="space-y-4">
            {hotDeals.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>

        {/* Best Seller */}
        <div>
          <h3 className="mb-4 font-semibold">Best Seller</h3>
          <div className="space-y-4">
            {bestSellers.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>

        {/* Top Rated */}
        <div>
          <h3 className="mb-4 font-semibold">Top Rated</h3>
          <div className="space-y-4">
            {topRated.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>

        {/* Offer card */}
        <div className="flex flex-col items-center justify-center p-6 text-center text-black bg-yellow-400 rounded-lg">
          <h3 className="mb-3 text-lg font-bold">HOT SALE</h3>
          <p className="mb-5 text-xl font-bold">Save 37% on Every Order</p>
          <button className="btn btn-success">Shop Now →</button>
          <img
            src="https://static.vecteezy.com/system/resources/previews/051/334/740/non_2x/assorted-fresh-vegetables-including-carrots-tomatoes-broccoli-eggplant-cabbage-and-zucchini-showcasing-vibrant-colors-and-healthy-produce-png.png"
            alt="Offer Fruits"
            className="object-contain mt-6 max-h-40"
          />
        </div>
      </div>
    </div>
  );
};

export default BestSeller;

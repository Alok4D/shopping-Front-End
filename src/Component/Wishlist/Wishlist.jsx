import { Helmet } from "react-helmet-async";
import { FaFacebookF, FaTwitter, FaPinterest,  } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

function Wishlist() {
  return (
    <div className="container mx-auto p-6">
      <Helmet>
        <title>Dashboard | Wishlist</title>
      </Helmet>
      <h1 className="text-3xl font-semibold mb-6 text-center">My Wishlist</h1>

      {/* Table Structure */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-gray-500 text-left">Product</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500 text-left">Price</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500 text-left">Stock Status</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1: Green Capsicum */}
            <tr className="border-b">
              <td className="px-6 py-4 flex items-center space-x-4 text-left">
                <img
                  src="https://t4.ftcdn.net/jpg/05/37/04/61/360_F_537046123_s8JVn2NrClPQDOryhSm8jonYZPfIzPRX.jpg"
                  alt="Green Capsicum"
                  className="w-12 h-12 object-cover rounded-md"
                />
                <div>
                  <h2 className="font-medium text-lg">Green Capsicum</h2>
                </div>
              </td>
              <td className="px-6 py-4 text-left text-lg font-semibold">$14.99</td>
              <td className="px-6 py-4 text-left">
                <span className="text-green-500 font-medium">In Stock</span>
              </td>
              <td className="px-6 py-4 flex justify-center items-center space-x-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded-md">Add to Cart</button>
                <button className="bg-gray-300 text-gray-600 px-2 py-2 rounded-full hover:bg-gray-400">
                  <IoMdCloseCircle className="text-red-400 text-xl" />
                </button>
              </td>
            </tr>

            {/* Row 2: Chinese Cabbage */}
            <tr className="border-b">
              <td className="px-6 py-4 flex items-center space-x-4 text-left">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ387KzP_2pJ3y63IU7-FhZ_cNvljTOsS_ig&s"
                  alt="Chinese Cabbage"
                  className="w-12 h-12 object-cover rounded-md"
                />
                <div>
                  <h2 className="font-medium text-lg">Chinese Cabbage</h2>
                </div>
              </td>
              <td className="px-6 py-4 text-left text-lg font-semibold">$45.00</td>
              <td className="px-6 py-4 text-left">
                <span className="text-green-500 font-medium">In Stock</span>
              </td>
              <td className="px-6 py-4 flex justify-center items-center space-x-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded-md">Add to Cart</button>
                <button className="bg-gray-300 text-gray-600 px-2 py-2 rounded-full hover:bg-gray-400">
                  <IoMdCloseCircle className="text-red-400 text-xl" />
                </button>
              </td>
            </tr>

            {/* Row 3: Fresh Sujpuri Mango */}
            <tr className="border-b">
              <td className="px-6 py-4 flex items-center space-x-4 text-left">
                <img
                  src="https://cdn.britannica.com/16/187216-050-CB57A09B/tomatoes-tomato-plant-Fruit-vegetable.jpg"
                  alt="Fresh Sujpuri Mango"
                  className="w-12 h-12 object-cover rounded-md"
                />
                <div>
                  <h2 className="font-medium text-lg">Fresh Sujpuri Mango</h2>
                </div>
              </td>
              <td className="px-6 py-4 text-left text-lg font-semibold">$9.00</td>
              <td className="px-6 py-4 text-left">
                <span className="text-red-500 font-medium">Out of Stock</span>
              </td>
              <td className="px-6 py-4 flex justify-center items-center space-x-4">
                <button className="bg-gray-300 text-gray-600 px-4 py-2 rounded-md cursor-not-allowed" disabled>
                  Out of Stock
                </button>
                <button className="bg-gray-300 text-gray-600 px-2 py-2 rounded-full cursor-not-allowed">
                <IoMdCloseCircle className="text-red-400 text-xl" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Social Share Section */}
      <div className="flex justify-center space-x-4 mt-6">
        <h2 className="text-lg font-medium">Share : </h2>
        <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600">
          <FaFacebookF />
        </button>
        <button className="bg-slate-400 text-white p-2 rounded-full hover:bg-green-600">
          <FaTwitter />
        </button>
        <button className="bg-slate-400 text-white p-2 rounded-full hover:bg-green-600">
          <FaPinterest />
        </button>
      </div>
    </div>
  );
}

export default Wishlist;

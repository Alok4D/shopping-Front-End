import { Helmet } from "react-helmet-async";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function ShoppingCart() {
  return (
    <div className="container mx-auto p-6">
      <Helmet>
        <title>Dashboard | Cart</title>
      </Helmet>
      <h1 className="text-3xl font-semibold mb-6 text-center">My Shopping Cart</h1>

      {/* Cart Items Section */}
      <div className="flex flex-col md:flex-row space-x-6 mb-6">
        {/* Left Column: Cart Items */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-sm font-medium text-gray-500 text-left">Product</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500 text-left">Price</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500 text-left">Quantity</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500 text-left">Subtotal</th>
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
                <td className="px-6 py-4 text-left text-lg font-semibold">$14.00</td>
                <td className="px-6 py-4 text-left text-lg font-semibold">x5</td>
                <td className="px-6 py-4 text-left text-lg font-semibold">$70.00</td>
                <td className="px-6 py-4">
                  <button className="bg-gray-200 text-gray-800 p-2 rounded-full">
                    <FaTrash />
                  </button>
                </td>
              </tr>

              {/* Row 2: Red Capsicum */}
              <tr className="border-b">
                <td className="px-6 py-4 flex items-center space-x-4 text-left">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ387KzP_2pJ3y63IU7-FhZ_cNvljTOsS_ig&s"
                    alt="Red Capsicum"
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="font-medium text-lg">Red Capsicum</h2>
                  </div>
                </td>
                <td className="px-6 py-4 text-left text-lg font-semibold">$14.00</td>
                <td className="px-6 py-4 text-left text-lg font-semibold">x1</td>
                <td className="px-6 py-4 text-left text-lg font-semibold">$14.00</td>
                <td className="px-6 py-4">
                  <button className="bg-gray-200 text-gray-800 p-2 rounded-full">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Buttons Below Table */}
          <div className="mt-4 flex justify-between">
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md">Return to Shop</button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md">Update Cart</button>
          </div>
        </div>

        {/* Right Column: Cart Summary */}
        <div className="flex-none w-80 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4">Cart Total</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal:</span>
              <span className="font-semibold">$84.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Shipping:</span>
              <span className="font-semibold">Free</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Total:</span>
              <span className="font-semibold text-green-500">$84.00</span>
            </div>
            <Link to="/checkout">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md w-full mt-4">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Coupon Code Section */}
      <div className="mt-6">
        <div className="flex">
          <div className="md:w-full lg:w-[77%] bg-white shadow-md rounded-lg p-6">
            <label className="block text-sm font-medium text-gray-700">Coupon Code</label>
            <div className="flex items-center mt-2">
              <input
                type="text"
                placeholder="Enter code"
                className="border border-gray-300 px-4 py-2 w-full rounded-md"
              />
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md ml-2">
                Apply Coupon
              </button>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default ShoppingCart;

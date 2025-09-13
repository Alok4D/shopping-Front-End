import { useState } from "react";

function Checkout() {
  // State for product quantities
  const [greenCapsicumQty, setGreenCapsicumQty] = useState(5);
  const [redCapsicumQty, setRedCapsicumQty] = useState(1);

  // Calculate subtotals dynamically based on quantity
  const greenCapsicumPrice = 14;
  const redCapsicumPrice = 14;
  const greenCapsicumSubtotal = greenCapsicumPrice * greenCapsicumQty;
  const redCapsicumSubtotal = redCapsicumPrice * redCapsicumQty;

  // Total calculation
  const subtotal = greenCapsicumSubtotal + redCapsicumSubtotal;
  const shipping = "Free"; // Assuming free shipping
  const total = subtotal;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6 text-center">Checkout</h1>

      {/* Checkout Section */}
      <div className="flex flex-col md:flex-row space-x-6 mb-6">
        {/* Left Column: Billing Information */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 p-3 rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 p-3 rounded-md"
              />
            </div>

            <input
              type="text"
              placeholder="Street Address"
              className="border border-gray-300 p-3 rounded-md w-full mb-4"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <select
                className="border border-gray-300 p-3 rounded-md w-full"
                defaultValue="Select"
              >
                <option>Select Country / Region</option>
                <option>USA</option>
                <option>Canada</option>
              </select>
              <select
                className="border border-gray-300 p-3 rounded-md w-full"
                defaultValue="Select"
              >
                <option>Select State</option>
                <option>California</option>
                <option>New York</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <input
                type="text"
                placeholder="Zip Code"
                className="border border-gray-300 p-3 rounded-md"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 p-3 rounded-md"
              />
            </div>

            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm">Ship to a different address</label>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Additional Info</h2>
            <textarea
              placeholder="Notes about your order, e.g. special notes for delivery"
              className="border border-gray-300 p-3 rounded-md w-full"
            ></textarea>
          </form>
        </div>

        {/* Right Column: Order Summary */}
        <div className="flex-none w-full md:w-80 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center border-b pb-4">
            Order Summary
          </h2>
          <div className="space-y-4">
            {/* Green Capsicum Row */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdydFa5ih7abmQun15DGRvmIBy5jSLbkmmg&s"
                  alt="Green Capsicum"
                  className="w-12 h-12 object-cover rounded-md"
                />
                <span className="font-medium">
                  Green Capsicum x{greenCapsicumQty}
                </span>
              </div>
              <span className="font-semibold text-lg">
                ${greenCapsicumSubtotal}
              </span>
            </div>

            {/* Red Capsicum Row */}
            <div className="flex justify-between items-center ">
              <div className="flex items-center space-x-4">
                <img
                  src="https://recipe30.com/wp-content/uploads/2021/08/Asian-stirfried-vegetables-848x477.jpg"
                  alt="Red Capsicum"
                  className="w-12 h-12 object-cover rounded-md"
                />
                <span className="font-medium">
                  Red Capsicum x{redCapsicumQty}
                </span>
              </div>
              <span className="font-semibold text-lg">
                ${redCapsicumSubtotal}
              </span>
            </div>

            {/* Subtotal */}
            <div className="flex justify-between items-center border-b pb-2 mt-4">
              <span className="text-lg font-semibold">Subtotal:</span>
              <span className="text-lg font-semibold">${subtotal}</span>
            </div>

            {/* Shipping */}
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-lg font-semibold">Shipping:</span>
              <span className="text-lg font-semibold">{shipping}</span>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-semibold">Total:</span>
              <span className="text-xl font-semibold text-green-500">
                ${total}
              </span>
            </div>
          </div>

          {/* Payment Method Section */}
          <h3 className="text-xl font-semibold mb-4 mt-6  pt-4">
            Payment Method
          </h3>
          <div className="space-y-2 mb-4">
            <div className="flex items-center">
              <input type="radio" name="payment" id="cash" />
              <label htmlFor="cash" className="ml-2">
                Cash on Delivery
              </label>
            </div>
            <div className="flex items-center">
              <input type="radio" name="payment" id="paypal" />
              <label htmlFor="paypal" className="ml-2">
                Paypal
              </label>
            </div>
            <div className="flex items-center">
              <input type="radio" name="payment" id="amazon" />
              <label htmlFor="amazon" className="ml-2">
                Amazon Pay
              </label>
            </div>
          </div>

          {/* Place Order Button */}
          <button className="bg-green-500 text-white px-4 py-2 rounded-md w-full mt-4 hover:bg-green-600 transition duration-300">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

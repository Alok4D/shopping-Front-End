import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";


const OrderDetails = () => {
  const orderData = {
    orderId: "#4152",
    date: "April 24, 2021",
    productsCount: 3,
    billingAddress: {
      name: "Dainne Russell",
      street: "4840 Parker Rd. Allentown, New Mexico 31134",
      email: "dianne.ressell@gmail.com",
      phone: "(671) 555-0110",
    },
    shippingAddress: {
      name: "Dainne Russell",
      street: "4840 Parker Rd. Allentown, New Mexico 31134",
      email: "dianne.ressell@gmail.com",
      phone: "(671) 555-0110",
    },
    paymentMethod: "Paypal",
    subtotal: 365.0,
    discount: 20.0,
    shipping: "Free",
    total: 84.0,
    products: [
      {
        name: "Red Capsicum",
        price: 14.0,
        quantity: 5,
        subtotal: 70.0,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMFT__mSaXJA1VDapfRw50WaFEQimQ9T_DrA&s", // এখানে কোটেশন ছাড়া ভেরিয়েবল ব্যবহার করা হয়েছে
      },
      {
        name: "Green Capsicum",
        price: 14.0,
        quantity: 2,
        subtotal: 28.0,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMFT__mSaXJA1VDapfRw50WaFEQimQ9T_DrA&s",
      },
      {
        name: "Green Chilli",
        price: 26.7,
        quantity: 10,
        subtotal: 267.0,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMFT__mSaXJA1VDapfRw50WaFEQimQ9T_DrA&s",
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full">
      {/* হেডার */}
      <div className="flex flex-wrap justify-between items-center mb-6 pb-4">
        <div className="flex flex-col md:flex-row md:items-center">
          <h1 className="text-xl font-bold">Order Details</h1>
          <span className="text-sm text-gray-500 md:ml-4">
            • {orderData.date} • {orderData.productsCount} Products
          </span>
        </div>
        <Link
          to="/order-history"
          className="text-[#48BB78] hover:text-[#3B8E5F] font-semibold mt-4 md:mt-0"
        >
          Back to List
        </Link>
      </div>

      {/* ঠিকানা এবং পেমেন্ট সেকশন - সঠিক ডিজাইন অনুযায়ী */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 border border-gray-300 rounded-lg overflow-hidden">
          {/* বিলিং অ্যাড্রেস */}
          <div className="p-4 bg-white border-b md:border-b-0 md:border-r border-gray-300">
            <h3 className="font-semibold mb-2 text-sm text-gray-500">
              BILLING ADDRESS
            </h3>
            <div className="divider"></div>
            <p className="font-bold">{orderData.billingAddress.name}</p>
            <p className="text-sm text-gray-600">
              {orderData.billingAddress.street}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <span className="font-semibold text-gray-500">EMAIL</span> <br />
              {orderData.billingAddress.email}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              <span className="font-semibold text-gray-500">PHONE</span> <br />
              {orderData.billingAddress.phone}
            </p>
          </div>
          {/* শিপিং অ্যাড্রেস */}
          <div className="p-4 bg-white">
            <h3 className="font-semibold mb-2 text-sm text-gray-500">
              SHIPPING ADDRESS
            </h3>
            <div className="divider"></div>
            <p className="font-bold">{orderData.shippingAddress.name}</p>
            <p className="text-sm text-gray-600">
              {orderData.shippingAddress.street}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <span className="font-semibold text-gray-500">EMAIL</span> <br />
              {orderData.shippingAddress.email}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              <span className="font-semibold text-gray-500">PHONE</span> <br />
              {orderData.shippingAddress.phone}
            </p>
          </div>
        </div>

        {/* অর্ডার আইডি এবং পেমেন্ট */}
        <div className="p-4 border border-gray-300 rounded-lg">
          <div className="flex justify-between flex-wrap">
            <div className="flex flex-col w-1/2 pr-2">
              <h3 className="font-semibold text-sm text-gray-600">ORDER ID:</h3>
              <span className="text-sm font-semibold text-gray-800">
                {orderData.orderId}
              </span>
            </div>
            <div className="flex flex-col w-1/2 pl-2 border-l ">
              <h3 className="font-semibold text-xs  text-gray-600">
                PAYMENT METHOD:
              </h3>
              <span className="text-sm font-semibold text-gray-800">
                {orderData.paymentMethod}
              </span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="text-sm mt-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold">
                ${orderData.subtotal.toFixed(2)}
              </span>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between mt-1">
              <span>Discount</span>
              <span className="text-[#48BB78] font-semibold">-20%</span>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between mt-1">
              <span>Shipping</span>
              <span className="font-semibold">{orderData.shipping}</span>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between font-bold text-lg mt-2 pt-2  ">
              <span>Total</span>
              <span className="text-[#48BB78]">
                ${orderData.total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* অর্ডার ট্র্যাকার */}
      <div className="flex flex-col sm:flex-row justify-between items-center my-8 text-xs sm:text-base">
        <div className="flex flex-col items-center flex-1">
          <div className="w-8 h-8 rounded-full bg-[#48BB78] flex items-center justify-center text-white mb-2">
            <AiOutlineCheckCircle className="h-6 w-6" />
          </div>
          <span className="text-[#48BB78] font-bold text-center">
            Order received
          </span>
        </div>
        <div className="flex-1 h-1 bg-[#48BB78] mx-2 hidden sm:block"></div>
        <div className="flex flex-col items-center flex-1">
          <div className="w-8 h-8 rounded-full bg-[#48BB78] flex items-center justify-center text-white mb-2">
            <span className="font-bold">02</span>
          </div>
          <span className="text-[#48BB78] font-bold text-center">
            Processing
          </span>
        </div>
        <div className="flex-1 h-1 bg-gray-200 mx-2 hidden sm:block"></div>
        <div className="flex flex-col items-center flex-1">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 mb-2">
            <span className="font-bold">03</span>
          </div>
          <span className="text-gray-600 text-center">On the way</span>
        </div>
        <div className="flex-1 h-1 bg-gray-200 mx-2 hidden sm:block"></div>
        <div className="flex flex-col items-center flex-1">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 mb-2">
            <span className="font-bold">04</span>
          </div>
          <span className="text-gray-600 text-center">Delivered</span>
        </div>
      </div>

      {/* প্রোডাক্ট টেবিল */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left whitespace-nowrap">
          <thead>
            <tr>
              <th className="p-4 font-normal text-gray-500 text-sm">PRODUCT</th>
              <th className="p-4 font-normal text-gray-500 text-sm">PRICE</th>
              <th className="p-4 font-normal text-gray-500 text-sm">
                QUANTITY
              </th>
              <th className="p-4 font-normal text-gray-500 text-sm">
                SUBTOTAL
              </th>
            </tr>
          </thead>
          <tbody>
            {orderData.products.map((product, index) => (
              <tr key={index} className="border-t">
                <td className="p-4 text-sm font-semibold flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-8 h-8 mr-2"
                  />
                  {product.name}
                </td>
                <td className="p-4 text-sm">${product.price.toFixed(2)}</td>
                <td className="p-4 text-sm font-semibold">
                  x{product.quantity}
                </td>
                <td className="p-4 text-sm font-semibold">
                  ${product.subtotal.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetails;

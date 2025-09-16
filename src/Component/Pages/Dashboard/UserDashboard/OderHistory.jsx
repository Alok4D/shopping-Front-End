
import { Helmet } from "react-helmet-async";
import { AiOutlineEye, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const OrderHistory = () => {
  const orders = [
    {
      id: "#3933",
      date: "4 April, 2021",
      total: "$135.00 (5 Products)",
      status: "Processing",
    },
    {
      id: "#5045",
      date: "27 Mar, 2021",
      total: "$25.00 (1 Product)",
      status: "on the way",
    },
    {
      id: "#5028",
      date: "20 Mar, 2021",
      total: "$250.00 (4 Products)",
      status: "Completed",
    },
    {
      id: "#4600",
      date: "19 Mar, 2021",
      total: "$35.00 (1 Products)",
      status: "Completed",
    },
    {
      id: "#4152",
      date: "18 Mar, 2021",
      total: "$578.00 (13 Products)",
      status: "Completed",
    },
    {
      id: "#8811",
      date: "10 Mar, 2021",
      total: "$345.00 (7 Products)",
      status: "Completed",
    },
    {
      id: "#3538",
      date: "5 Mar, 2021",
      total: "$560.00 (2 Products)",
      status: "Completed",
    },
    {
      id: "#1374",
      date: "27 Feb, 2021",
      total: "$560.00 (2 Products)",
      status: "Completed",
    },
    {
      id: "#7791",
      date: "25 Feb, 2021",
      total: "$560.00 (2 Products)",
      status: "Completed",
    },
    {
      id: "#4846",
      date: "24 Feb, 2021",
      total: "$23.00 (1 Products)",
      status: "Completed",
    },
    {
      id: "#5948",
      date: "20 Feb, 2021",
      total: "$23.00 (1 Products)",
      status: "Completed",
    },
    {
      id: "#1577",
      date: "12 Oct, 2020",
      total: "$23.00 (1 Products)",
      status: "Completed",
    },
  ];

  return (
    <>
      <div className=" rounded-lg shadow p-6 w-full">
        <Helmet><title>Dashboard | Order-history</title></Helmet>
        <h2 className="text-xl font-bold mb-6">Order History</h2>

      
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left whitespace-nowrap">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-4 font-normal text-gray-500 text-sm">
                  ORDER ID
                </th>
                <th className="p-4 font-normal text-gray-500 text-sm">DATE</th>
                <th className="p-4 font-normal text-gray-500 text-sm">TOTAL</th>
                <th className="p-4 font-normal text-gray-500 text-sm">
                  STATUS
                </th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className=" ">
                  <td className="p-4 text-sm font-semibold">{order.id}</td>
                  <td className="p-4 text-sm">{order.date}</td>
                  <td className="p-4 text-sm font-semibold">{order.total}</td>
                  <td className="p-4 text-sm">{order.status}</td>
                  <td className="p-4">
                    <Link
                    to={'/order-details'}
                      href="#"
                      className="text-green-500 flex items-center gap-1 text-sm font-semibold"
                    >
                     <AiOutlineEye className="h-4 w-4 " /> View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* স্ট্যাটিক পেজিনেশন */}
        <div className="flex justify-center items-center mt-6">
          {/* Previous বাটন */}
          <button className="flex items-center justify-center w-8 h-8 mr-2 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition-colors">
            <AiOutlineLeft />
          </button>

          {/* পেজ বাটন */}
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#48BB78] text-white font-bold">
              1
            </span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer">
              2
            </span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer">
              3
            </span>
          </div>

          {/* Next বাটন */}
          <button className="flex items-center justify-center w-8 h-8 ml-2 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition-colors">
            <AiOutlineRight />
          </button>
        </div>
      </div>
     
    </>
  );
};

export default OrderHistory;

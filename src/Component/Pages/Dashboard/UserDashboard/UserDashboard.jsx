
import { AiOutlineEye } from "react-icons/ai";

import { Link } from "react-router-dom";
import userPhoto from '../../../../../src/assets/useDashboardphoto/useprofile/95607d5220df9c482a292e63c6344bd4cf872e28.jpg'

const UserDashboard = () => {
  const orders = [
    {
      id: "#738",
      date: "8 Sep, 2020",
      total: "$135.00 (5 Products)",
      status: "Processing",
    },
    {
      id: "#703",
      date: "24 May, 2020",
      total: "$25.00 (1 Product)",
      status: "on the way",
    },
    {
      id: "#f30",
      date: "22 Oct, 2020",
      total: "$250.00 (4 Products)",
      status: "Completed",
    },
    {
      id: "#561",
      date: "1 Feb, 2020",
      total: "$35.00 (1 Products)",
      status: "Processing",
    },
    {
      id: "#536",
      date: "31 Sep, 2020",
      total: "$578.00 (3 Products)",
      status: "Completed",
    },
    {
      id: "#492",
      date: "22 Oct, 2020",
      total: "$145.00 (7 Products)",
      status: "Completed",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-4">
        {/* প্রোফাইল এবং বিলিং এরিয়া */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* প্রোফাইল কার্ড */}
          <div className="  rounded-lg shadow p-6">
            <div className="  flex flex-col items-center text-center">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={userPhoto} alt="Profile" />
                </div>
              </div>
              <h3 className="text-xl font-medium mt-2">Dianne Russell</h3>
              <p className="text-sm text-gray-500 ">Customer</p>
              <a href="#" className="text-green-500  font-bold mt-2">
                Edit Profile
              </a>
            </div>
          </div>

          {/* বিলিং অ্যাড্রেস কার্ড */}
          <div className=" rounded-lg shadow p-6">
            <h3 className="text-sm text-gray-500 uppercase">Billing Address</h3>
            <h3 className="text-xl font-medium mt-2">Dianne Russell</h3>
            <p className="mt-2 text-xs text-gray-600">
              4840 Parker Rd. Allentown, New Mexico <br /> 3834
            </p>
            <p className="text-sm mt-1 ">dianne.russell@gmail.com</p>
            <p className="text-sm mt-1 mb-4 ">(671) 555-0110</p>
            <a href="#" className="text-green-500  font-bold ">
              Edit Address
            </a>
          </div>
        </div>

        {/* রিসেন্ট অর্ডার হিস্টোরি টেবিল */}
        <div className=" rounded-lg shadow p-6 mt-4">
          <div className="flex justify-between items-center mb-4 gap-1">
            <h3 className="text-base md:text-lg ">Recent Order History</h3>
            <Link to={"/order-history"} className="text-sm text-green-500  ">
              View All
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr className="">
                  <th className="text-left text-black text-xs md:text-base ">
                    ORDER ID
                  </th>
                  <th className="text-left text-black text-xs md:text-base ">
                    DATE
                  </th>
                  <th className="text-left text-black text-xs md:text-base ">
                    TOTAL
                  </th>
                  <th className="text-left text-black text-xs md:text-base ">
                    STATUS
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td className="text-xs md:text-base p-1 md:p-0">
                      {order.id}
                    </td>
                    <td className="text-xs md:text-base p-1 md:p-0">
                      {order.date}
                    </td>
                    <td className="text-xs md:text-base p-1 md:p-0">
                      {order.total}
                    </td>
                    <td className="text-xs md:text-base p-1 md:p-0">
                      {order.status}
                    </td>
                    <td>
                      <Link
                      to={"/order-details"}
                        href="#"
                        className="text-green-500  flex items-center text-xs md:text-sm p-1 gap-1  "
                      >
                        <AiOutlineEye className="h-4 w-4 " /> View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;

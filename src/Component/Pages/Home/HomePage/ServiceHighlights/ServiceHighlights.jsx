import { FaShippingFast, FaHeadset, FaLock, FaUndo } from "react-icons/fa";

const features = [
  {
    icon: <FaShippingFast className="text-3xl text-green-500" />,
    title: "Free Shipping",
    subtitle: "Free shipping with discount",
  },
  {
    icon: <FaHeadset className="text-3xl text-green-500" />,
    title: "Great Support 24/7",
    subtitle: "Instant access to Contact",
  },
  {
    icon: <FaLock className="text-3xl text-white" />,
    title: "100% Secure Payment",
    subtitle: "We ensure your money is safe",
    isHighlighted: true,
  },
  {
    icon: <FaUndo className="text-3xl text-green-500" />,
    title: "Money-Back Guarantee",
    subtitle: "30 days money-back",
  },
];

const ServiceHighlights = () => {
  return (
    <div className="container mx-auto py-12 px-4 lg:px-0 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center gap-3">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center ${
                feature.isHighlighted ? "bg-green-600" : "bg-green-100"
              }`}
            >
              {feature.icon}
            </div>
            <h4 className="text-md font-semibold">{feature.title}</h4>
            <p className="text-sm text-gray-500">{feature.subtitle}</p>
            {feature.isHighlighted && (
              <div className="mt-1 w-full h-1 bg-green-600 rounded-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceHighlights;

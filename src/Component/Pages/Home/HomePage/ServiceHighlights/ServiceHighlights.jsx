
import { FaShippingFast, FaHeadset, FaLock, FaUndo } from 'react-icons/fa';

const ServiceHighlights = () => {
  return (
    <div className="w-full pt-12 px-4 lg:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center container mx-auto border-b-[1px]">
        
        {/* Card 1 - Free Shipping */}
        <div className="flex flex-col items-center gap-3 group cursor-default">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-green-100 group-hover:bg-green-600 transition-colors duration-300">
            <FaShippingFast className="text-3xl text-green-500 group-hover:text-white transition-colors duration-300" />
          </div>
          <h4 className="text-md font-semibold">Free Shipping</h4>
          <p className="text-sm text-gray-500">Free shipping with discount</p>
          <div className="w-full h-1 rounded-full opacity-0 group-hover:opacity-100 bg-green-600 transition-all duration-300" />
        </div>

        {/* Card 2 - Great Support */}
        <div className="flex flex-col items-center gap-3 group cursor-default">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-green-100 group-hover:bg-green-600 transition-colors duration-300">
            <FaHeadset className="text-3xl text-green-500 group-hover:text-white transition-colors duration-300" />
          </div>
          <h4 className="text-md font-semibold">Great Support 24/7</h4>
          <p className="text-sm text-gray-500">Instant access to Contact</p>
          <div className="w-full h-1 rounded-full opacity-0 group-hover:opacity-100 bg-green-600 transition-all duration-300" />
        </div>

        {/* Card 3 - Secure Payment (Always Highlighted) */}
        <div className="flex flex-col items-center gap-3 group cursor-default">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-green-600 transition-colors duration-300">
            <FaLock className="text-3xl text-white" />
          </div>
          <h4 className="text-md font-semibold">100% Secure Payment</h4>
          <p className="text-sm text-gray-500">We ensure your money is safe</p>
          <div className="w-full h-1 rounded-full opacity-0 group-hover:opacity-100 bg-green-600 transition-all duration-300" />
          
        </div>

        {/* Card 4 - Money-Back Guarantee */}
        <div className="flex flex-col items-center gap-3 group cursor-default">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-green-100 group-hover:bg-green-600 transition-colors duration-300">
            <FaUndo className="text-3xl text-green-500 group-hover:text-white transition-colors duration-300" />
          </div>
          <h4 className="text-md font-semibold">Money-Back Guarantee</h4>
          <p className="text-sm text-gray-500">30 days money-back</p>
          <div className="w-full h-1 rounded-full opacity-0 group-hover:opacity-100 bg-green-600 transition-all duration-300" />
        </div>

      </div>
    </div>
  );
};

export default ServiceHighlights;
import { CiLocationOn } from "react-icons/ci";

const Header = () => {
  return (
    <div>
      <div className="container flex flex-col items-center justify-between px-6 py-2 mx-auto space-y-2 sm:flex-row sm:space-y-0">
        {/* Store Location */}
        <div className="flex items-center space-x-2 text-sm text-gray-700 sm:text-base">
          <CiLocationOn className="w-5 h-5 text-green-600" />
          <span>Store Location: Lincoln-344, Illinois, Chicago, USA</span>
        </div>

        {/* Language and Currency */}
        <div className="flex items-center space-x-4 text-sm text-gray-700 sm:text-base">
          <span>Eng</span>
          <span>|</span>
          <span>USD</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

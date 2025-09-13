import { FaRegCalendarAlt } from "react-icons/fa"; // For the date icon
import { Link } from "react-router-dom";

const BlogCard = ({ image, category, title, description, date, comments }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-green-500 text-white text-xs font-medium py-1 px-3 rounded-full">{category}</span>
          <div className="text-xs text-gray-500 flex items-center space-x-1">
            <FaRegCalendarAlt />
            <span>{date}</span>
          </div>
        </div>
        <h3 className="font-semibold text-xl mt-2">{title}</h3>
        <p className="text-sm text-gray-700 mt-2">{description}</p>
        <div className="text-xs text-gray-500 mt-4">
          <span>{comments} Comments</span>
        </div>
        <Link to="/singleBlog" className="text-green-500 text-sm mt-2 inline-block">Read More →</Link>
      </div>
    </div>
  );
};

export default BlogCard;

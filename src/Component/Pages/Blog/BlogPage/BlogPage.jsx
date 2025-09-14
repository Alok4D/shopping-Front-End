import BlogCard from "../BlogCard/BlogCard";
import FilterSidebar from "../FilterSidebar/FilterSidebar";
import blogImage1 from "../../../../../src/assets/blogsImage/Image (1).png";
import blogImage2 from "../../../../../src/assets/blogsImage/Image (2).png";
import blogImage3 from "../../../../../src/assets/blogsImage/Image (3).png";
import blogImage4 from "../../../../../src/assets/blogsImage/Image (4).png";
import blogImage5 from "../../../../../src/assets/blogsImage/Image (5).png";
import blogImage6 from "../../../../../src/assets/blogsImage/Image (6).png";
import blogImage7 from "../../../../../src/assets/blogsImage/Image (7).png";
import blogImage8 from "../../../../../src/assets/blogsImage/Image (8).png";

const BlogPage = () => {
  return (
    <div className="container mx-auto py-6">
    <div className="flex flex-col sm:flex-row justify-between items-center mb-4 px-4 sm:px-0">
  {/* Left Section: Sort By */}
  <div className="w-full sm:w-1/2 lg:w-1/4 mb-4 sm:mb-0">
    <div className="flex items-center space-x-2">
      <label htmlFor="sort" className="font-semibold text-sm whitespace-nowrap">
        Sort by:
      </label>
      <select
        id="sort"
        className="border border-gray-300 p-2 rounded-md text-sm w-full sm:w-auto"
      >
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="most_comments">Most Comments</option>
      </select>
    </div>
  </div>

  {/* Right Section: Results */}
  <div className="w-full sm:w-1/2 lg:w-1/6 text-center sm:text-right">
    <span className="text-[#00B207] font-semibold">52 Results Found</span>
  </div>
</div>


      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row">
        {/* Left Sidebar (Filter) */}
        <FilterSidebar />

        {/* Right Section (Blog Cards) */}
        <div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-6">
          <BlogCard
            image={blogImage1}
            category="Food"
            title="How to Make a Perfect Smoothie"
            description="Learn how to make a nutritious smoothie with fresh fruits and vegetables. Perfect for breakfast or a snack!"
            date="18 Nov"
            comments="12"
          />
          <BlogCard
            image={blogImage2}
            category="Food"
            title="Top 10 Healthy Snacks for Your Kids"
            description="Keep your kids healthy and happy with these quick and easy snack ideas. Packed with nutrients and flavor!"
            date="17 Nov"
            comments="34"
          />
          <BlogCard
            image={blogImage3}
            category="Health"
            title="The Importance of Hydration"
            description="Staying hydrated is key to maintaining overall health. Learn about the benefits of water and other hydrating beverages."
            date="16 Nov"
            comments="45"
          />
          <BlogCard
            image={blogImage4}
            category="Travel"
            title="Top 5 Travel Destinations for Food Lovers"
            description="Explore the best food destinations around the world. From street food to fine dining, these spots are a foodie's dream!"
            date="15 Nov"
            comments="60"
          />
          <BlogCard
            image={blogImage5}
            category="Lifestyle"
            title="Minimalist Living: How to Start"
            description="If you're looking to simplify your life and reduce clutter, here are some tips to help you get started with minimalist living."
            date="14 Nov"
            comments="23"
          />
          <BlogCard
            image={blogImage6}
            category="Tech"
            title="The Future of Artificial Intelligence"
            description="AI is rapidly changing the world. This blog post delves into how AI will impact various industries in the coming years."
            date="13 Nov"
            comments="88"
          />
          <BlogCard
            image={blogImage7}
            category="Fitness"
            title="5 Effective Exercises for a Strong Core"
            description="Strengthening your core is essential for better posture and overall fitness. These exercises are great for anyone!"
            date="12 Nov"
            comments="37"
          />
          <BlogCard
            image={blogImage8}
            category="Food"
            title="Vegan Recipes for Beginners"
            description="Are you new to veganism? Here are some simple and delicious vegan recipes that everyone will love!"
            date="11 Nov"
            comments="52"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

const stats = [
  { id: 1, value: "37+", label: "Years of Hard Work" },
  { id: 2, value: "500k+", label: "Happy Customers" },
  { id: 3, value: "28", label: "Qualified Team Members" },
  { id: 4, value: "750k+", label: "Monthly Orders" },
];

const Review = () => {
  return (
    <section className="bg-gradient-to-b from-[#0a150d] to-[#0f2416] py-16 px-6 md:px-20 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dots.png')]"></div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto">
        {stats.map((item) => (
          <div
            key={item.id}
            className="bg-[#1c2a20] rounded-xl py-10 px-6 text-center shadow-md border border-green-900/40 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-4xl md:text-5xl font-extrabold text-green-400 drop-shadow-lg">
              {item.value}
            </h3>
            <p className="text-base md:text-lg mt-3 text-gray-300 font-medium">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;

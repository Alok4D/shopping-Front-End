
const stats = [
  { id: 1, value: '37+', label: 'Years of Hard Work' },
  { id: 2, value: '500k+', label: 'Happy Customer' },
  { id: 3, value: '28', label: 'Qualified Team Member' },
  { id: 4, value: '750k+', label: 'Monthly Orders' },
];

const Review = () => {
  return (
    <section className="bg-[#0d1b10] py-12 px-4 md:px-16 text-white relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {stats.map((item) => (
          <div
            key={item.id}
            className="bg-[#1d201e] rounded-md py-8 px-6 text-center shadow-sm"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-green-500">
              {item.value}
            </h3>
            <p className="text-sm md:text-base mt-2 text-gray-300">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
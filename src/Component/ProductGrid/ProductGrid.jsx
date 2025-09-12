import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({ products }) {
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  // total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // current page slice
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentProducts = products.slice(start, end);

  if (!products.length) {
    return <div className="text-center text-gray-500">No products found</div>;
  }

  return (
    <div>
      {/* grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className={`px-3 py-1 rounded border ${
              currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-100"
            }`}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded border ${
                currentPage === i + 1 ? "bg-green-500 text-white" : "hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className={`px-3 py-1 rounded border ${
              currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-100"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

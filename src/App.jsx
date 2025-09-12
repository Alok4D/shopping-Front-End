import Sidebar from "./components/Sidebar";
import ProductGrid from "./components/ProductGrid";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex gap-6">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">Vegetables</h1>
          <select className="border rounded-lg px-3 py-2">
            <option>Latest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <ProductGrid />
      </div>
    </div>
  );
}

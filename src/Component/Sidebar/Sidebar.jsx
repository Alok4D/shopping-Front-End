import  { useState } from "react";
import { ChevronDown, ChevronUp, Star } from "lucide-react";


 
export default function Sidebar({ products, filters, setFilters }) {
  const [open, setOpen] = useState({
    categories: true,
    price: true,
    rating: true,
    tags: true,
    sale: true
  });

  const uniqueCategories = Array.from(new Set(products.map(p => p.category))).sort();
  const uniqueTags = Array.from(new Set(products.flatMap(p => p.tags || []))).slice(0, 12);
  const saleProducts = products.filter(p => p.oldPrice).slice(0, 3);

  const toggleSection = (k) => setOpen(prev => ({ ...prev, [k]: !prev[k] }));

  // category toggle
  const toggleCategory = (cat) => {
    const next = filters.categories.includes(cat) ? filters.categories.filter(c => c !== cat) : [...filters.categories, cat];
    setFilters(prev => ({ ...prev, categories: next }));
  };

  // tag toggle
  const toggleTag = (tag) => {
    const next = filters.tags.includes(tag) ? filters.tags.filter(t => t !== tag) : [...filters.tags, tag];
    setFilters(prev => ({ ...prev, tags: next }));
  };

  // rating toggle (checkbox)
  const toggleRating = (r) => {
    // if r already set, unset it (set to 0). else set.
    setFilters(prev => ({ ...prev, rating: prev.rating === r ? 0 : r }));
  };

  // price range change (only upper bound here like screenshot)
  const onPriceChange = (val) => {
    setFilters(prev => ({ ...prev, price: [prev.price[0], Number(val)] }));
  };

  return (
    <aside className="w-72 bg-white rounded-2xl p-4 space-y-6 shadow-sm">
      {/* Categories */}
      <div>
        <button className="w-full flex justify-between items-center mb-2 text-lg font-semibold" onClick={() => toggleSection("categories")}>
          All Categories {open.categories ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        {open.categories && (
          <ul className="space-y-2 text-gray-700">
            {uniqueCategories.map(cat => (
              <li key={cat} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  checked={filters.categories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="w-4 h-4"
                />
                <span className="text-sm">{cat} <span className="text-gray-400">({products.filter(p => p.category === cat).length})</span></span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Price */}
      <div>
        <button className="w-full flex justify-between items-center mb-2 text-lg font-semibold" onClick={() => toggleSection("price")}>
          Price {open.price ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {open.price && (
          <div>
            <input
              type="range"
              min="0"
              max="1500"
              value={filters.price[1]}
              onChange={(e) => onPriceChange(e.target.value)}
              className="w-full accent-green-500"
            />
            <div className="mt-2 text-sm text-gray-500">Price: ${filters.price[0]} – ${filters.price[1]}</div>
          </div>
        )}
      </div>

      {/* Rating */}
      <div>
        <button className="w-full flex justify-between items-center mb-2 text-lg font-semibold" onClick={() => toggleSection("rating")}>
          Rating {open.rating ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {open.rating && (
          <ul className="space-y-2">
            {[5,4,3,2,1].map(r => (
              <li key={r} className="flex items-center gap-2">
                <input type="checkbox" checked={filters.rating === r} onChange={() => toggleRating(r)} />
                <div className="flex items-center gap-1">
                  {Array.from({length:r}).map((_,i) => <Star key={i} size={14} className="text-yellow-400" />)}
                </div>
                <span className="text-sm text-gray-600">{r}.0 & up</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Tags */}
      <div>
        <button className="w-full flex justify-between items-center mb-2 text-lg font-semibold" onClick={() => toggleSection("tags")}>
          Popular Tag {open.tags ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {open.tags && (
          <div className="flex flex-wrap gap-2">
            {uniqueTags.map(tag => {
              const active = filters.tags.includes(tag);
              return (
                <button key={tag} onClick={() => toggleTag(tag)} className={`px-3 py-1 text-xs rounded-full ${active ? "bg-green-100 border border-green-300" : "bg-gray-100"}`}>
                  {tag}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Promo card */}
      <div className="p-4 bg-gradient-to-b from-white to-green-50 rounded-xl border">
        <div className="text-2xl font-bold text-green-600">79% Discount</div>
        <div className="text-sm text-gray-600 mb-3">on your first order</div>
        <img src="https://images.unsplash.com/photo-1543353071-087092ec393e?q=80&w=800&auto=format&fit=crop&crop=entropy" alt="promo" className="w-full h-28 object-cover rounded-md mb-3" />
        <button className="w-full bg-green-600 text-white py-2 rounded-lg">Shop Now</button>
      </div>

      {/* Sale Products */}
      <div>
        <button className="w-full flex justify-between items-center mb-3 text-lg font-semibold" onClick={() => toggleSection("sale")}>
          Sale Products {open.sale ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {open.sale && (
          <ul className="space-y-3">
            {saleProducts.map(sp => (
              <li key={sp.id} className="flex items-center gap-3 border rounded-lg p-2 hover:border-green-300">
                <img src={sp.image} alt={sp.name} className="w-12 h-12 object-contain rounded" />
                <div>
                  <div className="text-sm font-medium">{sp.name}</div>
                  <div className="text-xs text-gray-500">
                    <span className="text-green-600 font-semibold">${sp.price.toFixed(2)}</span>
                    {sp.oldPrice && <span className="line-through text-gray-400 ml-2">${sp.oldPrice.toFixed(2)}</span>}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}

import React from 'react';

export default function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
  maxPrice,
  setMaxPrice,
  categories
}) {
  return (
    <aside className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-fit space-y-6">
      <div className="flex items-center justify-between border-b pb-3">
        <h2 className="text-lg font-bold text-slate-900">Filters</h2>
        <button
          onClick={() => {
            setSelectedCategory('All');
            setMaxPrice(300);
          }}
          className="text-xs text-blue-600 hover:underline font-medium"
        >
          Reset All
        </button>
      </div>

      {/* Category Filter */}
      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
          Category
        </label>
        <div className="flex flex-wrap gap-2 md:flex-col">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-sm text-left transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white font-medium shadow-sm'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <div className="flex justify-between items-center text-sm font-semibold mb-2">
          <label htmlFor="price" className="text-xs text-slate-500 uppercase tracking-wider">
            Max Price
          </label>
          <span className="text-blue-600 font-bold">${maxPrice}</span>
        </div>
        <input
          id="price"
          type="range"
          min="50"
          max="300"
          step="10"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-blue-600 cursor-pointer"
        />
        <div className="flex justify-between text-xs text-slate-400 mt-1">
          <span>$50</span>
          <span>$300</span>
        </div>
      </div>
    </aside>
  );
}
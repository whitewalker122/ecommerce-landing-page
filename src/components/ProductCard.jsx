export default function FilterSidebar({ selectedCategory, setSelectedCategory, maxPrice, setMaxPrice }) {
  const categories = ['All', 'Electronics', 'Accessories'];

  return (
    <aside className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-fit space-y-6">
      <h2 className="text-lg font-bold border-b pb-2">Filters</h2>
      
      {/* Category Filter */}
      <div>
        <label className="block text-sm font-semibold mb-2">Category</label>
        <div className="flex flex-wrap gap-2 md:flex-col">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-sm text-left transition-colors ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white font-medium'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <div className="flex justify-between text-sm font-semibold mb-2">
          <label htmlFor="price">Max Price</label>
          <span className="text-blue-600">${maxPrice}</span>
        </div>
        <input
          id="price"
          type="range"
          min="50"
          max="300"
          step="10"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-blue-600"
        />
      </div>
    </aside>
  );
}
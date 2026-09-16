import React from 'react';
import Header from './components/Header';
import FilterSidebar from './components/FilterSidebar';
import ProductGrid from './components/ProductGrid';
import { PRODUCTS } from './data/products';
import { useLocalStorage } from './hooks/useLocalStorage';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useLocalStorage('ecommerce_category', 'All');
  const [maxPrice, setMaxPrice] = useLocalStorage('ecommerce_max_price', 300);

  const categories = ['All', ...new Set(PRODUCTS.map((p) => p.category))];

  const filteredProducts = PRODUCTS.filter(
    (product) =>
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      product.price <= maxPrice
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between font-sans">
      <div>
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <FilterSidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            categories={categories}
          />
          <ProductGrid products={filteredProducts} />
        </main>
      </div>

      <footer className="text-center py-6 text-xs text-slate-400 border-t border-slate-200">
        © {new Date().getFullYear()} E-Commerce Showcase. Built with React, Tailwind & Docker.
      </footer>
    </div>
  );
}
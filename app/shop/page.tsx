'use client';

import { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filter by price range
    if (priceRange !== 'all') {
      const ranges: { [key: string]: [number, number] } = {
        '0-5000': [0, 5000],
        '5000-15000': [5000, 15000],
        '15000-30000': [15000, 30000],
        '30000+': [30000, Infinity],
      };
      const [min, max] = ranges[priceRange];
      filtered = filtered.filter((p) => p.price >= min && p.price < max);
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Featured first
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">
          Shop at <span className="text-accent">Wali</span>TechHub
        </h1>
        <p className="text-gray-600 text-lg">
          Browse our complete collection of premium electronics and accessories
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-20">
            {/* Categories */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === 'All'
                      ? 'bg-primary text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  All Products ({products.length})
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === cat.name
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {cat.icon} {cat.name} ({cat.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Price Range</h3>
              <div className="space-y-2">
                {[
                  { value: 'all', label: 'All Prices' },
                  { value: '0-5000', label: 'Under Rs. 5,000' },
                  { value: '5000-15000', label: 'Rs. 5,000 - 15,000' },
                  { value: '15000-30000', label: 'Rs. 15,000 - 30,000' },
                  { value: '30000+', label: 'Over Rs. 30,000' },
                ].map((range) => (
                  <button
                    key={range.value}
                    onClick={() => setPriceRange(range.value)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      priceRange === range.value
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort By */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-field"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-grow">
          <div className="mb-6 flex justify-between items-center">
            <p className="text-gray-600">
              Showing {filteredProducts.length} products
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold mb-2">No products found</h3>
              <p className="text-gray-600">
                Try adjusting your filters to find what you're looking for
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

'use client';

import ProtectedRoute from '@/components/admin/ProtectedRoute';
import AdminNav from '@/components/admin/AdminNav';
import { useState } from 'react';
import { products as initialProducts } from '@/data/products';

export default function ProductsPage() {
  const [products] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', 'Mobiles', 'Headphones', 'Smart Watches', 'Chargers', 'Accessories'];

  return (
    <ProtectedRoute>
      <div className="flex">
        <AdminNav />
        
        <main className="flex-1 ml-64 bg-gray-50 min-h-screen">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 p-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold">Products Management</h1>
                <p className="text-gray-600 mt-1">Manage your product inventory</p>
              </div>
              <a href="/admin/products/edit" className="btn-accent">
                ➕ Add New Product
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Filters */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Search */}
                <div>
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input-field"
                  />
                </div>

                {/* Category Filter */}
                <div>
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="input-field"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Products Count */}
            <div className="mb-4">
              <p className="text-gray-600">
                Showing <span className="font-bold">{filteredProducts.length}</span> of <span className="font-bold">{products.length}</span> products
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                  {/* Product Image */}
                  <div className="relative h-48 bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    {product.discount && (
                      <div className="absolute top-2 right-2 bg-accent text-white px-2 py-1 rounded-full text-xs font-bold">
                        -{product.discount}%
                      </div>
                    )}
                    <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-bold ${
                      product.inStock ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                    }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <div className="text-xs text-gray-500 mb-1">{product.category}</div>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{product.name}</h3>
                    
                    {/* Price */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl font-bold text-primary">
                        Rs. {product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          Rs. {product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>{i < Math.floor(product.rating) ? '⭐' : '☆'}</span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({product.reviews})</span>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <a
                        href={`/admin/products/edit?id=${product.id}`}
                        className="flex-1 btn-primary text-sm py-2 text-center"
                      >
                        ✏️ Edit
                      </a>
                      <button
                        onClick={() => {
                          if (confirm('Are you sure you want to delete this product?')) {
                            alert('Product deleted! (Demo - changes not persisted)');
                          }
                        }}
                        className="flex-1 btn-secondary text-sm py-2"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}

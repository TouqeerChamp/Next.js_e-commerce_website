'use client';

import ProtectedRoute from '@/components/admin/ProtectedRoute';
import AdminNav from '@/components/admin/AdminNav';
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { products as initialProducts, Product } from '@/data/products';

function EditProductForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');
  
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    slug: '',
    category: 'Mobiles',
    price: 0,
    originalPrice: 0,
    discount: 0,
    rating: 4.5,
    reviews: 0,
    image: '',
    images: [],
    description: '',
    specifications: {},
    inStock: true,
    featured: false,
  });

  const [isNew, setIsNew] = useState(true);

  useEffect(() => {
    if (productId) {
      const product = initialProducts.find(p => p.id === parseInt(productId));
      if (product) {
        setFormData(product);
        setIsNew(false);
      }
    }
  }, [productId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would save to a database
    alert(`Product ${isNew ? 'added' : 'updated'} successfully! (This is a demo - changes are not persisted)`);
    router.push('/admin/products');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else if (type === 'number') {
      setFormData({
        ...formData,
        [name]: parseFloat(value) || 0,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex">
        <AdminNav />
        
        <main className="flex-1 ml-64 bg-gray-50 min-h-screen">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 p-6">
            <h1 className="text-3xl font-bold">
              {isNew ? 'Add New Product' : 'Edit Product'}
            </h1>
            <p className="text-gray-600 mt-1">
              {isNew ? 'Add a new product to your inventory' : 'Update product information'}
            </p>
          </div>

          {/* Form */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Product Name */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2">
                    Product Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="e.g., iPhone 15 Pro Max"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="Mobiles">Mobiles</option>
                    <option value="Headphones">Headphones</option>
                    <option value="Smart Watches">Smart Watches</option>
                    <option value="Chargers">Chargers</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                </div>

                {/* Price */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Price (PKR) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    min="0"
                    max="50000"
                    className="input-field"
                    placeholder="e.g., 42999"
                  />
                </div>

                {/* Original Price */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Original Price (PKR)
                  </label>
                  <input
                    type="number"
                    name="originalPrice"
                    value={formData.originalPrice}
                    onChange={handleChange}
                    min="0"
                    max="50000"
                    className="input-field"
                    placeholder="e.g., 46999"
                  />
                </div>

                {/* Discount */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Discount (%)
                  </label>
                  <input
                    type="number"
                    name="discount"
                    value={formData.discount}
                    onChange={handleChange}
                    min="0"
                    max="100"
                    className="input-field"
                    placeholder="e.g., 10"
                  />
                </div>

                {/* Image URL */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2">
                    Product Image URL <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="https://images.unsplash.com/..."
                  />
                  {formData.image && (
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="mt-2 w-32 h-32 object-cover rounded-lg"
                    />
                  )}
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Enter product description..."
                  />
                </div>

                {/* Stock Status */}
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="inStock"
                      checked={formData.inStock}
                      onChange={handleChange}
                      className="w-5 h-5"
                    />
                    <span className="font-semibold">In Stock</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleChange}
                      className="w-5 h-5"
                    />
                    <span className="font-semibold">Featured Product</span>
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
                <button type="submit" className="btn-primary">
                  {isNew ? '✅ Add Product' : '💾 Save Changes'}
                </button>
                <button
                  type="button"
                  onClick={() => router.push('/admin/products')}
                  className="btn-secondary"
                >
                  Cancel
                </button>
              </div>

              {/* Demo Notice */}
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> This is a demo version. Changes made here will not be persisted 
                  as the app uses static data. In a production environment, this would connect to a database.
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}

export default function EditProductPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <EditProductForm />
    </Suspense>
  );
}

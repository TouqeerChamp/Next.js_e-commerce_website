'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link href={`/product/${product.slug}`}>
      <div className="card group cursor-pointer h-full flex flex-col">
        {/* Image */}
        <div className="relative h-64 bg-gray-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {product.discount && (
            <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
              -{product.discount}%
            </div>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-bold text-lg">Out of Stock</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Category */}
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
            {product.category}
          </p>

          {/* Name */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-3">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-current'
                      : 'fill-gray-300'
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">
              ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mb-4 mt-auto">
            <span className="text-2xl font-bold text-primary">
              Rs. {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                Rs. {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="btn-primary w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </Link>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    slug: string;
    price: number;
    image: string;
    quantity: number;
  };
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      {/* Image */}
      <Link href={`/product/${item.slug}`} className="flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 object-cover rounded-lg hover:opacity-80 transition-opacity"
        />
      </Link>

      {/* Details */}
      <div className="flex-grow">
        <Link href={`/product/${item.slug}`}>
          <h3 className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors mb-1">
            {item.name}
          </h3>
        </Link>
        <p className="text-xl font-bold text-primary mb-3">Rs. {item.price.toLocaleString()}</p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
          </button>
          <span className="text-lg font-semibold w-8 text-center">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Remove Button & Subtotal */}
      <div className="flex flex-col items-end justify-between">
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 hover:text-red-700 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
        <div className="text-right">
          <p className="text-sm text-gray-500">Subtotal</p>
          <p className="text-xl font-bold text-primary">
            Rs. {(item.price * item.quantity).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

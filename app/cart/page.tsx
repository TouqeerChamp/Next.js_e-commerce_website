'use client';

import Link from 'next/link';
import CartItem from '@/components/CartItem';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cart, cartTotal, clearCart } = useCart();

  const shippingCost = cartTotal > 5000 ? 0 : 250;
  const tax = cartTotal * 0.08; // 8% tax
  const total = cartTotal + shippingCost + tax;

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-8xl mb-6">🛒</div>
          <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 text-lg mb-8">
            Start shopping at <span className="font-bold text-accent">Wali</span><span className="font-bold">TechHub</span> and discover amazing electronics!
          </p>
          <Link href="/shop" className="btn-primary inline-block">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart - <span className="text-accent">Wali</span>TechHub
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Clear Cart Button */}
          <button
            onClick={clearCart}
            className="mt-6 text-red-600 hover:text-red-800 font-semibold transition-colors"
          >
            Clear Cart
          </button>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-20">
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-accent">Wali</span>TechHub Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-semibold">Rs. {cartTotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="font-semibold">
                  {shippingCost === 0 ? (
                    <span className="text-green-600">FREE</span>
                  ) : (
                    `Rs. ${shippingCost.toLocaleString()}`
                  )}
                </span>
              </div>

              {cartTotal <= 5000 && shippingCost > 0 && (
                <p className="text-sm text-accent">
                  Add Rs. {(5000 - cartTotal).toLocaleString()} more for FREE shipping!
                </p>
              )}

              <div className="flex justify-between text-gray-600">
                <span>Tax (8%)</span>
                <span className="font-semibold">Rs. {Math.round(tax).toLocaleString()}</span>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-primary">Rs. {Math.round(total).toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <Link href="/checkout" className="btn-accent w-full mb-4 block text-center">
              Proceed to Checkout
            </Link>

            <Link
              href="/shop"
              className="btn-secondary w-full block text-center"
            >
              Continue Shopping
            </Link>

            {/* Features */}
            <div className="mt-6 pt-6 border-t space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Secure Checkout
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Fast Delivery (2-5 days)
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                30-Day Returns
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accepted Payment Methods */}
      <div className="mt-12 bg-white rounded-xl shadow-md p-8">
        <h3 className="text-lg font-semibold mb-4 text-center">
          We Accept
        </h3>
        <div className="flex justify-center items-center gap-6 flex-wrap">
          <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">JC</div>
          <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">EP</div>
          <div className="text-4xl">💳</div>
          <div className="text-gray-600 font-semibold">
            JazzCash • EasyPaisa • Mastercard • Visa
          </div>
        </div>
      </div>
    </div>
  );
}

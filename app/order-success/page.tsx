'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

interface OrderData {
  orderId: string;
  customerInfo: {
    fullName: string;
    mobile: string;
    email: string;
    address: string;
    city: string;
  };
  items: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
  }>;
  total: number;
  date: string;
}

export default function OrderSuccessPage() {
  const router = useRouter();
  const { clearCart } = useCart();
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  useEffect(() => {
    // Get order data from localStorage
    const lastOrderStr = localStorage.getItem('lastOrder');
    
    if (!lastOrderStr) {
      // No order found, redirect to home
      router.push('/');
      return;
    }

    const lastOrder: OrderData = JSON.parse(lastOrderStr);
    setOrderData(lastOrder);

    // Clear the cart
    clearCart();

    // Clear the order from localStorage after a short delay
    setTimeout(() => {
      localStorage.removeItem('lastOrder');
    }, 1000);
  }, [clearCart, router]);

  if (!orderData) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="animate-pulse">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-2 text-green-600">Order Placed Successfully!</h1>
          <p className="text-gray-600 text-lg">
            Thank you for shopping at <span className="font-bold text-accent">Wali</span><span className="font-bold">TechHub</span>! Your order has been confirmed.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6">
          {/* Order ID */}
          <div className="mb-6 pb-6 border-b">
            <h2 className="text-sm text-gray-600 mb-1">
              <span className="text-accent">Wali</span>TechHub Order ID
            </h2>
            <p className="text-2xl font-bold text-primary">{orderData.orderId}</p>
            <p className="text-sm text-gray-500 mt-1">
              {new Date(orderData.date).toLocaleString('en-US', {
                dateStyle: 'full',
                timeStyle: 'short',
              })}
            </p>
          </div>

          {/* Customer Information */}
          <div className="mb-6 pb-6 border-b">
            <h2 className="text-xl font-bold mb-4">Delivery Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Full Name</p>
                <p className="font-semibold">{orderData.customerInfo.fullName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Mobile</p>
                <p className="font-semibold">{orderData.customerInfo.mobile}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-semibold">{orderData.customerInfo.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">City</p>
                <p className="font-semibold">{orderData.customerInfo.city}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-600">Delivery Address</p>
                <p className="font-semibold">{orderData.customerInfo.address}</p>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Order Items</h2>
            <div className="space-y-3">
              {orderData.items.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-2">
                  <div className="flex-grow">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity} × Rs. {item.price.toLocaleString()}
                    </p>
                  </div>
                  <p className="font-bold text-primary">
                    Rs. {(item.quantity * item.price).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="border-t pt-4">
            <div className="flex justify-between text-2xl font-bold">
              <span>Total Paid</span>
              <span className="text-primary">Rs. {Math.round(orderData.total).toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-primary to-primary-light text-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold mb-3">
            <span className="text-accent">Wali</span>TechHub Will Contact You Soon!
          </h2>
          <p className="mb-4">
            Our team will reach out to you shortly to confirm your order and delivery details.
          </p>
          <div className="space-y-2 text-sm">
            <p><strong>Owner:</strong> Wali Rehman</p>
            <p>📧 <strong>Email:</strong> printbywali@gmail.com</p>
            <p>📞 <strong>Mobile:</strong> 0313-6447630</p>
            <p>📍 <strong>Store:</strong> Plot No B-701, Sector B, Near Momina Medical Center, Bhittai Colony Korangi Crossing, Karachi</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/shop" className="btn-accent flex-1 text-center">
            Continue Shopping
          </Link>
          <Link href="/" className="btn-secondary flex-1 text-center">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

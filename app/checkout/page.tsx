'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, cartTotal } = useCart();
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    address: '',
    city: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<'jazzcash' | 'easypaisa' | 'card'>('jazzcash');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Redirect if cart is empty
  useEffect(() => {
    if (cart.length === 0) {
      router.push('/cart');
    }
  }, [cart, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[0-9]{4}-[0-9]{7}$/.test(formData.mobile) && !/^[0-9]{11}$/.test(formData.mobile.replace(/-/g, ''))) {
      newErrors.mobile = 'Please enter a valid mobile number (e.g., 0313-6447630)';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Save order data to localStorage
      const orderData = {
        orderId: `WTH-${Date.now()}`,
        customerInfo: formData,
        items: cart,
        total: cartTotal + (cartTotal > 5000 ? 0 : 250) + cartTotal * 0.08,
        paymentMethod: paymentMethod,
        date: new Date().toISOString(),
        status: 'Pending',
      };
      localStorage.setItem('lastOrder', JSON.stringify(orderData));

      // Save to orders list for admin
      const orders = JSON.parse(localStorage.getItem('orders') || '[]');
      orders.push(orderData);
      localStorage.setItem('orders', JSON.stringify(orders));

      // Redirect to success page
      router.push('/order-success');
    }
  };

  const shippingCost = cartTotal > 5000 ? 0 : 250;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shippingCost + tax;

  if (cart.length === 0) {
    return null; // Will redirect
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">
        Checkout - <span className="text-accent">Wali</span>TechHub
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-accent">Wali</span>TechHub - Shipping Information
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`input-field ${errors.fullName ? 'border-red-500' : ''}`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <label htmlFor="mobile" className="block text-sm font-semibold mb-2">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`input-field ${errors.mobile ? 'border-red-500' : ''}`}
                  placeholder="0313-6447630"
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-semibold mb-2">
                  Delivery Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                  className={`input-field resize-none ${errors.address ? 'border-red-500' : ''}`}
                  placeholder="Enter your complete delivery address"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className="block text-sm font-semibold mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`input-field ${errors.city ? 'border-red-500' : ''}`}
                  placeholder="e.g., Karachi"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                )}
              </div>

              {/* Payment Method Selection */}
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Select Payment Method <span className="text-red-500">*</span>
                </label>
                <div className="space-y-3">
                  {/* JazzCash */}
                  <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    paymentMethod === 'jazzcash' ? 'border-primary bg-primary/5' : 'border-gray-300 hover:border-primary/50'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="jazzcash"
                      checked={paymentMethod === 'jazzcash'}
                      onChange={(e) => setPaymentMethod(e.target.value as any)}
                      className="mr-3 w-4 h-4"
                    />
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">
                        JC
                      </div>
                      <div>
                        <div className="font-semibold">JazzCash</div>
                        <div className="text-sm text-gray-600">Pay via JazzCash Mobile Account</div>
                      </div>
                    </div>
                  </label>

                  {/* EasyPaisa */}
                  <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    paymentMethod === 'easypaisa' ? 'border-primary bg-primary/5' : 'border-gray-300 hover:border-primary/50'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="easypaisa"
                      checked={paymentMethod === 'easypaisa'}
                      onChange={(e) => setPaymentMethod(e.target.value as any)}
                      className="mr-3 w-4 h-4"
                    />
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">
                        EP
                      </div>
                      <div>
                        <div className="font-semibold">EasyPaisa</div>
                        <div className="text-sm text-gray-600">Pay via EasyPaisa Mobile Account</div>
                      </div>
                    </div>
                  </label>

                  {/* Mastercard/Visa */}
                  <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    paymentMethod === 'card' ? 'border-primary bg-primary/5' : 'border-gray-300 hover:border-primary/50'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value as any)}
                      className="mr-3 w-4 h-4"
                    />
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                        💳
                      </div>
                      <div>
                        <div className="font-semibold">Credit/Debit Card</div>
                        <div className="text-sm text-gray-600">Mastercard, Visa, and other cards</div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn-accent w-full text-lg">
                Place Order - Pay with {paymentMethod === 'jazzcash' ? 'JazzCash' : paymentMethod === 'easypaisa' ? 'EasyPaisa' : 'Card'}
              </button>

              <Link href="/cart" className="btn-secondary w-full block text-center">
                Back to Cart
              </Link>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-20">
            <h2 className="text-2xl font-bold mb-6">
              Your <span className="text-accent">Wali</span>TechHub Order
            </h2>

            {/* Cart Items */}
            <div className="space-y-3 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-grow">
                    <h3 className="text-sm font-semibold line-clamp-1">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      Qty: {item.quantity} × Rs. {item.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-3">
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

              <div className="flex justify-between text-gray-600">
                <span>Tax (8%)</span>
                <span className="font-semibold">Rs. {Math.round(tax).toLocaleString()}</span>
              </div>

              <div className="border-t pt-3">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-primary">Rs. {Math.round(total).toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Security Badge */}
            <div className="mt-6 pt-6 border-t">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About WaliTechHub</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Smart Electronics & Accessories Store - Your trusted destination for quality tech products
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              WaliTechHub, founded by Wali Rehman, has become a trusted destination 
              for electronics and accessories in Karachi. We started with a simple 
              mission: to provide customers with authentic, high-quality tech products 
              at competitive prices.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Located at Bhittai Colony Korangi Crossing, Karachi, we serve our valued 
              customers with an extensive range of smartphones, headphones, smart watches, 
              chargers, and accessories from leading brands. Our commitment to quality, 
              authenticity, and customer satisfaction remains at the heart of everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Choose WaliTechHub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                ✓
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Authentic</h3>
              <p className="text-gray-600">
                All products are sourced directly from official manufacturers
                and authorized distributors. We guarantee authenticity.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                🛡️
              </div>
              <h3 className="text-xl font-semibold mb-3">Official Warranty</h3>
              <p className="text-gray-600">
                Every product comes with manufacturer warranty. Enjoy peace of
                mind with comprehensive coverage.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-primary-light text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                🚚
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                Free shipping on orders over Rs. 5,000. Get your products delivered
                within 2-5 business days.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-accent-light text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                💳
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
              <p className="text-gray-600">
                Shop with confidence using our encrypted payment system.
                Multiple payment options available.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                🔄
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Returns</h3>
              <p className="text-gray-600">
                Not satisfied? We offer hassle-free 30-day returns and exchanges
                on all products.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                💬
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Our dedicated customer support team is available round the clock
                to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    👤
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Owner</h4>
                    <p className="text-gray-600">Wali Rehman</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    📧
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-600">printbywali@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-light text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Mobile</h4>
                    <p className="text-gray-600">0313-6447630</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-light text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Shop Address</h4>
                    <p className="text-gray-600">Plot No B-701, Sector B</p>
                    <p className="text-gray-600">Near Momina Medical Center</p>
                    <p className="text-gray-600">Bhittai Colony Korangi Crossing</p>
                    <p className="text-gray-600">Karachi, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    🕐
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p className="text-gray-600">Monday - Saturday: 10AM - 8PM</p>
                    <p className="text-gray-600">Sunday: 11AM - 6PM</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors"
                  >
                    F
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors"
                  >
                    T
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors"
                  >
                    I
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors"
                  >
                    L
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card p-8">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

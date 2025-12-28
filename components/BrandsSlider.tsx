'use client';

import { useState, useEffect } from 'react';

const brands = [
  { name: 'Apple', logo: '🍎' },
  { name: 'Samsung', logo: '📱' },
  { name: 'Sony', logo: '🎧' },
  { name: 'Bose', logo: '🔊' },
  { name: 'Google', logo: '🔍' },
  { name: 'Garmin', logo: '⌚' },
  { name: 'Anker', logo: '🔌' },
  { name: 'Logitech', logo: '🖱️' },
];

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Khan',
    location: 'Karachi',
    rating: 5,
    text: 'Excellent service! Got my iPhone 15 Pro with amazing deal. Wali Rehman personally helped me choose the right product.',
  },
  {
    id: 2,
    name: 'Fatima Ali',
    location: 'Karachi',
    rating: 5,
    text: 'Best electronics store in Karachi! Fast delivery and genuine products. Highly recommend WaliTechHub!',
  },
  {
    id: 3,
    name: 'Hassan Raza',
    location: 'Karachi',
    rating: 5,
    text: 'Great prices and quality service. Bought AirPods Pro and they were delivered same day. Amazing!',
  },
  {
    id: 4,
    name: 'Ayesha Siddiqui',
    location: 'Karachi',
    rating: 5,
    text: 'Trusted seller with authentic products. The owner is very helpful and responsive on WhatsApp.',
  },
];

export default function BrandsSlider() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Brands Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-accent">Wali</span>TechHub - Authorized Dealer of Top Brands
          </h2>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 mx-8 text-center"
                >
                  <div className="text-6xl mb-2">{brand.logo}</div>
                  <p className="text-sm font-semibold text-gray-700">{brand.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our <span className="text-accent">Wali</span>TechHub Customers Say
          </h2>

          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12 min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  index === currentTestimonial
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 absolute inset-0 translate-x-full'
                }`}
              >
                {/* Rating Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                  ))}
                </div>

                {/* Quote Icon */}
                <div className="text-6xl text-accent text-center mb-4">"</div>

                {/* Testimonial Text */}
                <p className="text-xl text-gray-700 text-center mb-6 italic">
                  {testimonial.text}
                </p>

                {/* Customer Info */}
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600">📍 {testimonial.location}</p>
                </div>
              </div>
            ))}

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-accent w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

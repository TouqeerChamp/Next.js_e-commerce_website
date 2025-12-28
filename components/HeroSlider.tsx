'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    title: 'WaliTechHub',
    subtitle: 'Smart Electronics & Accessories Store',
    description: 'Premium Quality Electronics at Unbeatable Prices in Karachi',
    cta: 'Shop Now',
    ctaLink: '/shop',
    bgImage: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1920&q=80',
    bgGradient: 'from-blue-900/80 via-blue-800/80 to-blue-600/80',
  },
  {
    id: 2,
    title: 'Latest Smartphones',
    subtitle: 'iPhone 15 Pro Max, Samsung Galaxy S24 Ultra & More',
    description: 'Get the latest mobiles with official warranty and best prices',
    cta: 'View Mobiles',
    ctaLink: '/shop?category=Mobiles',
    bgImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1920&q=80',
    bgGradient: 'from-purple-900/80 via-purple-800/80 to-purple-600/80',
  },
  {
    id: 3,
    title: 'Premium Audio',
    subtitle: 'Sony, Bose, AirPods & JBL',
    description: 'Experience crystal clear sound with top-brand headphones',
    cta: 'Shop Headphones',
    ctaLink: '/shop?category=Headphones',
    bgImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1920&q=80',
    bgGradient: 'from-orange-900/80 via-orange-800/80 to-orange-600/80',
  },
  {
    id: 4,
    title: 'Smart Watches',
    subtitle: 'Apple Watch, Samsung Galaxy Watch & Garmin',
    description: 'Track your fitness and stay connected in style',
    cta: 'View Watches',
    ctaLink: '/shop?category=Smart Watches',
    bgImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1920&q=80',
    bgGradient: 'from-green-900/80 via-green-800/80 to-green-600/80',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 translate-x-0'
              : index < currentSlide
              ? 'opacity-0 -translate-x-full'
              : 'opacity-0 translate-x-full'
          }`}
        >
          <div 
            className="w-full h-full relative flex items-center"
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`}></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
                  {slide.id === 1 ? (
                    <>
                      <span className="text-accent">Wali</span>TechHub
                    </>
                  ) : (
                    slide.title
                  )}
                </h1>
                <p className="text-2xl md:text-3xl font-semibold mb-4 animate-fadeIn animation-delay-200">
                  {slide.subtitle}
                </p>
                <p className="text-lg md:text-xl mb-8 text-gray-200 animate-fadeIn animation-delay-400">
                  {slide.description}
                </p>
                <Link
                  href={slide.ctaLink}
                  className="btn-accent text-lg inline-block animate-fadeIn animation-delay-600"
                >
                  {slide.cta} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

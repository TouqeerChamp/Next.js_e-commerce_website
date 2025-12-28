'use client';

import { useState, useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/data/products';

interface ProductsSliderProps {
  products: Product[];
  title: string;
}

export default function ProductsSlider({ products, title }: ProductsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, products.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex, maxIndex]);

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold" dangerouslySetInnerHTML={{ __html: title.replace('WaliTechHub', '<span class="text-accent">Wali</span>TechHub') }}>
        </h2>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            aria-label="Previous products"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            aria-label="Next products"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Slider Container */}
      <div className="overflow-hidden" ref={sliderRef}>
        <div
          className="flex transition-transform duration-500 ease-out gap-6"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0"
              style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 24 / itemsPerView}px)` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary w-6'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

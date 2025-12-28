import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import HeroSlider from '@/components/HeroSlider';
import ProductsSlider from '@/components/ProductsSlider';
import BrandsSlider from '@/components/BrandsSlider';
import PromoSection from '@/components/PromoSection';
import { products, categories } from '@/data/products';

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.featured);
  const dealsProducts = products.filter((p) => p.discount && p.discount > 15);

  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Shop by Category at <span className="text-accent">Wali</span>TechHub
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/shop?category=${category.name}`}
                className="card p-8 text-center hover:bg-primary hover:text-white transition-all duration-300 group"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-200">
                  {category.count} products
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Slider */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ProductsSlider products={featuredProducts} title="Featured Products at WaliTechHub" />
        </div>
      </section>

      {/* Promotional Banner with Background */}
      <PromoSection />

      {/* Best Deals Slider */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ProductsSlider products={dealsProducts} title="Best Deals at WaliTechHub" />
        </div>
      </section>

      {/* Brands & Testimonials Slider */}
      <BrandsSlider />

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-accent">Wali</span>TechHub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 card">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                ✓
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                100% authentic products from official brands with manufacturer
                warranty.
              </p>
            </div>
            <div className="text-center p-8 card">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                🚚
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                Free shipping on orders over Rs. 5,000. Get your products within 2-5
                business days.
              </p>
            </div>
            <div className="text-center p-8 card">
              <div className="w-16 h-16 bg-accent-light text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                💬
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-gray-600">
                Contact us at 0313-6447630 or printbywali@gmail.com. We're here to help you!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

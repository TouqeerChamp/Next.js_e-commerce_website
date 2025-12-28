'use client';

export default function PromoSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent-light/90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          🔥 Special Deals at <span className="text-blue-900">Wali</span>TechHub!
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Save up to 30% on selected electronics. Premium quality products at unbeatable prices in Karachi!
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/shop" className="bg-white text-accent hover:bg-gray-100 font-semibold py-4 px-10 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl">
            Shop Deals Now
          </a>
          <a href="https://wa.me/923136447630" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-10 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl">
            📱 Contact on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

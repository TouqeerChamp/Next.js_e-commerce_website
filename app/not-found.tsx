import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-8xl mb-6">🔍</div>
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 text-lg mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/shop" className="btn-secondary">
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}

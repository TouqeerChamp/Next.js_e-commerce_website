'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAdmin } from '@/context/AdminContext';

export default function AdminNav() {
  const pathname = usePathname();
  const { admin, logout } = useAdmin();

  const navItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: '📊' },
    { name: 'Orders', href: '/admin/orders', icon: '📦' },
    { name: 'Products', href: '/admin/products', icon: '🛍️' },
    { name: 'Customers', href: '/admin/customers', icon: '👥' },
  ];

  return (
    <nav className="bg-primary-dark text-white h-screen w-64 fixed left-0 top-0 overflow-y-auto">
      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold">
          <span className="text-accent">Wali</span>TechHub
        </h1>
        <p className="text-sm text-gray-400 mt-1">Admin Panel</p>
      </div>

      {/* Admin Info */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">
            {admin?.name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold">{admin?.name}</p>
            <p className="text-xs text-gray-400">{admin?.email}</p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="py-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-6 py-3 transition-colors ${
              pathname === item.href
                ? 'bg-accent text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </div>

      {/* Logout Button */}
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700">
        <button
          onClick={logout}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <span>🚪</span>
          <span>Logout</span>
        </button>
        
        <Link
          href="/"
          className="block text-center mt-3 text-gray-400 hover:text-white text-sm transition-colors"
        >
          ← View Website
        </Link>
      </div>
    </nav>
  );
}

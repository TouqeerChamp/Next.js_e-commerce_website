'use client';

import ProtectedRoute from '@/components/admin/ProtectedRoute';
import AdminNav from '@/components/admin/AdminNav';
import { useEffect, useState } from 'react';

interface Stats {
  todayOrders: number;
  todayRevenue: number;
  pendingOrders: number;
  totalProducts: number;
  totalCustomers: number;
  monthlyRevenue: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    todayOrders: 0,
    todayRevenue: 0,
    pendingOrders: 0,
    totalProducts: 20,
    totalCustomers: 0,
    monthlyRevenue: 0,
  });

  useEffect(() => {
    // Load stats from localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const customers = JSON.parse(localStorage.getItem('customers') || '[]');
    
    const today = new Date().toDateString();
    const todayOrders = orders.filter((o: any) => 
      new Date(o.date).toDateString() === today
    );
    
    const pending = orders.filter((o: any) => o.status === 'Pending');
    
    const todayRev = todayOrders.reduce((sum: number, o: any) => sum + o.total, 0);
    const monthlyRev = orders.reduce((sum: number, o: any) => sum + o.total, 0);

    setStats({
      todayOrders: todayOrders.length,
      todayRevenue: todayRev,
      pendingOrders: pending.length,
      totalProducts: 20,
      totalCustomers: customers.length,
      monthlyRevenue: monthlyRev,
    });
  }, []);

  return (
    <ProtectedRoute>
      <div className="flex">
        <AdminNav />
        
        <main className="flex-1 ml-64 bg-gray-50 min-h-screen">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 p-6">
            <h1 className="text-3xl font-bold">
              <span className="text-accent">Wali</span>TechHub Dashboard
            </h1>
            <p className="text-gray-600 mt-1">Welcome back, Wali Rehman!</p>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Today's Orders */}
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Today's Orders</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stats.todayOrders}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📦</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3">Orders received today</p>
              </div>

              {/* Today's Revenue */}
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Today's Revenue</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">
                      Rs. {stats.todayRevenue.toLocaleString()}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3">Sales generated today</p>
              </div>

              {/* Pending Orders */}
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Pending Orders</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stats.pendingOrders}</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⏳</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3">Awaiting processing</p>
              </div>

              {/* Total Products */}
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Total Products</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalProducts}</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🛍️</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3">Available in inventory</p>
              </div>

              {/* Total Customers */}
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-pink-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Total Customers</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalCustomers}</p>
                  </div>
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3">Registered customers</p>
              </div>

              {/* Monthly Revenue */}
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-indigo-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Monthly Revenue</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">
                      Rs. {stats.monthlyRevenue.toLocaleString()}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3">Total sales this month</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <a href="/admin/orders" className="btn-primary text-center">
                  📦 View Orders
                </a>
                <a href="/admin/products" className="btn-accent text-center">
                  ➕ Add Product
                </a>
                <a href="/admin/customers" className="btn-secondary text-center">
                  👥 View Customers
                </a>
                <a href="/" className="btn-secondary text-center">
                  🌐 View Website
                </a>
              </div>
            </div>

            {/* Store Info */}
            <div className="bg-gradient-to-r from-primary to-primary-light rounded-xl shadow-md p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">Store Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-200">Store Name</p>
                  <p className="font-semibold">WaliTechHub</p>
                </div>
                <div>
                  <p className="text-sm text-gray-200">Owner</p>
                  <p className="font-semibold">Wali Rehman</p>
                </div>
                <div>
                  <p className="text-sm text-gray-200">Email</p>
                  <p className="font-semibold">printbywali@gmail.com</p>
                </div>
                <div>
                  <p className="text-sm text-gray-200">Phone</p>
                  <p className="font-semibold">0313-6447630</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-200">Address</p>
                  <p className="font-semibold">
                    Plot No B-701, Sector B, Near Momina Medical Center,
                    Bhittai Colony Korangi Crossing, Karachi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}

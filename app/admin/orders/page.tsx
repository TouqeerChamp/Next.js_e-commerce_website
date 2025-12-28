'use client';

import ProtectedRoute from '@/components/admin/ProtectedRoute';
import AdminNav from '@/components/admin/AdminNav';
import { useEffect, useState } from 'react';

interface Order {
  orderId: string;
  customerInfo: {
    fullName: string;
    mobile: string;
    email: string;
    address: string;
    city: string;
  };
  items: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
  }>;
  total: number;
  date: string;
  status: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  };

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    const updatedOrders = orders.map(order =>
      order.orderId === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  const deleteOrder = (orderId: string) => {
    if (confirm('Are you sure you want to delete this order?')) {
      const updatedOrders = orders.filter(order => order.orderId !== orderId);
      setOrders(updatedOrders);
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
    }
  };

  const filteredOrders = filter === 'All' 
    ? orders 
    : orders.filter(order => order.status === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Processing': return 'bg-blue-100 text-blue-800';
      case 'Shipped': return 'bg-purple-100 text-purple-800';
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex">
        <AdminNav />
        
        <main className="flex-1 ml-64 bg-gray-50 min-h-screen">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 p-6">
            <h1 className="text-3xl font-bold">Orders Management</h1>
            <p className="text-gray-600 mt-1">Manage and track all customer orders</p>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Filters */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="flex flex-wrap gap-2">
                {['All', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilter(status)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      filter === status
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Orders Count */}
            <div className="mb-4">
              <p className="text-gray-600">
                Showing <span className="font-bold">{filteredOrders.length}</span> orders
              </p>
            </div>

            {/* Orders List */}
            {filteredOrders.length > 0 ? (
              <div className="space-y-4">
                {filteredOrders.map((order) => (
                  <div key={order.orderId} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-6">
                      {/* Order Header */}
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-primary">{order.orderId}</h3>
                          <p className="text-sm text-gray-500">
                            {new Date(order.date).toLocaleString('en-PK')}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </div>

                      {/* Customer Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="text-xs text-gray-500 font-medium">Customer Name</p>
                          <p className="font-semibold">{order.customerInfo.fullName}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-medium">Mobile</p>
                          <p className="font-semibold">{order.customerInfo.mobile}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-medium">Email</p>
                          <p className="font-semibold">{order.customerInfo.email}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-medium">City</p>
                          <p className="font-semibold">{order.customerInfo.city}</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-xs text-gray-500 font-medium">Delivery Address</p>
                          <p className="font-semibold">{order.customerInfo.address}</p>
                        </div>
                      </div>

                      {/* Order Items */}
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Order Items:</p>
                        <div className="space-y-2">
                          {order.items.map((item) => (
                            <div key={item.id} className="flex justify-between text-sm">
                              <span className="text-gray-700">
                                {item.name} × {item.quantity}
                              </span>
                              <span className="font-semibold">
                                Rs. {(item.price * item.quantity).toLocaleString()}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Total */}
                      <div className="border-t pt-4 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold">Total Amount:</span>
                          <span className="text-2xl font-bold text-primary">
                            Rs. {order.total.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap gap-2">
                        <select
                          value={order.status}
                          onChange={(e) => updateOrderStatus(order.orderId, e.target.value)}
                          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Processing">Processing</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                        
                        <a
                          href={`https://wa.me/92${order.customerInfo.mobile.replace(/^0/, '')}?text=Hello ${order.customerInfo.fullName}, your order ${order.orderId} status: ${order.status}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                        >
                          📱 WhatsApp
                        </a>
                        
                        <button
                          onClick={() => deleteOrder(order.orderId)}
                          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                        >
                          🗑️ Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <div className="text-6xl mb-4">📦</div>
                <h3 className="text-xl font-bold mb-2">No Orders Found</h3>
                <p className="text-gray-600">
                  {filter === 'All' 
                    ? 'No orders have been placed yet.' 
                    : `No ${filter.toLowerCase()} orders found.`}
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}

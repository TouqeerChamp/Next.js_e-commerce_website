'use client';

import ProtectedRoute from '@/components/admin/ProtectedRoute';
import AdminNav from '@/components/admin/AdminNav';
import { useEffect, useState } from 'react';

interface Customer {
  fullName: string;
  mobile: string;
  email: string;
  city: string;
  address: string;
  totalOrders: number;
  totalSpent: number;
  lastOrder: string;
}

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = () => {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    
    // Group orders by customer email
    const customerMap = new Map<string, Customer>();
    
    orders.forEach((order: any) => {
      const email = order.customerInfo.email;
      
      if (customerMap.has(email)) {
        const existing = customerMap.get(email)!;
        existing.totalOrders += 1;
        existing.totalSpent += order.total;
        existing.lastOrder = order.date;
      } else {
        customerMap.set(email, {
          fullName: order.customerInfo.fullName,
          mobile: order.customerInfo.mobile,
          email: order.customerInfo.email,
          city: order.customerInfo.city,
          address: order.customerInfo.address,
          totalOrders: 1,
          totalSpent: order.total,
          lastOrder: order.date,
        });
      }
    });

    const customersList = Array.from(customerMap.values());
    setCustomers(customersList);
    
    // Save to localStorage for dashboard stats
    localStorage.setItem('customers', JSON.stringify(customersList));
  };

  const filteredCustomers = customers.filter(customer =>
    customer.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.mobile.includes(searchTerm)
  );

  return (
    <ProtectedRoute>
      <div className="flex">
        <AdminNav />
        
        <main className="flex-1 ml-64 bg-gray-50 min-h-screen">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 p-6">
            <h1 className="text-3xl font-bold">Customers Management</h1>
            <p className="text-gray-600 mt-1">View and manage customer information</p>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Search */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <input
                type="text"
                placeholder="Search by name, email, or mobile..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field"
              />
            </div>

            {/* Customers Count */}
            <div className="mb-4">
              <p className="text-gray-600">
                Showing <span className="font-bold">{filteredCustomers.length}</span> customers
              </p>
            </div>

            {/* Customers List */}
            {filteredCustomers.length > 0 ? (
              <div className="space-y-4">
                {filteredCustomers.map((customer, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {/* Customer Info */}
                      <div>
                        <p className="text-xs text-gray-500 font-medium mb-1">Customer Name</p>
                        <p className="font-bold text-lg">{customer.fullName}</p>
                        <p className="text-sm text-gray-600 mt-1">{customer.city}</p>
                      </div>

                      {/* Contact */}
                      <div>
                        <p className="text-xs text-gray-500 font-medium mb-1">Contact</p>
                        <p className="text-sm font-semibold">{customer.mobile}</p>
                        <p className="text-sm text-gray-600 mt-1">{customer.email}</p>
                      </div>

                      {/* Stats */}
                      <div>
                        <p className="text-xs text-gray-500 font-medium mb-1">Statistics</p>
                        <p className="text-sm">
                          <span className="font-semibold">{customer.totalOrders}</span> orders
                        </p>
                        <p className="text-sm">
                          Spent: <span className="font-semibold text-green-600">
                            Rs. {customer.totalSpent.toLocaleString()}
                          </span>
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col gap-2">
                        <p className="text-xs text-gray-500 font-medium mb-1">Actions</p>
                        <a
                          href={`https://wa.me/92${customer.mobile.replace(/^0/, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-sm py-2 text-center"
                        >
                          📱 WhatsApp
                        </a>
                        <a
                          href={`mailto:${customer.email}`}
                          className="btn-secondary text-sm py-2 text-center"
                        >
                          📧 Email
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-xs text-gray-500 font-medium mb-1">Delivery Address</p>
                      <p className="text-sm text-gray-700">{customer.address}</p>
                    </div>

                    {/* Last Order */}
                    <div className="mt-2">
                      <p className="text-xs text-gray-500">
                        Last order: {new Date(customer.lastOrder).toLocaleString('en-PK')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <div className="text-6xl mb-4">👥</div>
                <h3 className="text-xl font-bold mb-2">No Customers Found</h3>
                <p className="text-gray-600">
                  {searchTerm 
                    ? 'No customers match your search criteria.' 
                    : 'No customers have placed orders yet.'}
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}

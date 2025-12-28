'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface Admin {
  email: string;
  name: string;
}

interface AdminContextType {
  admin: Admin | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

// Default admin credentials (for demo - in production use database)
const ADMIN_CREDENTIALS = {
  email: 'printbywali@gmail.com',
  password: 'admin123',
  name: 'Wali Rehman'
};

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [admin, setAdmin] = useState<Admin | null>(null);

  // Load admin from localStorage on mount
  useEffect(() => {
    const savedAdmin = localStorage.getItem('admin');
    if (savedAdmin) {
      setAdmin(JSON.parse(savedAdmin));
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      const adminData = { email: ADMIN_CREDENTIALS.email, name: ADMIN_CREDENTIALS.name };
      setAdmin(adminData);
      localStorage.setItem('admin', JSON.stringify(adminData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setAdmin(null);
    localStorage.removeItem('admin');
  };

  return (
    <AdminContext.Provider
      value={{
        admin,
        login,
        logout,
        isAuthenticated: !!admin,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CartProvider } from '@/context/CartContext'
import { AdminProvider } from '@/context/AdminContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WaliTechHub - Smart Electronics & Accessories Store',
  description: 'Shop the latest electronics, mobiles, headphones, smart watches, and accessories at WaliTechHub',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AdminProvider>
          <CartProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </CartProvider>
        </AdminProvider>
      </body>
    </html>
  )
}

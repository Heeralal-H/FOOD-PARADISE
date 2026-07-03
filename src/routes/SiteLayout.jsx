import React from 'react';
import { Outlet } from 'react-router-dom';
import SiteHeader from '../ui/SiteHeader.jsx';
import SiteFooter from '../ui/SiteFooter.jsx';
import { CartProvider } from '../context/CartContext.jsx';
import { AuthProvider } from '../context/AuthContext.jsx';

export default function SiteLayout() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-slate-950">
          <SiteHeader />
          <main className="pt-20">
            <Outlet />
          </main>
          <SiteFooter />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}


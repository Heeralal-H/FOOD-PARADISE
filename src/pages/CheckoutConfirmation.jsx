import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function CheckoutConfirmation() {
  const location = useLocation();
  const state = location.state;

  const orderId = state?.orderId || '—';
  const total = typeof state?.total === 'number' ? state.total : 0;
  const payment = state?.payment || 'card';

  return (
    <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft">
        <div className="text-gold-300 text-sm font-semibold">Confirmation</div>
        <h1 className="mt-3 text-3xl font-semibold text-slate-50">Order placed</h1>
        <p className="mt-3 text-sm text-slate-300 leading-relaxed">
          Thank you for dining with Food Paradise. Your order is confirmed.
        </p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-950/20 p-5">
            <div className="text-xs font-semibold text-slate-200">Order ID</div>
            <div className="mt-2 text-sm font-semibold text-slate-50">{orderId}</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/20 p-5">
            <div className="text-xs font-semibold text-slate-200">Total</div>
            <div className="mt-2 text-sm font-semibold text-gold-300">₹{total.toFixed(2)}</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/20 p-5 sm:col-span-2">
            <div className="text-xs font-semibold text-slate-200">Payment method</div>
            <div className="mt-2 text-sm font-semibold text-slate-50">{payment.toUpperCase()}</div>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/menu"
            className="inline-flex flex-1 items-center justify-center rounded-xl bg-gold-500 px-5 py-4 text-sm font-semibold text-black shadow-glow hover:bg-gold-400 transition"
          >
            Order more
          </Link>
          <Link
            to="/reservation"
            className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-slate-200 hover:bg-white/10 transition"
          >
            Reserve a table
          </Link>
        </div>
      </div>
    </section>
  );
}


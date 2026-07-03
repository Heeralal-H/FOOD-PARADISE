import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16 text-center">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft">
        <div className="text-gold-300 text-sm font-semibold">404</div>
        <h1 className="mt-2 text-3xl font-semibold text-slate-50">Page not found</h1>
        <p className="mt-3 text-sm text-slate-300">The page you’re looking for doesn’t exist.</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-gold-500 px-5 py-3 text-sm font-semibold text-black shadow-glow hover:bg-gold-400 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}


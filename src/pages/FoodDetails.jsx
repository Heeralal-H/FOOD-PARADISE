import React, { useContext, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DISHES } from '../data/dishes.js';
import { CartContext } from '../context/CartContext.jsx';

export default function FoodDetails() {
  const { id } = useParams();
  const dish = useMemo(() => DISHES.find((d) => d.id === id), [id]);
  const { addToCart } = useContext(CartContext);

  if (!dish) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft">
          <div className="text-gold-300 text-sm font-semibold">Dish not found</div>
          <div className="mt-2 text-sm text-slate-300">Try browsing the menu.</div>
          <div className="mt-6">
            <Link
              to="/menu"
              className="inline-flex items-center justify-center rounded-xl bg-gold-500 px-5 py-3 text-sm font-semibold text-black shadow-glow hover:bg-gold-400 transition"
            >
              Back to Menu
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="grid gap-8 lg:grid-cols-2 lg:items-start"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 p-2 shadow-soft">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs text-slate-200">
              {dish.category}
            </div>
            <img
              src={dish.image}
              alt={dish.name}
              loading="lazy"
              className="h-[340px] w-full object-cover opacity-90"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-soft">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold text-slate-50">{dish.name}</h1>
              <div className="mt-2 flex items-center gap-3">
                <div className="text-gold-300 text-sm">★ {dish.rating.toFixed(1)}</div>
                <div className="text-xs text-slate-300">Luxury selection</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-gold-300 text-2xl font-semibold">₹{dish.price}</div>
              <div className="mt-1 text-xs text-slate-300">per serving</div>
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-slate-300">{dish.description}</p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-950/20 p-4">
              <div className="text-xs text-slate-300">Chef notes</div>
              <div className="mt-2 text-sm font-semibold text-slate-50">Balanced & refined</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/20 p-4">
              <div className="text-xs text-slate-300">Best with</div>
              <div className="mt-2 text-sm font-semibold text-slate-50">Gold iced tea</div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => addToCart(dish.id, 1)}
              className="inline-flex flex-1 items-center justify-center rounded-xl bg-gold-500 px-6 py-3 text-sm font-semibold text-black shadow-glow hover:bg-gold-400 transition"
            >
              Add to Cart
            </button>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10 transition"
            >
              Back to Menu
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}


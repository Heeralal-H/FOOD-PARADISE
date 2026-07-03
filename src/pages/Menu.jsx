import React, { useContext, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DISHES } from '../data/dishes.js';
import { CartContext } from '../context/CartContext.jsx';

function StarRating({ rating }) {
  const rounded = Math.round(rating * 10) / 10;
  return (
    <div className="flex items-center gap-2">
      <span className="text-gold-300">★</span>
      <span className="text-sm text-slate-300">{rounded.toFixed(1)}</span>
    </div>
  );
}

export default function Menu() {
  const { addToCart } = useContext(CartContext);

  const categories = useMemo(() => {
    const set = new Set(DISHES.map((d) => d.category));
    return ['All', ...Array.from(set).sort()];
  }, []);

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('featured');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = DISHES.slice();

    if (category !== 'All') {
      list = list.filter((d) => d.category === category);
    }

    if (q) {
      list = list.filter((d) => {
        const hay = `${d.name} ${d.description} ${d.category}`.toLowerCase();
        return hay.includes(q);
      });
    }

    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sort === 'rating-desc') list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [query, category, sort]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-soft">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-sm font-semibold tracking-wide text-gold-300">Menu</div>
            <h1 className="mt-2 text-3xl font-semibold text-slate-50 md:text-4xl">Curated dishes</h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
              Search, filter by category, and sort—then add your favorites to the cart.
            </p>
          </div>

          <div className="grid w-full gap-3 sm:grid-cols-2 lg:w-auto lg:flex lg:items-center lg:gap-3">
            <div className="sm:col-span-2 lg:col-span-auto">
              <label className="sr-only" htmlFor="menu-search">
                Search
              </label>
              <input
                id="menu-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none placeholder:text-slate-500"
                placeholder="Search dishes"
                type="search"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="menu-category">
                Category
              </label>
              <select
                id="menu-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none"
              >
                {categories.map((c) => (
                  <option key={c} value={c} className="bg-slate-950">
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="sr-only" htmlFor="menu-sort">
                Sorting
              </label>
              <select
                id="menu-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none"
              >
                <option value="featured" className="bg-slate-950">Featured</option>
                <option value="rating-desc" className="bg-slate-950">Top rated</option>
                <option value="price-asc" className="bg-slate-950">Price: Low to high</option>
                <option value="price-desc" className="bg-slate-950">Price: High to low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-7">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-between gap-4 border-t border-white/10 pt-6"
          >
            <div className="text-sm text-slate-300">
              Showing <span className="font-semibold text-slate-50">{filtered.length}</span> items
            </div>
            <Link
              to="/cart"
              className="text-sm font-semibold text-gold-300 hover:text-gold-200 transition"
            >
              Go to cart →
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((dish) => (
          <motion.article
            key={dish.id}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft"
          >
            <div className="relative">
              <div className="aspect-[4/3] w-full bg-white/5">
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-90 transition duration-500 hover:opacity-100"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs text-slate-200">
                {dish.category}
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-50">{dish.name}</h3>
                  <p className="mt-2 line-clamp-2 text-xs text-slate-300">{dish.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-gold-300">₹{dish.price}</div>
                  <StarRating rating={dish.rating} />
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Link
                  to={`/menu/${dish.id}`}
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-white/10 transition"
                >
                  Details
                </Link>
                <button
                  type="button"
                  onClick={() => addToCart(dish.id, 1)}
                  className="inline-flex items-center justify-center rounded-xl bg-gold-500 px-4 py-2 text-sm font-semibold text-black shadow-glow hover:bg-gold-400 transition"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
          <div className="text-gold-300 font-semibold">No results</div>
          <div className="mt-2 text-sm text-slate-300">Try a different search or category.</div>
        </div>
      )}
    </section>
  );
}


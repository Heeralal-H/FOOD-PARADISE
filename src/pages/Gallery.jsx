import React from 'react';
import { motion } from 'framer-motion';

const GALLERY = [
  { id: 'g1', label: 'Chef plating', image: '/src/assets/gallery/plating.jpg' },
  { id: 'g2', label: 'Gold ambience', image: '/src/assets/gallery/ambience.jpg' },
  { id: 'g3', label: 'Signature dessert', image: '/src/assets/gallery/dessert.jpg' },
  { id: 'g4', label: 'Saffron risotto', image: '/src/assets/gallery/risotto.jpg' },
  { id: 'g5', label: 'Restaurant seating', image: '/src/assets/gallery/seating.jpg' },
  { id: 'g6', label: 'Seasonal ingredients', image: '/src/assets/gallery/ingredients.jpg' }
];

export default function Gallery() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-soft">
        <div className="text-sm font-semibold tracking-wide text-gold-300">Gallery</div>
        <h1 className="mt-2 text-3xl font-semibold text-slate-50 md:text-4xl">A glimpse of luxury</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
          Premium ambiance, careful plating, and signature flavors — captured across the Food Paradise experience.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GALLERY.map((g, idx) => (
          <motion.figure
            key={g.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, delay: idx * 0.03 }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft"
          >
            <div className="relative">
              <div className="aspect-[4/3] w-full bg-white/5">
                <img
                  src={g.image}
                  alt={g.label}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:opacity-100"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs text-slate-200">
                {g.label}
              </div>
            </div>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}


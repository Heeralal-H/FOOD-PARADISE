import React from 'react';
import { motion } from 'framer-motion';
import { DISHES } from '../data/dishes.js';
import { Link } from 'react-router-dom';

function HeroCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft">
      <div className="absolute inset-0 bg-[radial-gradient(500px_circle_at_20%_0%,rgba(226,172,24,0.15),transparent_55%),radial-gradient(450px_circle_at_90%_30%,rgba(249,115,22,0.14),transparent_55%)]" />
      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200">
          <span className="h-2 w-2 rounded-full bg-gold-400 shadow-glow" />
          Premium ordering • Delivered fast
        </div>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl">
          Food Paradise
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          A luxury dining experience—discover signature flavors, customize your favorites, and check out with
          transparent totals.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            to="/menu"
            className="inline-flex items-center justify-center rounded-xl bg-gold-500 px-6 py-3 text-sm font-semibold text-black shadow-glow hover:bg-gold-400 transition"
          >
            Explore Menu
          </Link>
          <Link
            to="/reservation"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 shadow-soft hover:bg-white/10 transition"
          >
            Reserve a Table
          </Link>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            { k: '18%', v: 'GST included' },
            { k: '4.8★', v: 'Average rating' },
            { k: 'Gold', v: 'Luxury design' }
          ].map((x) => (
            <div key={x.k} className="rounded-2xl border border-white/10 bg-slate-950/20 p-4">
              <div className="text-gold-300 font-semibold">{x.k}</div>
              <div className="mt-1 text-xs text-slate-300">{x.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title, subtitle }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm font-semibold tracking-wide text-gold-300">{subtitle}</div>
      <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">{title}</h2>
    </div>
  );
}

function DishCard({ dish }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft"
    >
      <div className="relative">
        <div className="aspect-[4/3] w-full bg-white/5">
          <img
            src={dish.image}
            alt={dish.name}
            loading="lazy"
            className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:opacity-100"
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
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-slate-50">{dish.name}</div>
            <div className="mt-1 line-clamp-2 text-xs text-slate-300">{dish.description}</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-semibold text-gold-300">₹{dish.price}</div>
            <div className="mt-1 text-xs text-slate-300">★ {dish.rating.toFixed(1)}</div>
          </div>
        </div>

        <div className="mt-4">
          <Link
            to={`/menu/${dish.id}`}
            className="inline-flex w-full items-center justify-center rounded-xl bg-gold-500 px-4 py-2 text-sm font-semibold text-black shadow-glow hover:bg-gold-400 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const featured = DISHES.slice(0, 8);

  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="pt-10 md:pt-12">
        <HeroCard />
      </div>

      <section className="mt-12">
        <SectionHeader title="Featured dishes" subtitle="Handpicked" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft">
          <SectionHeader title="Restaurant story" subtitle="Our philosophy" />
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            Food Paradise blends elegant plating with honest ingredients. Every dish is crafted to feel refined,
            warm, and effortless—so ordering stays as delightful as dining.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              { title: 'Luxury taste', desc: 'Bold flavors balanced with finesse.' },
              { title: 'Fast checkout', desc: 'GST, delivery, and coupons—clear.' },
              { title: 'Careful sourcing', desc: 'Fresh ingredients, consistent quality.' },
              { title: 'Thoughtful service', desc: 'Support for reservations and updates.' }
            ].map((x) => (
              <div key={x.title} className="rounded-2xl border border-white/10 bg-slate-950/20 p-4">
                <div className="text-sm font-semibold text-slate-50">{x.title}</div>
                <div className="mt-1 text-xs text-slate-300">{x.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft">
          <SectionHeader title="Chef highlight" subtitle="Signature technique" />
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[1, 2].map((i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-slate-950/20 p-4">
                <div className="text-gold-300 text-sm font-semibold">Chef Amar</div>
                <div className="mt-1 text-xs text-slate-300">Modern European flavors with Middle Eastern warmth.</div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-xs text-slate-300">Today’s focus</div>
                  <div className="text-xs font-semibold text-slate-50">{i === 1 ? 'Saffron & truffle' : 'Rose harissa'}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/20 p-4">
            <div className="text-sm font-semibold text-slate-50">Best sellers</div>
            <div className="mt-3 space-y-3">
              {DISHES.slice(10, 14).map((d) => (
                <Link
                  key={d.id}
                  to={`/menu/${d.id}`}
                  className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
                >
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-slate-50">{d.name}</div>
                    <div className="text-xs text-slate-300">★ {d.rating.toFixed(1)} • {d.category}</div>
                  </div>
                  <div className="text-sm font-semibold text-gold-300">₹{d.price}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <SectionHeader title="Testimonials" subtitle="Loved by diners" />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { name: 'Aarav', quote: 'The menu feels premium and checkout is incredibly smooth.' },
            { name: 'Meera', quote: 'Best seller recommendations are spot on. Delivery was quick.' },
            { name: 'Kunal', quote: 'Luxury UI, clear totals, and the food details are exactly what I needed.' }
          ].map((t) => (
            <div key={t.name} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
              <div className="text-gold-300 text-sm font-semibold">{t.name}</div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader title="Newsletter" subtitle="Stay in the loop" />
            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              Get limited offers and new chef drops—sent occasionally. No noise.
            </p>
          </div>
          <form
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              className="w-full rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none placeholder:text-slate-500"
              placeholder="Email address"
              type="email"
              required
            />
            <button
              type="submit"
              className="rounded-xl bg-gold-500 px-5 py-3 text-sm font-semibold text-black shadow-glow hover:bg-gold-400 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section className="mt-12" id="contact">
        <SectionHeader title="Contact section" subtitle="Questions? We’re ready" />
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <div className="text-sm font-semibold text-slate-50">Call us</div>
              <div className="mt-2 text-sm text-slate-300">+1 (555) 019-8888</div>
              <div className="mt-5 text-sm font-semibold text-slate-50">Email</div>
              <div className="mt-2 text-sm text-slate-300">hello@foodparadise.example</div>
              <div className="mt-5 text-sm font-semibold text-slate-50">Hours</div>
              <div className="mt-2 space-y-1 text-sm text-slate-300">
                <div>Mon–Thu: 12:00–22:30</div>
                <div>Fri–Sat: 12:00–23:30</div>
                <div>Sun: 12:00–21:30</div>
              </div>
            </div>

            <form
              className="grid gap-3"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                className="rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none"
                placeholder="Full name"
                required
              />
              <input
                className="rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none"
                placeholder="Email"
                type="email"
                required
              />
              <textarea
                className="min-h-28 rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none"
                placeholder="Message"
                required
              />
              <button
                type="submit"
                className="rounded-xl bg-gold-500 px-5 py-3 text-sm font-semibold text-black shadow-glow hover:bg-gold-400 transition"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}


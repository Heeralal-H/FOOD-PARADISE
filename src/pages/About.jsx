import React from 'react';

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft">
        <div className="text-gold-300 text-sm font-semibold">About</div>
        <h1 className="mt-3 text-3xl font-semibold text-slate-50 md:text-4xl">Premium dining, beautifully organized</h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300">
          Food Paradise is built around the idea that ordering should feel as premium as the meal.
          Explore a curated menu, view full dish details, and check out with clear GST and delivery pricing.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { title: 'Elegant UX', desc: 'Luxury typography, spacing, and intentional motion.' },
            { title: 'Transparent totals', desc: 'GST, delivery, and coupons are always visible.' },
            { title: 'Fast experience', desc: 'Lazy loading with clean route-level code splitting.' }
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-white/10 bg-slate-950/20 p-6">
              <div className="text-slate-50 font-semibold">{c.title}</div>
              <div className="mt-2 text-sm text-slate-300">{c.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/20 p-6">
          <div className="text-sm font-semibold text-slate-50">Our promise</div>
          <div className="mt-2 text-sm leading-relaxed text-slate-300">
            Every page, component, and interaction is designed to reduce friction—so you can focus on the flavors.
          </div>
        </div>
      </div>
    </section>
  );
}


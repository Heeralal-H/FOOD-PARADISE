import React from 'react';

const FAQS = [
  {
    q: 'How do I apply a coupon?',
    a: 'Go to Cart and enter WELCOME10 or PARADISE15. Totals update instantly.'
  },
  {
    q: 'Is GST included in the final price?',
    a: 'Yes. GST is calculated at checkout and shown in the order summary.'
  },
  {
    q: 'How is delivery charge determined?',
    a: 'Delivery is charged when your discounted subtotal is greater than 0, and becomes free on empty cart.'
  },
  {
    q: 'Do you support reservations?',
    a: 'Reservation form includes validation and confirms instantly in this demo experience.'
  },
  {
    q: 'Are payment methods real?',
    a: 'Payment selection is UI-only for this demo. Confirmation is instant after validation.'
  }
];

export default function FAQ() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-soft">
        <div className="text-sm font-semibold tracking-wide text-gold-300">FAQ</div>
        <h1 className="mt-2 text-3xl font-semibold text-slate-50 md:text-4xl">Answers, clearly</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
          Everything you need to know about ordering, totals, and reservations.
        </p>

        <div className="mt-8 grid gap-4">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="rounded-3xl border border-white/10 bg-slate-950/20 p-5"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-slate-50">
                <span className="text-gold-300 mr-2">+</span>
                {item.q}
              </summary>
              <div className="mt-3 text-sm text-slate-300 leading-relaxed">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}


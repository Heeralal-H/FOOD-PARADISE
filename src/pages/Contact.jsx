import React from 'react';

function SocialLink({ label }) {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10 hover:text-gold-300 transition"
    >
      {label}
    </a>
  );
}

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-soft">
        <div className="text-sm font-semibold tracking-wide text-gold-300">Contact</div>
        <h1 className="mt-2 text-3xl font-semibold text-slate-50 md:text-4xl">We’ll respond quickly</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
          Ask about menu suggestions, delivery details, reservations, or catering. Our team is ready.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <form
            className="rounded-3xl border border-white/10 bg-slate-950/20 p-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Message sent. We will contact you soon.');
            }}
          >
            <div className="text-sm font-semibold text-slate-50">Send a message</div>
            <div className="mt-4 grid gap-4">
              <label className="grid gap-2">
                <span className="text-xs font-semibold text-slate-200">Full name</span>
                <input
                  className="w-full rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none"
                  required
                  placeholder="Full name"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-semibold text-slate-200">Email</span>
                <input
                  className="w-full rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none"
                  type="email"
                  required
                  placeholder="Email"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-semibold text-slate-200">Topic</span>
                <select className="w-full rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none">
                  <option className="bg-slate-950">Delivery</option>
                  <option className="bg-slate-950">Reservation</option>
                  <option className="bg-slate-950">Menu question</option>
                  <option className="bg-slate-950">Catering</option>
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-semibold text-slate-200">Message</span>
                <textarea
                  className="min-h-28 rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none"
                  required
                  placeholder="Write your message"
                />
              </label>

              <button
                type="submit"
                className="rounded-xl bg-gold-500 px-5 py-4 text-sm font-semibold text-black shadow-glow hover:bg-gold-400 transition"
              >
                Send message
              </button>
            </div>
          </form>

          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-slate-950/20 p-6">
              <div className="text-sm font-semibold text-slate-50">Working hours</div>
              <div className="mt-4 space-y-2 text-sm text-slate-300">
                <div>Mon–Thu: 12:00–22:30</div>
                <div>Fri–Sat: 12:00–23:30</div>
                <div>Sun: 12:00–21:30</div>
              </div>
              <div className="mt-5 text-sm font-semibold text-slate-50">Location</div>
              <div className="mt-2 text-sm text-slate-300">12 Gold Avenue, Suite 7, City Center</div>
              <div className="mt-2 text-sm text-slate-300">+1 (555) 019-8888</div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/20 p-6">
              <div className="text-sm font-semibold text-slate-50">Social</div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <SocialLink label="Instagram" />
                <SocialLink label="Facebook" />
                <SocialLink label="Twitter" />
                <SocialLink label="YouTube" />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/20 p-0 overflow-hidden">
              <div className="px-6 py-5">
                <div className="text-sm font-semibold text-slate-50">Map</div>
                <div className="mt-1 text-xs text-slate-400">Open in Google Maps for details</div>
              </div>
              <div className="h-64 w-full">
                <iframe
                  title="Food Paradise map"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=New%20York%20City&output=embed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


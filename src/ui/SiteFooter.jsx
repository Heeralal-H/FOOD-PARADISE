import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-gold-400/25 bg-white/5 shadow-glow">
              <span className="text-gold-300 font-semibold">FP</span>
            </div>
            <div>
              <div className="text-sm text-gold-300">Food Paradise</div>
              <div className="text-xs text-slate-300">Luxury dining ordering</div>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">
            Crafted for effortless ordering: premium menu, transparent totals, and a smooth checkout experience.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-100">Explore</div>
          <ul className="mt-3 grid gap-2 text-sm text-slate-300">
            <li><a className="hover:text-gold-300 transition" href="/menu">Menu</a></li>
            <li><a className="hover:text-gold-300 transition" href="/reservation">Reservation</a></li>
            <li><a className="hover:text-gold-300 transition" href="/gallery">Gallery</a></li>
            <li><a className="hover:text-gold-300 transition" href="/faq">FAQ</a></li>
            <li><a className="hover:text-gold-300 transition" href="/contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-100">Follow</div>
          <div className="mt-3 flex items-center gap-3">
            {[{ I: FaInstagram, href: '#' }, { I: FaFacebookF, href: '#' }, { I: FaTwitter, href: '#' }].map(({ I, href }, idx) => (
              <a
                key={idx}
                href={href}
                aria-label="Social link"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-200 hover:text-gold-300 hover:bg-white/10 transition"
              >
                <I />
              </a>
            ))}
          </div>

          <div className="mt-5 text-xs text-slate-400">
            © {year} Food Paradise. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}


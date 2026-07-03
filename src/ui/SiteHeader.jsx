import React, { useContext, useMemo, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingBag, FaUserCircle } from 'react-icons/fa';
import { CartContext } from '../context/CartContext.jsx';
import { AuthContext } from '../context/AuthContext.jsx';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/reservation', label: 'Reservation' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
  { to: '/faq', label: 'FAQ' }
];

export default function SiteHeader() {
  const { cartCount } = useContext(CartContext);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const activeClass = useMemo(
    () =>
      'text-gold-300 underline decoration-gold-300 underline-offset-4 decoration-2',
    []
  );

  function onNavigate() {
    setMobileOpen(false);
  }

  function onLogout() {
    logout();
    setMobileOpen(false);
    navigate('/');
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-3 rounded-2xl border border-white/10 bg-slate-950/55 backdrop-blur-md shadow-soft">
          <div className="flex items-center justify-between px-4 py-3">
            <NavLink
              to="/"
              onClick={onNavigate}
              className="flex items-center gap-3"
              aria-label="Food Paradise Home"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-gold-400/25 bg-white/5 shadow-glow">
                <span className="text-gold-300 font-semibold">FP</span>
              </div>
              <div className="leading-tight">
                <div className="text-sm text-gold-300">Food Paradise</div>
                <div className="text-xs text-slate-300">Premium dining ordering</div>
              </div>
            </NavLink>

            <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? activeClass : 'text-slate-200 hover:text-gold-300 transition-colors'
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <NavLink
                to="/cart"
                className="relative inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-200 hover:bg-white/10 transition"
              >
                <FaShoppingBag />
                <span className="text-sm">Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-2 rounded-full bg-gold-500 px-2 py-1 text-[11px] font-semibold text-black shadow-glow">
                    {cartCount}
                  </span>
                )}
              </NavLink>

              <NavLink
                to={isAuthenticated ? '/profile' : '/login'}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-200 hover:bg-white/10 transition"
              >
                <FaUserCircle />
                <span className="text-sm">{isAuthenticated ? 'Profile' : 'Login'}</span>
              </NavLink>

              {isAuthenticated && (
                <button
                  type="button"
                  onClick={onLogout}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10 transition"
                >
                  Logout
                </button>
              )}
            </div>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 hover:bg-white/10 transition"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="sr-only">Menu</span>
              <div className="h-5 w-6 relative">
                <span className="absolute left-0 right-0 top-1 h-[2px] bg-slate-200" style={{ transform: mobileOpen ? 'rotate(45deg) translateY(2px)' : 'none' }} />
                <span className="absolute left-0 right-0 top-3 h-[2px] bg-slate-200" style={{ opacity: mobileOpen ? 0 : 1 }} />
                <span className="absolute left-0 right-0 top-5 h-[2px] bg-slate-200" style={{ transform: mobileOpen ? 'rotate(-45deg) translateY(-2px)' : 'none' }} />
              </div>
            </button>
          </div>

          {mobileOpen && (
            <div className="border-t border-white/10 px-4 py-3 md:hidden">
              <div className="grid gap-3">
                {NAV.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={onNavigate}
                    className={({ isActive }) =>
                      'rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition ' +
                      (isActive ? 'text-gold-300' : 'text-slate-200 hover:bg-white/10')
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                <NavLink
                  to="/cart"
                  onClick={onNavigate}
                  className="relative rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 hover:bg-white/10 transition"
                >
                  Cart ({cartCount})
                </NavLink>

                <NavLink
                  to={isAuthenticated ? '/profile' : '/login'}
                  onClick={onNavigate}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 hover:bg-white/10 transition"
                >
                  {isAuthenticated ? 'Profile' : 'Login'}
                </NavLink>

                {isAuthenticated && (
                  <button
                    type="button"
                    onClick={onLogout}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 hover:bg-white/10 transition"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}


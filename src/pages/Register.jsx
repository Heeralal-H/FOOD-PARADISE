import React, { useContext, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';

export default function Register() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '', confirmPassword: '' });
  const [touched, setTouched] = useState(false);

  const errors = useMemo(() => {
    if (!touched) return {};
    const e = {};
    if (!/.+@.+\..+/.test(form.email)) e.email = 'Enter a valid email';
    if (form.password.trim().length < 6) e.password = 'Password must be at least 6 characters';
    if (form.confirmPassword !== form.password) e.confirmPassword = 'Passwords do not match';
    return e;
  }, [form, touched]);

  const isValid = Object.keys(errors).length === 0 && form.email.trim().length > 0;

  function onSubmit(e) {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;

    login({
      email: form.email.trim(),
      createdAt: new Date().toISOString()
    });

    navigate('/profile');
  }

  return (
    <section className="mx-auto max-w-md px-4 py-12 md:py-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-soft">
        <div className="text-sm font-semibold tracking-wide text-gold-300">Register</div>
        <h1 className="mt-2 text-2xl font-semibold text-slate-50">Create your account</h1>
        <p className="mt-2 text-sm text-slate-300">Sign in anytime to view your profile.</p>

        <form className="mt-7 grid gap-4" onSubmit={onSubmit}>
          <label className="grid gap-2">
            <span className="text-xs font-semibold text-slate-200">Email</span>
            <input
              className="w-full rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none"
              type="email"
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              onBlur={() => setTouched(true)}
              placeholder="Email"
            />
            {errors.email ? <span className="text-xs text-rose-300">{errors.email}</span> : null}
          </label>

          <label className="grid gap-2">
            <span className="text-xs font-semibold text-slate-200">Password</span>
            <input
              className="w-full rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none"
              type="password"
              value={form.password}
              onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
              onBlur={() => setTouched(true)}
              placeholder="Password"
            />
            {errors.password ? <span className="text-xs text-rose-300">{errors.password}</span> : null}
          </label>

          <label className="grid gap-2">
            <span className="text-xs font-semibold text-slate-200">Confirm password</span>
            <input
              className="w-full rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none"
              type="password"
              value={form.confirmPassword}
              onChange={(e) => setForm((p) => ({ ...p, confirmPassword: e.target.value }))}
              onBlur={() => setTouched(true)}
              placeholder="Confirm password"
            />
            {errors.confirmPassword ? <span className="text-xs text-rose-300">{errors.confirmPassword}</span> : null}
          </label>

          <button
            type="submit"
            disabled={!isValid}
            className="rounded-xl bg-gold-500 px-5 py-4 text-sm font-semibold text-black shadow-glow hover:bg-gold-400 transition disabled:opacity-50"
          >
            Create account
          </button>
        </form>

        <div className="mt-6 text-sm text-slate-300">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-gold-300 hover:text-gold-200 transition">
            Log in
          </Link>
        </div>
      </div>
    </section>
  );
}


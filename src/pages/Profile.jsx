import React, { useContext, useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';

export default function Profile() {
  const { user, isAuthenticated } = useContext(AuthContext);

  const details = useMemo(() => {
    if (!user?.email) return null;
    const email = user.email;
    const created = user.createdAt ? new Date(user.createdAt) : null;
    return { email, created };
  }, [user]);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-10 md:py-14">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-soft">
        <div className="text-sm font-semibold tracking-wide text-gold-300">Profile</div>
        <h1 className="mt-2 text-3xl font-semibold text-slate-50">Welcome</h1>

        <div className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-slate-950/20 p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-slate-200">Email</div>
              <div className="mt-1 text-sm font-semibold text-slate-50">{details?.email}</div>
            </div>
            <div className="text-gold-300 text-sm font-semibold">Verified</div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-slate-200">Member since</div>
              <div className="mt-1 text-sm font-semibold text-slate-50">
                {details?.created ? details.created.toLocaleDateString() : '—'}
              </div>
            </div>
            <div className="text-slate-300 text-sm">Food Paradise</div>
          </div>
        </div>

        <div className="mt-6 text-sm text-slate-300 leading-relaxed">
          This demo stores authentication data locally. Your cart persists via local storage.
        </div>
      </div>
    </section>
  );
}


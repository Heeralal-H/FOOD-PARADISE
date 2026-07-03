import React, { useMemo, useState } from 'react';

function Field({ label, children, error }) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold text-slate-200">{label}</span>
      {children}
      {error ? <span className="text-xs text-rose-300">{error}</span> : null}
    </label>
  );
}

export default function Reservation() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '19:30',
    guests: '2',
    notes: ''
  });
  const [touched, setTouched] = useState(false);

  const errors = useMemo(() => {
    if (!touched) return {};
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!/.+@.+\..+/.test(form.email)) e.email = 'Enter a valid email';
    if (!/^\d{10}$/.test(form.phone)) e.phone = 'Enter 10-digit phone';
    if (!form.date) e.date = 'Pick a date';
    const g = Number(form.guests);
    if (!Number.isFinite(g) || g < 1 || g > 12) e.guests = '1 to 12 guests';
    if (!form.time) e.time = 'Choose a time';
    return e;
  }, [form, touched]);

  const isValid = Object.keys(errors).length === 0;

  function onChange(name, value) {
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-soft">
        <div className="text-sm font-semibold tracking-wide text-gold-300">Reservation</div>
        <h1 className="mt-2 text-3xl font-semibold text-slate-50">Book your table</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
          A refined booking flow with validation—your table is confirmed instantly in this demo experience.
        </p>

        <form
          className="mt-7 grid gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            setTouched(true);
            if (!isValid) return;
            alert(`Reservation confirmed for ${form.name}`);
            setForm({ name: '', email: '', phone: '', date: '', time: '19:30', guests: '2', notes: '' });
            setTouched(false);
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" error={errors.name}>
              <input
                className="w-full rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none"
                value={form.name}
                onChange={(e) => onChange('name', e.target.value)}
                onBlur={() => setTouched(true)}
                placeholder="Full name"
              />
            </Field>

            <Field label="Email" error={errors.email}>
              <input
                className="w-full rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none"
                value={form.email}
                onChange={(e) => onChange('email', e.target.value)}
                onBlur={() => setTouched(true)}
                placeholder="Email"
                type="email"
              />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Phone" error={errors.phone}>
              <input
                className="w-full rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none"
                value={form.phone}
                onChange={(e) => onChange('phone', e.target.value)}
                onBlur={() => setTouched(true)}
                placeholder="10-digit phone"
                inputMode="numeric"
              />
            </Field>

            <Field label="Guests" error={errors.guests}>
              <select
                className="w-full rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none"
                value={form.guests}
                onChange={(e) => onChange('guests', e.target.value)}
                onBlur={() => setTouched(true)}
              >
                {Array.from({ length: 12 }).map((_, idx) => {
                  const v = idx + 1;
                  return (
                    <option key={v} value={v} className="bg-slate-950">
                      {v} {v === 1 ? 'guest' : 'guests'}
                    </option>
                  );
                })}
              </select>
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Date" error={errors.date}>
              <input
                type="date"
                className="w-full rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none"
                value={form.date}
                onChange={(e) => onChange('date', e.target.value)}
                onBlur={() => setTouched(true)}
              />
            </Field>

            <Field label="Time" error={errors.time}>
              <select
                className="w-full rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none"
                value={form.time}
                onChange={(e) => onChange('time', e.target.value)}
                onBlur={() => setTouched(true)}
              >
                {['17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'].map((t) => (
                  <option key={t} value={t} className="bg-slate-950">
                    {t}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <label className="grid gap-2">
            <span className="text-xs font-semibold text-slate-200">Notes (optional)</span>
            <textarea
              className="min-h-24 rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none"
              value={form.notes}
              onChange={(e) => onChange('notes', e.target.value)}
              placeholder="Allergies, seating preferences..."
            />
          </label>

          <button
            type="submit"
            className="rounded-xl bg-gold-500 px-5 py-4 text-sm font-semibold text-black shadow-glow hover:bg-gold-400 transition disabled:opacity-50"
          >
            Confirm reservation
          </button>
        </form>
      </div>
    </section>
  );
}


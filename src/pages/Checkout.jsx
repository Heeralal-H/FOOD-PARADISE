import React, { useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';
import { AuthContext } from '../context/AuthContext.jsx';

const PAYMENT_METHODS = [
  { id: 'card', label: 'Card' },
  { id: 'upi', label: 'UPI' },
  { id: 'cod', label: 'Cash on Delivery' }
];

function Field({ label, children, error }) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold text-slate-200">{label}</span>
      {children}
      {error ? <span className="text-xs text-rose-300">{error}</span> : null}
    </label>
  );
}

export default function Checkout() {
  const { items, grandTotal, gst, delivery, subtotal, couponDiscount, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [payment, setPayment] = useState('card');
  const [form, setForm] = useState({
    fullName: user?.email ? user.email.split('@')[0] : '',
    email: user?.email || '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: ''
  });

  const [touched, setTouched] = useState(false);

  const errors = useMemo(() => {
    if (!touched) return {};
    const e = {};

    const emailOk = /.+@.+\..+/.test(form.email);
    if (!form.fullName.trim()) e.fullName = 'Required';
    if (!emailOk) e.email = 'Enter a valid email';
    if (!/^\d{10}$/.test(form.phone)) e.phone = 'Enter a 10-digit phone number';
    if (!form.addressLine1.trim()) e.addressLine1 = 'Required';
    if (!form.city.trim()) e.city = 'Required';
    if (!form.state.trim()) e.state = 'Required';
    if (!/^\d{6}$/.test(form.postalCode)) e.postalCode = 'Enter a 6-digit postal code';

    return e;
  }, [form, touched]);

  const isValid = Object.keys(errors).length === 0 && items.length > 0;

  function onChange(name, value) {
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function placeOrder() {
    if (!isValid) {
      setTouched(true);
      return;
    }

    clearCart();
    navigate('/checkout/confirmation', {
      state: {
        orderId: `FP-${Math.random().toString(16).slice(2, 8).toUpperCase()}`,
        total: grandTotal,
        payment
      }
    });
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
        <div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-soft">
            <div className="text-sm font-semibold tracking-wide text-gold-300">Checkout</div>
            <h1 className="mt-2 text-3xl font-semibold text-slate-50">Customer details</h1>

            <form
              className="mt-7 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                placeOrder();
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" error={errors.fullName}>
                  <input
                    className="w-full rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none"
                    value={form.fullName}
                    onChange={(e) => onChange('fullName', e.target.value)}
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

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Address line 1" error={errors.addressLine1}>
                  <input
                    className="w-full rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none"
                    value={form.addressLine1}
                    onChange={(e) => onChange('addressLine1', e.target.value)}
                    onBlur={() => setTouched(true)}
                    placeholder="House / Street"
                  />
                </Field>

                <Field label="Address line 2">
                  <input
                    className="w-full rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none"
                    value={form.addressLine2}
                    onChange={(e) => onChange('addressLine2', e.target.value)}
                    placeholder="Landmark (optional)"
                  />
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="City" error={errors.city}>
                  <input
                    className="w-full rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none"
                    value={form.city}
                    onChange={(e) => onChange('city', e.target.value)}
                    onBlur={() => setTouched(true)}
                    placeholder="City"
                  />
                </Field>

                <Field label="State" error={errors.state}>
                  <input
                    className="w-full rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none"
                    value={form.state}
                    onChange={(e) => onChange('state', e.target.value)}
                    onBlur={() => setTouched(true)}
                    placeholder="State"
                  />
                </Field>
              </div>

              <Field label="Postal code" error={errors.postalCode}>
                <input
                  className="w-full rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none"
                  value={form.postalCode}
                  onChange={(e) => onChange('postalCode', e.target.value)}
                  onBlur={() => setTouched(true)}
                  placeholder="6-digit code"
                  inputMode="numeric"
                />
              </Field>

              <div className="mt-2 rounded-2xl border border-white/10 bg-slate-950/20 p-5">
                <div className="text-sm font-semibold text-slate-50">Payment methods</div>
                <div className="mt-3 grid gap-3">
                  {PAYMENT_METHODS.map((m) => (
                    <label
                      key={m.id}
                      className={
                        'flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3 ' +
                        (payment === m.id ? 'border-gold-400/30 bg-gold-500/10' : 'border-white/10 bg-white/5')
                      }
                    >
                      <span className="text-sm font-semibold text-slate-200">{m.label}</span>
                      <input
                        type="radio"
                        name="payment"
                        value={m.id}
                        checked={payment === m.id}
                        onChange={() => setPayment(m.id)}
                        className="h-4 w-4"
                      />
                    </label>
                  ))}
                </div>
                <div className="mt-3 text-xs text-slate-400">UI-only payment selection. Order confirmation is instant.</div>
              </div>

              <button
                type="submit"
                disabled={!items.length}
                className="mt-2 rounded-xl bg-gold-500 px-5 py-4 text-sm font-semibold text-black shadow-glow hover:bg-gold-400 transition disabled:opacity-50"
              >
                Place order • ₹{grandTotal.toFixed(2)}
              </button>
            </form>
          </div>
        </div>

        <aside className="lg:sticky lg:top-24">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-soft">
            <div className="text-sm font-semibold tracking-wide text-gold-300">Order summary</div>

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between text-slate-300">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-50">₹{subtotal.toFixed(2)}</span>
              </div>
              {couponDiscount > 0 && (
                <div className="flex items-center justify-between text-slate-300">
                  <span>Coupon</span>
                  <span className="font-semibold text-gold-300">-₹{couponDiscount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex items-center justify-between text-slate-300">
                <span>GST</span>
                <span className="font-semibold text-slate-50">₹{gst.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Delivery</span>
                <span className="font-semibold text-slate-50">₹{delivery.toFixed(2)}</span>
              </div>

              <div className="h-px bg-white/10" />
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Grand Total</span>
                <span className="text-gold-300 text-2xl font-semibold">₹{grandTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}




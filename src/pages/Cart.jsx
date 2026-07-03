import React, { useContext, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';

export default function Cart() {
  const {
    items,
    coupon,
    setCoupon,
    cartCount,
    subtotal,
    couponDiscount,
    gst,
    delivery,
    grandTotal,
    removeFromCart,
    updateQty,
    clearCart
  } = useContext(CartContext);

  const navigate = useNavigate();
  const [couponInput, setCouponInput] = useState(coupon || '');

  const isEmpty = items.length === 0;

  const shippingLabel = delivery > 0 ? 'Delivery' : 'Delivery (free)';

  const orderSummary = useMemo(() => {
    return {
      subtotal,
      discount: couponDiscount,
      gst,
      delivery,
      total: grandTotal
    };
  }, [subtotal, couponDiscount, gst, delivery, grandTotal]);

  function applyCoupon(e) {
    e.preventDefault();
    setCoupon(couponInput);
  }


  function proceedToCheckout() {
    if (cartCount <= 0) return;
    navigate('/checkout');
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
        <div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-soft">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold tracking-wide text-gold-300">Shopping Cart</div>
                <h1 className="mt-2 text-3xl font-semibold text-slate-50">Your selections</h1>
              </div>
              {!isEmpty && (
                <button
                  type="button"
                  onClick={() => {
                    clearCart();
                  }}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-white/10 transition"
                >
                  Clear
                </button>
              )}
            </div>

            {isEmpty ? (
              <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/20 p-10 text-center">
                <div className="text-gold-300 font-semibold">Cart is empty</div>
                <p className="mt-2 text-sm text-slate-300">Add premium dishes from the menu to get started.</p>
                <div className="mt-6">
                  <Link
                    to="/menu"
                    className="inline-flex items-center justify-center rounded-xl bg-gold-500 px-5 py-3 text-sm font-semibold text-black shadow-glow hover:bg-gold-400 transition"
                  >
                    Browse Menu
                  </Link>
                </div>
              </div>
            ) : (
              <div className="mt-7 space-y-4">
                {items.map((it) => (
                  <div key={it.id} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-950/20 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-20 w-20 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                        <img
                          src={it.image}
                          alt={it.name}
                          loading="lazy"
                          className="h-full w-full object-cover opacity-90"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-50">{it.name}</div>
                        <div className="mt-1 text-xs text-slate-300">{it.category}</div>
                        <div className="mt-2 text-xs font-semibold text-gold-300">₹{it.price}</div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQty(it.id, it.qty - 1)}
                          aria-label={`Decrease quantity for ${it.name}`}
                          className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 transition"
                        >
                          −
                        </button>
                        <input
                          className="w-14 rounded-xl border border-white/10 bg-slate-950/30 px-3 py-2 text-center text-sm text-slate-50 outline-none"
                          value={it.qty}
                          inputMode="numeric"
                          onChange={(e) => updateQty(it.id, e.target.value)}
                          aria-label={`Quantity for ${it.name}`}
                        />
                        <button
                          type="button"
                          onClick={() => updateQty(it.id, it.qty + 1)}
                          aria-label={`Increase quantity for ${it.name}`}
                          className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 transition"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right">
                        <div className="text-sm font-semibold text-slate-50">₹{it.price * it.qty}</div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(it.id)}
                          className="mt-2 text-xs font-semibold text-slate-300 hover:text-gold-300 transition"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <aside>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-soft sticky top-24">
            <div className="text-sm font-semibold tracking-wide text-gold-300">Order Summary</div>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between text-slate-300">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-50">₹{orderSummary.subtotal.toFixed(2)}</span>
              </div>

              {orderSummary.discount > 0 && (
                <div className="flex items-center justify-between text-slate-300">
                  <span>Coupon discount</span>
                  <span className="font-semibold text-gold-300">-₹{orderSummary.discount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex items-center justify-between text-slate-300">
                <span>GST (18%)</span>
                <span className="font-semibold text-slate-50">₹{orderSummary.gst.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between text-slate-300">
                <span>{shippingLabel}</span>
                <span className="font-semibold text-slate-50">₹{orderSummary.delivery.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-5 h-px bg-white/10" />

            <div className="mt-5 flex items-center justify-between">
              <div className="text-sm text-slate-300">Grand Total</div>
              <div className="text-gold-300 text-2xl font-semibold">₹{orderSummary.total.toFixed(2)}</div>
            </div>

            <form className="mt-5 grid gap-3" onSubmit={applyCoupon}>
              <label className="text-xs text-slate-300" htmlFor="coupon">Coupon</label>
              <div className="flex items-center gap-3">
                <input
                  id="coupon"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  className="flex-1 rounded-xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-slate-50 outline-none"
                  placeholder="WELCOME10 or PARADISE15"
                  aria-label="Coupon code"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-gold-500 px-4 py-3 text-sm font-semibold text-black shadow-glow hover:bg-gold-400 transition"
                >
                  Apply
                </button>
              </div>
            </form>

            <button
              type="button"
              onClick={proceedToCheckout}
              disabled={isEmpty}
              className="mt-6 w-full rounded-xl bg-gold-500 px-5 py-4 text-sm font-semibold text-black shadow-glow hover:bg-gold-400 transition disabled:opacity-50 disabled:hover:bg-gold-500"
            >
              Proceed to Checkout
            </button>

            <div className="mt-4 text-xs text-slate-400">
              Totals include GST and delivery charge calculation. Coupon discount applies to the subtotal.
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}


import React, { createContext, useEffect, useMemo, useState } from 'react';
import { DISHES } from '../data/dishes.js';

export const CartContext = createContext(null);

const STORAGE_KEY = 'food_paradise_cart_v1';

function safeParse(json) {
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}

function buildCartItem(dish, qty) {
  return {
    id: dish.id,
    name: dish.name,
    price: dish.price,
    category: dish.category,
    rating: dish.rating,
    image: dish.image,
    qty
  };
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [coupon, setCoupon] = useState('');

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    const parsed = safeParse(raw);
    if (!parsed || !Array.isArray(parsed.items)) return;

    const normalized = parsed.items
      .map((entry) => {
        const dish = DISHES.find((d) => d.id === entry.id);
        const qty = Number(entry.qty || 0);
        if (!dish || !Number.isFinite(qty) || qty <= 0) return null;
        return buildCartItem(dish, qty);
      })
      .filter(Boolean);

    setItems(normalized);
    if (typeof parsed.coupon === 'string') setCoupon(parsed.coupon);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ items, coupon }));
  }, [items, coupon]);

  function setCouponSafe(nextCoupon) {
    const next = typeof nextCoupon === 'string' ? nextCoupon : '';
    setCoupon(next.trim().toUpperCase());
  }



  const cartCount = useMemo(() => items.reduce((sum, it) => sum + it.qty, 0), [items]);

  const subtotal = useMemo(() => items.reduce((sum, it) => sum + it.price * it.qty, 0), [items]);

  const couponDiscount = useMemo(() => {
    const code = coupon.trim().toUpperCase();
    if (!code) return 0;
    if (code === 'WELCOME10') return subtotal * 0.1;
    if (code === 'PARADISE15') return subtotal * 0.15;
    return 0;
  }, [coupon, subtotal]);

  const discountedSubtotal = useMemo(() => Math.max(0, subtotal - couponDiscount), [subtotal, couponDiscount]);

  const gst = useMemo(() => discountedSubtotal * 0.18, [discountedSubtotal]);
  const delivery = useMemo(() => (discountedSubtotal > 0 ? 49 : 0), [discountedSubtotal]);
  const grandTotal = useMemo(() => discountedSubtotal + gst + delivery, [discountedSubtotal, gst, delivery]);

  function addToCart(dishId, qty = 1) {
    const dish = DISHES.find((d) => d.id === dishId);
    if (!dish) return;

    const addQty = Math.max(1, Number(qty) || 1);

    setItems((prev) => {
      const existing = prev.find((p) => p.id === dishId);
      if (!existing) return [...prev, buildCartItem(dish, addQty)];

      return prev.map((p) => (p.id === dishId ? { ...p, qty: p.qty + addQty } : p));
    });
  }

  function removeFromCart(dishId) {
    setItems((prev) => prev.filter((p) => p.id !== dishId));
  }

  function updateQty(dishId, qty) {
    const nextQty = Number(qty);
    if (!Number.isFinite(nextQty) || nextQty <= 0) {
      removeFromCart(dishId);
      return;
    }

    setItems((prev) => prev.map((p) => (p.id === dishId ? { ...p, qty: nextQty } : p)));
  }

  function clearCart() {
    setItems([]);
    setCoupon('');
  }

  const value = {
    items,
    coupon,
    setCoupon,

    cartCount,
    subtotal,
    couponDiscount,
    gst,
    delivery,
    grandTotal,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}


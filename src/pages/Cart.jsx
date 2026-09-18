import React from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
	const { cartItems, subtotal, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="mx-auto max-w-6xl px-6 py-14 lg:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">Your routine</p>
      <h1 className="mt-3 text-4xl font-bold text-gray-900">Shopping card</h1>

      {cartItems.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-dashed border-pink-200 bg-pink-50/50 px-6 py-16 text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-800">Your card is empty</h2>
          <p className="mt-3 text-gray-500">Add a few essentials to build your routine.</p>
          <Link to="/shop" className="mt-7 inline-flex rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-pink-500">
            Explore products
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-3">
            {cartItems.map((item) => (
              <article key={item.id} className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <img src={item.image} alt={item.name} className="h-24 w-20 rounded-xl object-cover" />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-pink-500">{item.category}</p>
                  <h2 className="mt-1 truncate font-semibold text-gray-800">{item.name}</h2>
                  <p className="mt-1 text-sm text-gray-500">${item.price.toFixed(2)}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => updateQuantity(item.id, item.quantity - 1)} className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-pink-300 hover:text-pink-500"><FiMinus size={13} /></button>
                    <span className="w-4 text-center text-sm font-semibold">{item.quantity}</span>
                    <button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => updateQuantity(item.id, item.quantity + 1)} className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-pink-300 hover:text-pink-500"><FiPlus size={13} /></button>
                  </div>
                </div>
                <button type="button" aria-label={`Remove ${item.name}`} onClick={() => removeFromCart(item.id)} className="self-start p-2 text-gray-400 hover:text-pink-500"><FiTrash2 size={17} /></button>
              </article>
            ))}
          </div>
          <aside className="h-fit rounded-3xl bg-gray-950 p-6 text-white">
            <h2 className="text-lg font-semibold">Order summary</h2>
            <div className="mt-6 flex justify-between border-b border-white/10 pb-4 text-sm text-gray-400"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="mt-4 flex justify-between text-lg font-bold"><span>Total</span><span>${subtotal.toFixed(2)}</span></div>
            <Link to="/checkout" className="mt-6 block rounded-full bg-pink-400 px-5 py-3 text-center text-sm font-bold text-gray-950 transition hover:bg-pink-300">Continue to checkout</Link>
          </aside>
        </div>
      )}
    </div>
  );
}

export default Cart;
import { useState } from "react";
import { FiCheck, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
	const { cartItems, subtotal, clearCart } = useCart();
	const [orderPlaced, setOrderPlaced] = useState(false);

	const shipping = subtotal >= 50 || subtotal === 0 ? 0 : 5.99;
	const total = subtotal + shipping;

	const handleSubmit = (event) => {
		event.preventDefault();
		clearCart();
		setOrderPlaced(true);
	};

	if (orderPlaced) {
		return (
			<div className="mx-auto max-w-xl px-6 py-20 text-center lg:py-28">
				<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 text-pink-500">
					<FiCheck size={30} />
				</div>
				<p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">Order confirmed</p>
				<h1 className="mt-3 font-serif text-4xl font-bold text-gray-900">Your glow is on its way.</h1>
				<p className="mt-4 leading-7 text-gray-500">Thank you for choosing Luma. We&apos;ll send your order details to your email shortly.</p>
				<Link to="/shop" className="mt-8 inline-flex rounded-full bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-pink-500">Continue shopping</Link>
			</div>
		);
	}

	if (cartItems.length === 0) {
		return (
			<div className="mx-auto max-w-xl px-6 py-20 text-center lg:py-28">
				<p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">Checkout</p>
				<h1 className="mt-3 font-serif text-4xl font-bold text-gray-900">Your cart is empty.</h1>
				<p className="mt-4 text-gray-500">Add something beautiful to your routine before checking out.</p>
				<Link to="/shop" className="mt-8 inline-flex rounded-full bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-pink-500">Explore products</Link>
			</div>
		);
	}

	return (
		<div className="mx-auto max-w-6xl px-6 py-14 lg:py-20">
			<div className="mb-10">
				<p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">Almost yours</p>
				<h1 className="mt-3 font-serif text-4xl font-bold text-gray-900">Complete your order</h1>
				<p className="mt-3 text-gray-500">Secure checkout, thoughtfully simple.</p>
			</div>

			<div className="grid gap-10 lg:grid-cols-[1fr_360px]">
				<form onSubmit={handleSubmit} className="space-y-8">
					<section className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
						<div className="mb-6 flex items-center justify-between">
							<h2 className="text-xl font-bold text-gray-900">Contact details</h2>
							<span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">01</span>
						</div>
						<div className="grid gap-4 sm:grid-cols-2">
							<label className="text-sm font-semibold text-gray-700 sm:col-span-2">Email address
								<input required type="email" placeholder="you@example.com" className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 font-normal outline-none transition placeholder:text-gray-400 focus:border-pink-400 focus:ring-4 focus:ring-pink-100" />
							</label>
							<label className="text-sm font-semibold text-gray-700">First name
								<input required type="text" placeholder="First name" className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 font-normal outline-none transition placeholder:text-gray-400 focus:border-pink-400 focus:ring-4 focus:ring-pink-100" />
							</label>
							<label className="text-sm font-semibold text-gray-700">Last name
								<input required type="text" placeholder="Last name" className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 font-normal outline-none transition placeholder:text-gray-400 focus:border-pink-400 focus:ring-4 focus:ring-pink-100" />
							</label>
						</div>
					</section>

					<section className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
						<div className="mb-6 flex items-center justify-between">
							<h2 className="text-xl font-bold text-gray-900">Delivery address</h2>
							<span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">02</span>
						</div>
						<div className="grid gap-4 sm:grid-cols-2">
							<label className="text-sm font-semibold text-gray-700 sm:col-span-2">Address
								<input required type="text" placeholder="Street address" className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 font-normal outline-none transition placeholder:text-gray-400 focus:border-pink-400 focus:ring-4 focus:ring-pink-100" />
							</label>
							<label className="text-sm font-semibold text-gray-700">City
								<input required type="text" placeholder="City" className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 font-normal outline-none transition placeholder:text-gray-400 focus:border-pink-400 focus:ring-4 focus:ring-pink-100" />
							</label>
							<label className="text-sm font-semibold text-gray-700">Postal code
								<input required type="text" placeholder="Postal code" className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 font-normal outline-none transition placeholder:text-gray-400 focus:border-pink-400 focus:ring-4 focus:ring-pink-100" />
							</label>
						</div>
					</section>

					<section className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
						<div className="mb-6 flex items-center justify-between">
							<h2 className="text-xl font-bold text-gray-900">Payment</h2>
							<span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">03</span>
						</div>
						<label className="text-sm font-semibold text-gray-700">Card number
							<input required inputMode="numeric" pattern="[0-9 ]{12,19}" placeholder="1234 5678 9012 3456" className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 font-normal outline-none transition placeholder:text-gray-400 focus:border-pink-400 focus:ring-4 focus:ring-pink-100" />
						</label>
						<div className="mt-4 grid gap-4 sm:grid-cols-2">
							<label className="text-sm font-semibold text-gray-700">Expiry date
								<input required type="text" placeholder="MM / YY" className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 font-normal outline-none transition placeholder:text-gray-400 focus:border-pink-400 focus:ring-4 focus:ring-pink-100" />
							</label>
							<label className="text-sm font-semibold text-gray-700">Security code
								<input required type="text" inputMode="numeric" placeholder="CVC" className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 font-normal outline-none transition placeholder:text-gray-400 focus:border-pink-400 focus:ring-4 focus:ring-pink-100" />
							</label>
						</div>
					</section>

					<button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-pink-500 px-6 py-4 text-sm font-bold text-white transition hover:bg-pink-600">
						<FiLock size={16} /> Place order · ${total.toFixed(2)}
					</button>
				</form>

				<aside className="h-fit rounded-3xl bg-gray-950 p-6 text-white lg:sticky lg:top-6">
					<h2 className="text-xl font-bold">Order summary</h2>
					<div className="mt-6 space-y-4">
						{cartItems.map((item) => (
							<div key={item.id} className="flex gap-3">
								<img src={item.image} alt={item.name} className="h-16 w-14 rounded-lg object-cover" />
								<div className="min-w-0 flex-1">
									<p className="truncate text-sm font-semibold">{item.name}</p>
									<p className="mt-1 text-xs text-gray-400">Qty {item.quantity}</p>
								</div>
								<span className="text-sm">${(item.price * item.quantity).toFixed(2)}</span>
							</div>
						))}
					</div>
					<div className="mt-7 space-y-3 border-t border-white/10 pt-5 text-sm">
						<div className="flex justify-between text-gray-400"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
						<div className="flex justify-between text-gray-400"><span>Shipping</span><span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span></div>
						<div className="flex justify-between pt-2 text-lg font-bold"><span>Total</span><span>${total.toFixed(2)}</span></div>
					</div>
					<p className="mt-6 text-xs leading-5 text-gray-500">Orders over $50 include complimentary shipping.</p>
				</aside>
			</div>
		</div>
	);
}

export default Checkout;

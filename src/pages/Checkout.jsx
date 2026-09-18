import { useState } from "react";
import { FiCheck, FiLock, FiSmartphone } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const qrCodeImage =
  "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=M%20%26%20L%20Cosmetic%20Order%20Payment%20%24" +
  "${0}";

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
      <div className="px-6 py-20 mx-auto max-w-xl text-center lg:py-28">
        <div className="mx-auto h-16 w-16 justify-center rounded-full bg-pink-100 text-pink-500 flex items-center">
          <FiCheck size={30} />
        </div>
        <p className="mt-7 text-sm font-semibold text-pink-500 uppercase tracking-[0.2em]">
          Order confirmed
        </p>
        <h1 className="mt-3 text-4xl font-bold text-gray-900 tracking-[-0.04em]">
          Your glow is on its way.
        </h1>
        <p className="mt-4 text-gray-500 leading-7">
          Thank you for choosing M &amp; L Cosmetic. We&apos;ll send your order details to your email shortly.
        </p>
        <Link
          to="/shop"
          className="mt-8 px-6 py-3 rounded-full bg-gray-900 text-sm font-semibold text-white inline-flex transition hover:bg-pink-500"
        >
          Continue shopping
        </Link>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="px-6 py-20 mx-auto max-w-xl text-center lg:py-28">
        <p className="text-sm font-semibold text-pink-500 uppercase tracking-[0.2em]">
          Checkout
        </p>
        <h1 className="mt-3 text-4xl font-bold text-gray-900 tracking-[-0.04em]">
          Your cart is empty.
        </h1>
        <p className="mt-4 text-gray-500">
          Add something beautiful to your routine before checking out.
        </p>
        <Link
          to="/shop"
          className="mt-8 px-6 py-3 rounded-full bg-gray-900 text-sm font-semibold text-white inline-flex transition hover:bg-pink-500"
        >
          Explore products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#f9f5f2]">
      <div className="px-6 py-14 mx-auto max-w-7xl lg:py-20">
        <div className="mb-8">
          <p className="text-xs font-semibold text-pink-500 uppercase tracking-[0.24em]">
            Checkout
          </p><br />
          <h1 className="mt-3 text-4xl font-bold text-gray-900 tracking-[-0.04em] md:text-5xl">
            Complete your order
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <section className="p-6 rounded-[1.75rem] border border-[#f0e4e1] bg-white shadow-[0_16px_35px_rgba(15,23,42,0.03)] md:p-8">
              <div className="mb-5 justify-between flex items-center">
                <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em]">
                  01
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium text-gray-700 sm:col-span-2">
                  Email address
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 px-4 h-12 w-full rounded-xl border border-[#efe2df] bg-[#fffdfd] text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-pink-300 focus:ring-4 focus:ring-pink-100"
                  />
                </label>

                <label className="text-sm font-medium text-gray-700">
                  First name
                  <input
                    required
                    type="text"
                    placeholder="First name"
                    className="mt-2 px-4 h-12 w-full rounded-xl border border-[#efe2df] bg-[#fffdfd] text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-pink-300 focus:ring-4 focus:ring-pink-100"
                  />
                </label>

                <label className="text-sm font-medium text-gray-700">
                  Last name
                  <input
                    required
                    type="text"
                    placeholder="Last name"
                    className="mt-2 px-4 h-12 w-full rounded-xl border border-[#efe2df] bg-[#fffdfd] text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-pink-300 focus:ring-4 focus:ring-pink-100"
                  />
                </label>
              </div>
            </section>

            <section className="p-6 rounded-[1.75rem] border border-[#f0e4e1] bg-white shadow-[0_16px_35px_rgba(15,23,42,0.03)] md:p-8">
              <div className="mb-5 justify-between flex items-center">
                <h2 className="text-xl font-semibold text-gray-900">Shipping</h2>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em]">
                  02
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium text-gray-700 sm:col-span-2">
                  Address
                  <input
                    required
                    type="text"
                    placeholder="Street address"
                    className="mt-2 px-4 h-12 w-full rounded-xl border border-[#efe2df] bg-[#fffdfd] text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-pink-300 focus:ring-4 focus:ring-pink-100"
                  />
                </label>

                <label className="text-sm font-medium text-gray-700">
                  City
                  <input
                    required
                    type="text"
                    placeholder="City"
                    className="mt-2 px-4 h-12 w-full rounded-xl border border-[#efe2df] bg-[#fffdfd] text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-pink-300 focus:ring-4 focus:ring-pink-100"
                  />
                </label>

             
			 
              </div>
            </section>

            <section className="p-6 rounded-[1.75rem] border border-[#f0e4e1] bg-white shadow-[0_16px_35px_rgba(15,23,42,0.03)] md:p-8">
              <div className="mb-5 justify-between flex items-center">
                <h2 className="text-xl font-semibold text-gray-900">Payment</h2>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em]">
                  03
                </span>
              </div>

              <div className="p-5 rounded-[1.4rem] border border-dashed border-pink-200 bg-[#fff8fa]">
                <div className="gap-3 flex items-center">
                  <div className="h-10 w-10 justify-center rounded-full bg-pink-100 text-pink-500 flex items-center">
                    <FiSmartphone size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">QR payment</p>
                    <p className="text-xs text-gray-500">Pay via mobile banking or e-wallet</p>
                  </div>
                </div>

                <div className="flex-col mt-5 gap-4 p-5 justify-center rounded-[1.25rem] bg-white shadow-sm flex items-center sm:flex-row">
                  <img
                    src={qrCodeImage.replace("${0}", total.toFixed(2).replace(".", ""))}
                    alt="QR payment code"
                    className="p-2 h-36 w-36 rounded-xl border border-[#f3e8eb] bg-white"
                  />
                  <div className="text-center sm:text-left">
                    <p className="text-sm font-medium text-gray-600">Payment amount</p>
                    <p className="mt-1 text-2xl font-bold text-gray-900">${total.toFixed(2)}</p>
                    <p className="mt-3 text-xs text-gray-500">
                      Scan this QR code with your banking app to complete payment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid mt-5 gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium text-gray-700">
                  Card number
                  <input
                    required
                    inputMode="numeric"
                    pattern="[0-9 ]{12,19}"
                    placeholder="1234 5678 9012 3456"
                    className="mt-2 px-4 h-12 w-full rounded-xl border border-[#efe2df] bg-[#fffdfd] text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-pink-300 focus:ring-4 focus:ring-pink-100"
                  />
                </label>

             
              </div>
            </section>

            <button
              type="submit"
              className="gap-2 px-6 py-4 w-full justify-center rounded-full bg-gray-900 text-sm font-semibold text-white flex items-center transition hover:bg-pink-500"
            >
              <FiLock size={16} />
              Place order · ${total.toFixed(2)}
            </button>
          </form>

          <aside className="p-6 h-fit rounded-[1.75rem] border border-[#f0e4e1] bg-white shadow-[0_16px_35px_rgba(15,23,42,0.03)] lg:sticky lg:top-6">
            <h2 className="text-xl font-semibold text-gray-900">Order summary</h2>

            <div className="mt-6 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="gap-3 p-2 rounded-2xl bg-[#faf5f3] flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-xl object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">{item.name}</p>
                    <p className="mt-1 text-xs text-gray-500">Qty {item.quantity}</p>
                  </div>
                  <span className="text-sm font-medium text-gray-800">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[#f1e7e4] text-sm text-gray-600 space-y-3">
              <div className="justify-between flex items-center">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="justify-between flex items-center">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="pt-3 justify-between border-t border-[#f1e7e4] text-base font-semibold text-gray-900 flex items-center">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <p className="mt-6 text-xs text-gray-500 leading-6">
              Orders over $50 include complimentary shipping.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

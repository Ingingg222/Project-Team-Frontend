import React from "react";

function Checkout() {
  return (
    <div className="px-6 py-16 max-w-4xl mx-auto">

      <h1 className="mb-10 text-4xl font-bold text-gray-800">
        Checkout
      </h1>

      <form className="space-y-5">

        <input
          type="text"
          placeholder="Full Name"
          className="px-5 py-3 w-full border rounded-xl"
        />

        <input
          type="email"
          placeholder="Email"
          className="px-5 py-3 w-full border rounded-xl"
        />

        <input
          type="text"
          placeholder="Address"
          className="px-5 py-3 w-full border rounded-xl"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="px-5 py-3 w-full border rounded-xl"
        />

        <button
          className="px-8 py-3 bg-pink-500 text-white rounded-full"
        >
          Place Order
        </button>

      </form>

    </div>
  );
}

export default Checkout;
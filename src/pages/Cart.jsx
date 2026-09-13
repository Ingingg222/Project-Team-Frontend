import React from "react";

function Cart() {
  return (
    <div className="px-6 py-16 max-w-5xl mx-auto">

      <h1 className="mb-10 text-4xl font-bold text-gray-800">
        Shopping Cart 🛒
      </h1>

      <div className="p-10 bg-gray-50 rounded-2xl text-center">

        <div className="mb-5 text-6xl">
          🛍️
        </div>

        <h2 className="text-2xl font-semibold">
          Your cart is empty
        </h2><br />

        <p className="mt-3 text-gray-500">
          Add some skincare products to your cart.
        </p>

      </div>

    </div>
  );
}

export default Cart;
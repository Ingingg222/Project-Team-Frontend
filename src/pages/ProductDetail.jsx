import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar, FaShoppingCart, FaHeart, FaTruck, FaShieldAlt } from "react-icons/fa";
import { ProductData } from "../data/ProductData";

function ProductDetail() {
  const { id } = useParams();
  const product = ProductData.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Product Not Found</h2>
        <Link
          to="/shop"
          className="mt-6 px-6 py-3 rounded-full bg-pink-500 font-semibold text-white inline-block transition hover:bg-pink-600"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="px-6 py-16 mx-auto max-w-7xl">
      <div className="mb-8 text-sm text-gray-500">
        <Link to="/" className="hover:text-pink-500">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-pink-500">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{product.name}</span>
      </div>

      <div className="grid gap-12 p-6 rounded-[2rem] bg-gradient-to-br shadow-[0_30px_80px_rgba(236,72,153,0.08)] from-white via-pink-50 to-orange-50 md:grid-cols-2 md:p-10">
        <div className="p-4 overflow-hidden rounded-[2rem] bg-white shadow-lg">
          <img
            src={product.image}
            alt={product.name}
            className="h-[520px] w-full rounded-[1.5rem] object-cover"
          />
        </div>

        <div className="flex-col justify-center flex">
          <p className="text-sm font-semibold text-pink-500 uppercase tracking-[0.2em]">
            {product.category}
          </p><br />

          <h1 className="mt-4 text-4xl font-black text-gray-900 md:text-5xl">
            {product.name}
          </h1><br />

          <p className="mt-3 text-lg text-gray-500">Brand: {product.brand}</p>

          <div className="mt-5 gap-3 flex items-center">
            <div className="gap-1 text-yellow-400 flex items-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
            <span className="text-sm text-gray-400">(124 reviews)</span>
          </div>

          <div className="mt-6 gap-3 flex items-end">
            <p className="text-4xl font-black text-pink-500">${product.price}</p>
            <span className="mb-1 text-sm text-gray-400 line-through">${(product.price + 8).toFixed(2)}</span>
          </div>

          <p className="mt-6 text-base text-gray-600 leading-8">{product.description}</p>

          <div className="flex-wrap mt-8 gap-4 flex items-center">
            <button className="gap-3 px-8 py-4 justify-center rounded-full bg-pink-500 text-base font-semibold text-white flex items-center transition hover:bg-pink-600">
              <FaShoppingCart />
              Add to Cart
            </button>

            <button className="gap-2 px-6 py-4 rounded-full border border-gray-300 bg-white font-semibold text-gray-700 flex items-center transition hover:border-pink-300 hover:text-pink-500">
              <FaHeart />
              Wishlist
            </button>
          </div>

          <div className="grid mt-8 gap-4 p-5 rounded-2xl bg-white shadow-sm md:grid-cols-3">
            <div className="gap-3 flex items-center">
              <div className="p-2 rounded-full bg-pink-100 text-pink-500">
                <FaTruck />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Free shipping</p>
                <p className="text-sm text-gray-500">Over $50</p>
              </div>
            </div>

            <div className="gap-3 flex items-center">
              <div className="p-2 rounded-full bg-pink-100 text-pink-500">
                <FaShieldAlt />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Secure</p>
                <p className="text-sm text-gray-500">Checkout</p>
              </div>
            </div>

            <div className="gap-3 flex items-center">
              <div className="p-2 rounded-full bg-pink-100 text-pink-500">
                <FaStar />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Top rated</p>
                <p className="text-sm text-gray-500">Skin-safe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
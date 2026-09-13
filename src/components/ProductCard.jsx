import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function ProductCard({ product }) {
  if (!product) return null;

  return (
    <article className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/product/${product.id}`} className="block">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover"
        />
      </Link>

      <div className="p-5">
        <p className="text-xs font-semibold text-pink-500 uppercase tracking-[0.2em]">
          {product.category}
        </p>

        <Link to={`/product/${product.id}`} className="mt-3 block">
          <h3 className="text-xl font-bold text-gray-800 hover:text-pink-500">
            {product.name}
          </h3>
        </Link>

        <p className="mt-2 text-sm text-gray-500">{product.brand}</p>

        <div className="mt-4 gap-2 text-yellow-400 flex items-center">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <span className="text-sm font-medium text-gray-600 ml-1">
            {product.rating}
          </span>
        </div>

        <div className="mt-5 justify-between flex items-center">
          <p className="text-2xl font-bold text-pink-500">${product.price}</p>

          <Link
            to={`/product/${product.id}`}
            className="px-4 py-2 rounded-full bg-gray-900 text-sm font-semibold text-white transition hover:bg-pink-500"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;

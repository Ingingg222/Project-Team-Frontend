import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { ProductData } from "../data/ProductData";

const normalizeCategory = (value = "") =>
  value.trim().toLowerCase().replace(/\s+/g, " ");

function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(
      ProductData.map((product) => product.category.trim()).filter(Boolean)
    ),
  ];

  const filteredProducts = ProductData.filter((product) => {
    const searchValue = search.trim().toLowerCase();
    const searchMatch =
      searchValue.length === 0 ||
      product.name.toLowerCase().includes(searchValue);

    const categoryMatch =
      category === "All" ||
      normalizeCategory(product.category) === normalizeCategory(category);

    return searchMatch && categoryMatch;
  });

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">

      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          M & L Cosmetic
        </h1>

        <p className="mt-3 text-gray-500">
          Find the perfect products for your skincare routine.
        </p>
      </div>

      {/* Search */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search skincare products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-5 py-3 w-full border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-300"
        />
      </div>

      {/* Categories */}
      <div className="flex-wrap gap-3 mb-10 flex">

        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`px-5 py-2 rounded-full transition ${
              category === item
                ? "bg-pink-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-pink-100"
            }`}
          >
            {item}
          </button>
        ))}

      </div>

      {/* Products */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

      {filteredProducts.length === 0 && (
        <p className="py-20 text-center text-gray-500">
          No products found.
        </p>
      )}

    </div>
  );
}

export default Shop;
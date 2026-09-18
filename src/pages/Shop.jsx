import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductGrid from "../components/ProductGrid";
import { useProducts } from "../context/ProductContext";

function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const { categories, filterProducts } = useProducts();
  const filteredProducts = filterProducts({ search, category });

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
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
      <ProductGrid
        products={filteredProducts}
        emptyMessage="Try another product name or clear your filters."
      />

    </div>
  );
}

export default Shop;
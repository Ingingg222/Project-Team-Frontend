import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { useProducts } from "../context/ProductContext";
import { CategoryData } from "../data/CategoryData";

const normalizeCategory = (value = "") =>
  value.trim().toLowerCase().replace(/\s+/g, " ");

function Category() {
  const [searchParams] = useSearchParams();
  const { products, filterProducts } = useProducts();

  const activeCategory = searchParams.get("name") || "All";
  const categoryList = ["All", ...CategoryData.map((item) => item.name)];

  const categoryCards = CategoryData.map((item) => {
    const normalizedName = normalizeCategory(item.name);
    const matchingProducts = products.filter(
      (product) => normalizeCategory(product.category) === normalizedName
    );

    return {
      ...item,
      product: matchingProducts[0] || null,
      count: matchingProducts.length,
    };
  });

  const selectedProducts =
    activeCategory === "All" ? products : filterProducts({ category: activeCategory });

  const currentCategory =
    CategoryData.find(
      (item) => normalizeCategory(item.name) === normalizeCategory(activeCategory)
    ) || {
      name: activeCategory === "All" ? "Skincare" : activeCategory,
      description:
        activeCategory === "All"
          ? "Simple essentials for a calm, healthy routine. Build a ritual that feels as good as it looks."
          : "A curated collection for your daily skin ritual, chosen for softness, hydration, and visible glow.",
    };

  const featuredCard =
    categoryCards.find((category) =>
      normalizeCategory(category.name) === normalizeCategory(activeCategory)
    ) || categoryCards[0];

  const categoryHighlight = featuredCard?.product || products[0];

  return (
    <div className="bg-[#f7f4f2] text-gray-900">
      <section className="px-6 py-10 mx-auto max-w-7xl md:py-12">
        <div className="mb-5 gap-3 text-sm text-gray-500 flex items-center">
          <Link to="/" className="transition hover:text-pink-500">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-700">Categories</span>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#f0e5e2] bg-gradient-to-r shadow-[0_18px_28px_rgba(15,23,42,0.04)] from-[#fffaf9] via-white to-[#fdf0ee]">
          <div className="grid gap-6 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
            <div>
              <p className="text-xs font-semibold text-pink-500 uppercase tracking-[0.28em]">
                Skin ritual
              </p>
              <h1 className="mt-3 text-4xl font-bold text-gray-900 tracking-[-0.04em] md:text-5xl">
                {currentCategory.name}
              </h1>
              <p className="mt-4 max-w-xl text-base text-gray-600 leading-7">
                {currentCategory.description}
              </p>

              <div className="flex-wrap mt-6 gap-2 flex">
                {[
                  "Gentle formulas",
                  "Hydrating care",
                  "Glow-boosting essentials",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full border border-[#f2d8d3] bg-white text-xs font-medium text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-[1.5rem] border border-[#f2e6e3] bg-white shadow-sm">
              <div className="mb-4 justify-between flex items-center">
                <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-[0.24em]">
                  Featured picks
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#fdf1f4] text-xs font-semibold text-pink-500">
                  {selectedProducts.length} items
                </span>
              </div>

              <img
                src={categoryHighlight?.image}
                alt={currentCategory.name}
                className="h-60 w-full rounded-[1.2rem] object-cover"
              />

              <div className="mt-4 gap-3 justify-between flex items-center">
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {featuredCard?.name || currentCategory.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {featuredCard?.count || selectedProducts.length} products in this collection
                  </p>
                </div>
                <Link
                  to={
                    activeCategory === "All"
                      ? "/shop"
                      : `/category?name=${encodeURIComponent(activeCategory)}`
                  }
                  className="text-sm font-semibold text-pink-500 hover:text-pink-600"
                >
                  See all
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-6 mx-auto max-w-7xl">
        <div className="flex-wrap gap-2 flex">
          {categoryList.map((name) => {
            const isActive = normalizeCategory(name) === normalizeCategory(activeCategory);

            return (
              <Link
                key={name}
                to={name === "All" ? "/category" : `/category?name=${encodeURIComponent(name)}`}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border-gray-900 bg-gray-900 text-white shadow-sm"
                    : "border-[#efe2dd] bg-white text-gray-700 hover:border-pink-200 hover:text-pink-500"
                }`}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="px-6 pb-8 mx-auto max-w-7xl">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {categoryCards.map(({ name, count, product }) => {
            const isActive = normalizeCategory(name) === normalizeCategory(activeCategory);

            return (
              <Link
                key={name}
                to={`/category?name=${encodeURIComponent(name)}`}
                className={`group overflow-hidden rounded-[1.25rem] border transition hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(15,23,42,0.05)] ${
                  isActive
                    ? "border-gray-900 bg-gray-900 shadow-md"
                    : "border-[#f0e7e3] bg-white"
                }`}
              >
                <img
                  src={product?.image}
                  alt={name}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="gap-3 px-4 py-3 justify-between flex items-center">
                  <div>
                    <p
                      className={`text-sm font-medium ${
                        isActive ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {name}
                    </p>
                    <p className={`text-xs ${isActive ? "text-gray-300" : "text-gray-500"}`}>
                      {count} items
                    </p>
                  </div>
                  <span className={`text-lg ${isActive ? "text-white" : "text-gray-500"}`}>
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="px-6 pb-20 mx-auto max-w-7xl">
        <div className="mb-6 gap-4 justify-between flex items-end">
          <div>
            <p className="text-sm font-semibold text-pink-500 uppercase tracking-[0.2em]">
              Curated selection
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 tracking-[-0.04em] md:text-4xl">
              {activeCategory === "All" ? "Everything for your routine" : `${currentCategory.name} essentials`}
            </h2>
          </div>
        </div>

        <ProductGrid
          products={selectedProducts}
          emptyMessage="No products match this category yet. Try another collection."
        />
      </section>
    </div>
  );
}

export default Category;
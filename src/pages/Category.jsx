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
          ? "Simple essentials for a calm, healthy routine."
          : "A curated collection for your daily skin ritual.",
    };

  return (
    <div className="bg-[#f7f4f2]">
      <section className="px-6 py-10 mx-auto max-w-7xl md:py-12">
        <div className="mb-5 gap-3 text-sm text-gray-500 flex items-center">
          <Link to="/" className="transition hover:text-pink-500">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-700">Categories</span>
        </div>

        <div className="p-6 rounded-[1.5rem] border border-[#f0e5e2] bg-white shadow-[0_12px_20px_rgba(15,23,42,0.02)] md:p-8">
          <h1 className="text-4xl font-bold text-gray-900 tracking-[-0.04em] md:text-5xl">
            {currentCategory.name}
          </h1>
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
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  isActive
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-[#efe2dd] bg-white text-gray-700 hover:border-pink-200 hover:text-pink-500"
                }`}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="px-6 pb-20 mx-auto max-w-7xl">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {categoryCards.map(({ name, count, product }) => (
            <Link
              key={name}
              to={`/category?name=${encodeURIComponent(name)}`}
              className="overflow-hidden rounded-[1.25rem] border border-[#f0e7e3] bg-white group transition hover:shadow-[0_14px_28px_rgba(15,23,42,0.04)]"
            >
              <img
                src={product?.image}
                alt={name}
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="px-4 py-3 justify-between flex items-center">
                <div>
                  <p className="text-sm font-medium text-gray-800">{name}</p>
                  <p className="text-xs text-gray-500">{count} items</p>
                </div>
                <span className="text-lg text-gray-500">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Category;
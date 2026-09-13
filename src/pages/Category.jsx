import React from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { ProductData } from "../data/ProductData";

const normalizeCategory = (value = "") =>
  value.trim().toLowerCase().replace(/\s+/g, " ");

function Category() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("name") || "";
  const normalizedCategory = normalizeCategory(category);

  const products = ProductData.filter(
    (product) => normalizeCategory(product.category) === normalizedCategory
  );

  return (
    <div className="px-6 py-16 max-w-7xl mx-auto">

      <h1 className="mb-10 text-4xl font-bold text-gray-800">
        {category} Products
      </h1><br />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </div>
  );
}

export default Category;
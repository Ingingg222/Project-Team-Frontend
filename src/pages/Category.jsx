import React from "react";
import { useSearchParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { useProducts } from "../context/ProductContext";

function Category() {
  const [searchParams] = useSearchParams();
  const { filterProducts } = useProducts();

  const category = searchParams.get("name") || "";
  const products = filterProducts({ category });

  return (
    <div className="px-6 py-16 max-w-7xl mx-auto">

      <h1 className="mb-10 text-4xl font-bold text-gray-800">
        {category} Products
      </h1><br />

      <ProductGrid products={products} emptyMessage="This category has no products yet." />

    </div>
  );
}

export default Category;
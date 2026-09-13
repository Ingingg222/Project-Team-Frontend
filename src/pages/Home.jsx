import React from "react";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import { ProductData } from "../data/ProductData";
import { Link } from "react-router-dom";

function Home() {
  const popularProducts = ProductData.slice(0, 4);
  const categories = [
    { name: "Cleansers", query: "Cleanser", product: ProductData[0], count: "12 products" },
    { name: "Moisturizers", query: "Moisturizer", product: ProductData[2], count: "18 products" },
    { name: "Serums", query: "Serum", product: ProductData[1], count: "15 products" },
    { name: "Sunscreen", query: "Sunscreen", product: ProductData[3], count: "10 products" },
    { name: "Toners", query: "Toner", product: ProductData[4], count: "8 products" },
  ];

  return (
    <div className="bg-white">

      <HeroSection />

      {/* Categories */}
      <section className="px-6 py-14 mx-auto max-w-7xl md:py-16">

        <div className="mb-9 text-center">
          <p className="text-sm font-semibold text-pink-500 uppercase tracking-[0.2em]">
            Explore your routine
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Shop by categories
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {categories.map(({ name, query, product, count }) => (
            <Link
              key={name}
              to={`/category?name=${query}`}
              className="overflow-hidden rounded-2xl border border-pink-100 bg-pink-50 group transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={product.image}
                alt={name}
                className="h-36 w-full object-cover transition duration-500 group-hover:scale-105 md:h-40"
              />
              <div className="px-3 py-4 bg-white text-center">
                <h3 className="font-semibold text-gray-800">{name}</h3>
                <p className="mt-1 text-xs text-gray-500">{count}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Promotional banner */}
      <section className="px-6 pb-14 mx-auto max-w-7xl md:pb-16">
        <div className="grid gap-8 px-7 py-10 overflow-hidden rounded-3xl bg-[#fce5e5] items-center md:grid-cols-2 md:px-12 md:py-12">
          <div className="max-w-sm">
            <p className="text-sm font-semibold text-pink-500 uppercase tracking-[0.2em]">
              Glow every day
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-gray-900 leading-tight md:text-4xl">
              Skincare that loves you back.
            </h2>
            <p className="mt-4 text-sm text-gray-600 leading-6">
              Flat 20% off on our best-selling products. Limited time only.
            </p>
            <Link
              to="/shop"
              className="mt-6 px-5 py-3 rounded-full bg-gray-900 text-sm font-semibold text-white inline-flex transition hover:bg-pink-500"
            >
              Shop now <span className="ml-2" aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="p-3 mx-auto w-full max-w-sm rounded-[2rem] bg-pink-200 shadow-[0_20px_50px_rgba(236,72,153,0.14)] relative">
            <img
              src={ProductData[1].image}
              alt="Featured skincare serum"
              className="h-56 w-full rounded-[1.5rem] object-cover md:h-64"
            />
            <span className="px-3 py-2 top-5 rounded-full bg-white text-xs font-bold text-pink-500 shadow-md absolute right-5">
              20% off
            </span>
          </div>

        </div>
      </section>

      {/* Popular Products */}
      <section className="py-14 bg-[#fffafa] md:py-16">

        <div className="px-6 mx-auto max-w-7xl">

          <div className="mb-10 justify-between flex items-end">

            <div>
              <p className="text-sm font-semibold text-pink-500 uppercase tracking-[0.2em]">
                Loved by our community
              </p><br />

              <h2 className="mt-2 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
                Our bestsellers
              </h2>
            </div>

            <Link
              to="/shop"
              className="text-pink-500 font-semibold hover:text-pink-600"
            >
              View all <span aria-hidden="true">→</span>
            </Link>

          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {popularProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;
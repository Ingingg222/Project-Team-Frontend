import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-pink-50 via-white to-orange-50">
      <div className="grid gap-10 px-6 py-20 mx-auto max-w-7xl items-center md:grid-cols-2">
        <div className="text-left">
          <p className="text-sm font-semibold text-pink-500 uppercase tracking-[0.2em]">
            New season collection
          </p><br />

          <h1 className="mt-4 text-4xl font-black text-gray-900 md:text-6xl">
            Glow brighter with every layer.
          </h1><br />

          <p className="mt-5 max-w-xl text-lg text-gray-600">
            Discover gentle, effective skincare essentials designed to hydrate,
            protect, and refresh your routine.
          </p>

          <div className="flex-wrap mt-8 gap-4 flex">
            <Link
              to="/shop"
              className="px-6 py-3 rounded-full bg-pink-500 font-semibold text-white transition hover:bg-pink-600"
            >
              Shop now
            </Link>

            <Link
              to="/about"
              className="px-6 py-3 rounded-full border border-gray-300 font-semibold text-gray-700 transition hover:border-pink-300 hover:text-pink-500"
            >
              Learn more
            </Link>
          </div>

          <div className="flex-wrap mt-10 gap-10 text-sm text-gray-600 flex">
            <div>
              <p className="text-2xl font-bold text-gray-900">20k+</p>
              <p>Happy customers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">4.9/5</p>
              <p>Average rating</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">100%</p>
              <p>Cruelty free</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="p-4 rounded-[2rem] bg-white shadow-[0_30px_80px_rgba(236,72,153,0.12)]">
            <img
              src="https://i.pinimg.com/1200x/29/4d/64/294d64a7820d5787fecf82df3a9ba306.jpg"
              alt="Vitamin C serum"
              className="h-[420px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

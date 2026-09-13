import React from "react";

function About() {
  return (
    <div className="bg-[#f4efef] text-gray-800">
      <section className="py-16 bg-[#f3dfe6] text-center md:py-20">
        <h1 className="text-5xl font-black tracking-tight md:text-7xl">
          About M & L Cusmetic
        </h1><br />
        <p className="mt-4 text-xl text-gray-700 italic">
          Simple skincare. Beautiful results. <span className="text-[#f7b267]">✦</span>
        </p>
      </section>

      <section className="px-6 py-16 bg-[#f7f4f4] md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-4xl font-black">Our Story</h2><br />

          <p className="max-w-5xl text-xl text-gray-700 leading-9">
            M & L Cusmetic is a skincare shop created for people who want simple,
            effective, and beautiful skincare products. We carefully select
            products that can become part of your everyday skincare routine.
          </p><br />

          <h2 className="mt-16 mb-8 text-4xl font-black">Why Choose M & L Cusmetic?</h2><br />

          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-8 rounded-2xl bg-[#f8e4ea] shadow-sm">
              <div className="mb-4 text-3xl">✦</div>
              <h3 className="text-3xl font-bold">Quality</h3>
              <p className="mt-3 text-lg text-gray-700 leading-8">
                Carefully selected skincare products.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#f3e7ef] shadow-sm">
              <div className="mb-4 text-3xl">❤</div>
              <h3 className="text-3xl font-bold">Simple</h3>
              <p className="mt-3 text-lg text-gray-700 leading-8">
                Products that fit easily into your routine.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#e2edf3] shadow-sm">
              <div className="mb-4 text-3xl">❋</div>
              <h3 className="text-3xl font-bold">Beauty</h3>
              <p className="mt-3 text-lg text-gray-700 leading-8">
                Helping you feel confident in your own skin.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
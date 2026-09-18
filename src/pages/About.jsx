import React from "react";

function About() {
  return (
    <div className="bg-[#f9f5f3] text-gray-800">
      <section className="px-6 py-16 mx-auto max-w-7xl md:py-20">
        <div className="grid gap-10 items-center md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold text-pink-500 uppercase tracking-[0.28em]">
              About us
            </p>
            <h1 className="mt-4 text-4xl font-bold text-gray-900 tracking-[-0.04em] md:text-6xl">
              Simple skincare for everyday glow.
            </h1><br />
            <p className="mt-5 max-w-xl text-lg text-gray-600 leading-8">
              M &amp; L Cosmetic brings together gentle, effective formulas that fit naturally into your everyday routine and help your skin feel cared for, balanced, and radiant.
            </p>
          </div>

          <div className="p-3 overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_60px_rgba(15,23,42,0.06)]">
            <img
              src="https://i.pinimg.com/736x/a7/36/ff/a736ff2a2fdb102f347b097aa699577c.jpg"
              alt="Skincare routine"
              className="h-[400px] w-full rounded-[1.4rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold text-pink-500 uppercase tracking-[0.24em]">
              Our story
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Thoughtful care, made easy.
            </h2><br />
            <p className="mt-4 max-w-xl text-lg text-gray-600 leading-8">
              We believe skincare should feel simple, comforting, and beautiful. That is why every product we feature is chosen to support real routines, real skin, and real confidence.
            </p>
          </div>

          <div className="p-7 rounded-[1.75rem] bg-[#f4e4ea]">
            <p className="text-sm font-medium text-gray-700">
              “Get firm, radiant, and glass-like skin overnight!  The Medicube PDRN Pink Caffeine Night Wrapping Mask locks in deep hydration, contours, and revitalizes tired skin while you sleep. Formulated with Caffeine, Niacinamide, and PDRN for the ultimate K-beauty glow..”
            </p>
          </div>
        </div>

        <div className="grid mt-12 gap-6 md:grid-cols-3">
          <div className="p-7 rounded-[1.5rem] border border-[#f0e5e2] bg-white">
            <div className="mb-4 text-3xl"></div>
            <h3 className="text-2xl font-bold text-gray-900">Quality</h3>
            <p className="mt-3 text-base text-gray-600 leading-7">
              Carefully chosen formulas that help your skin feel cared for and supported.
            </p>
          </div>

          <div className="p-7 rounded-[1.5rem] border border-[#f0e5e2] bg-white">
            <div className="mb-4 text-3xl"></div>
            <h3 className="text-2xl font-bold text-gray-900">Simple</h3>
            <p className="mt-3 text-base text-gray-600 leading-7">
              Easy routines with products that work beautifully together every day.
            </p>
          </div>

          <div className="p-7 rounded-[1.5rem] border border-[#f0e5e2] bg-white">
            <div className="mb-4 text-3xl"></div>
            <h3 className="text-2xl font-bold text-gray-900">Glow</h3>
            <p className="mt-3 text-base text-gray-600 leading-7">
              Skincare designed to bring out a healthy, natural, confident look.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
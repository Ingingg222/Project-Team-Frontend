import React from "react";

function Contact() {
  return (
    <div className="bg-[#f9f4f2]">
      <div className="px-6 py-16 mx-auto max-w-7xl md:py-20">
        <div className="mb-10 text-center">

          <h1 className="mt-4 text-4xl font-bold text-gray-900 tracking-[-0.04em] md:text-5xl">
            Contact Us
          </h1><br />
          <p className="mt-4 text-base text-gray-600">
            Ask a question, share feedback, or plan your perfect routine with us.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-8 rounded-[2rem] bg-[#f4e4ea] md:p-10">
            <h2 className="text-2xl font-bold text-gray-900">Get in touch</h2>

            <div className="mt-7 text-gray-700 space-y-6">
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-[0.2em]">
                  Location
                </p>
                <p className="mt-2 text-lg">Phnom Penh, Cambodia</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-[0.2em]">
                  Email
                </p>
                <p className="mt-2 text-lg">weare@mnlcosmetic.com</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-[0.2em]">
                  Phone
                </p>
                <p className="mt-2 text-lg">+855 12 345 678</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-[0.2em]">
                  Hours
                </p>
                <p className="mt-2 text-lg">Monday - Saturday, 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <form className="p-8 rounded-[2rem] border border-[#f0e5e2] bg-white shadow-[0_20px_45px_rgba(15,23,42,0.03)] md:p-10">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 text-sm font-medium text-gray-700 block">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jane Doe"
                  className="px-4 py-3 w-full rounded-xl border border-[#eee0e4] bg-[#fffdfd] text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-700 block">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="px-4 py-3 w-full rounded-xl border border-[#eee0e4] bg-[#fffdfd] text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-2 text-sm font-medium text-gray-700 block">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="How can we help?"
                className="px-4 py-3 w-full rounded-xl border border-[#eee0e4] bg-[#fffdfd] text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 text-sm font-medium text-gray-700 block">
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                placeholder="Tell us more about your question..."
                className="px-4 py-3 w-full rounded-xl border border-[#eee0e4] bg-[#fffdfd] text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-6 px-6 py-3 rounded-full bg-gray-900 text-sm font-semibold text-white transition hover:bg-pink-500"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
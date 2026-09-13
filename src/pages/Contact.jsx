import React from "react";

function Contact() {
  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">

      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Contact Us
        </h1>

        <p className="mt-3 text-gray-500">
          Have a question? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Contact Info */}
        <div className="bg-pink-50 rounded-3xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Get In Touch
          </h2>

          <div className="space-y-5 text-gray-600">
            <p>📍 Phnom Penh, Cambodia</p>
            <p>📧 hello@glowskin.com</p>
            <p>📞 +855 12 345 678</p>
            <p>🕐 Monday - Saturday: 9AM - 6PM</p>
          </div>

        </div>

        {/* Form */}
        <form className="space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-200 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-pink-300"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-200 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-pink-300"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full border border-gray-200 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-pink-300"
          ></textarea>

          <button
            type="submit"
            className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;
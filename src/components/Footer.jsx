import { FiArrowUpRight, FiInstagram, FiMail, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Shop all", to: "/shop" },
  { label: "Categories", to: "/category" },
  { label: "About us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const serviceLinks = [
  "Shipping & Returns",
  "Track Order",
  "FAQs",
  "Gift Cards",
];

function Footer() {
  return (
    <footer className="bg-[#f5e9ee] text-gray-800">
      <div className="px-6 py-14 mx-auto max-w-7xl lg:px-8 lg:py-16">
        <div className="grid gap-12 pb-12 border-b border-pink-200/80 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.1fr] lg:gap-10">
          <div>
            <Link to="/" className="inline-block">
              <span className="font-serif text-3xl font-bold text-gray-900 tracking-tight">
                M &amp; L Cosmetic
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm text-gray-600 leading-7">
              Thoughtful skincare essentials for everyday rituals, designed to leave
              skin refreshed, balanced, and beautifully glowing.
            </p>

            <div className="mt-6 gap-3 flex items-center">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="h-10 w-10 justify-center rounded-full border border-pink-200 bg-white text-gray-700 flex items-center transition hover:border-pink-400 hover:bg-pink-500 hover:text-white"
              >
                <FiInstagram size={17} />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="h-10 w-10 justify-center rounded-full border border-pink-200 bg-white text-gray-700 flex items-center transition hover:border-pink-400 hover:bg-pink-500 hover:text-white"
              >
                <FiTwitter size={17} />
              </a>
              <a
                href="mailto:hello@mlcosmetic.com"
                aria-label="Email us"
                className="h-10 w-10 justify-center rounded-full border border-pink-200 bg-white text-gray-700 flex items-center transition hover:border-pink-400 hover:bg-pink-500 hover:text-white"
              >
                <FiMail size={17} />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold text-pink-500 uppercase tracking-[0.22em]">
              Explore
            </h2>
            <nav className="flex-col mt-5 gap-3 flex items-start">
              {footerLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-sm text-gray-600 transition hover:text-pink-500"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-semibold text-pink-500 uppercase tracking-[0.22em]">
              Help
            </h2>
            <ul className="flex-col mt-5 gap-3 text-sm text-gray-600 flex items-start">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="transition hover:text-pink-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold text-pink-500 uppercase tracking-[0.22em]">
              Stay in the loop
            </h2>
            <p className="mt-5 max-w-sm text-sm text-gray-600 leading-7">
              New drops, skincare notes, and glow-worthy inspiration delivered to your inbox.
            </p>

            <form
              onSubmit={(event) => event.preventDefault()}
              className="mt-5 px-2 py-2 max-w-sm rounded-full border border-pink-200 bg-white shadow-sm shadow-pink-100 flex items-center"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email address"
                className="flex-1 px-3 min-w-0 bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="h-9 w-9 justify-center rounded-full bg-pink-500 text-white ml-2 flex shrink-0 items-center transition hover:bg-pink-600"
              >
                <FiArrowUpRight size={17} />
              </button>
            </form>
          </div>
        </div>

        <div className="flex-col gap-3 pt-6 text-xs text-gray-500 flex sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 M &amp; L Cosmetic. All rights reserved.</p>
          <div className="gap-5 flex items-center">
            <a href="#privacy" className="transition hover:text-pink-500">
              Privacy
            </a>
            <a href="#terms" className="transition hover:text-pink-500">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

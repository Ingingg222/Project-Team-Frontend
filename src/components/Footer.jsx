import { FiArrowUpRight, FiInstagram, FiMail, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";

const footerLinks = [
	{ label: "Shop all", to: "/shop" },
	{ label: "Categories", to: "/category" },
	{ label: "About Luma", to: "/about" },
	{ label: "Contact us", to: "/contact" },
];

function Footer() {
	return (
		<footer className="bg-gray-950 text-white">
			<div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
				<div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-20">
					<div>
						<Link to="/" className="inline-block">
							<span className="block font-serif text-3xl font-bold leading-none tracking-tight">
								Luma<span className="text-pink-400">.</span>
							</span>
							<span className="mt-2 block text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-gray-400">
								Skin, simplified
							</span>
						</Link>
						<p className="mt-6 max-w-xs text-sm leading-6 text-gray-400">
							Thoughtful skincare for everyday rituals, made to help your natural glow take the lead.
						</p>
						<div className="mt-6 flex gap-3">
							<a
								href="https://instagram.com"
								aria-label="Instagram"
								className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-300 transition hover:border-pink-400 hover:bg-pink-400 hover:text-gray-950"
							>
								<FiInstagram size={17} />
							</a>
							<a
								href="https://twitter.com"
								aria-label="Twitter"
								className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-300 transition hover:border-pink-400 hover:bg-pink-400 hover:text-gray-950"
							>
								<FiTwitter size={17} />
							</a>
							<a
								href="mailto:hello@luma.skin"
								aria-label="Email Luma"
								className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-300 transition hover:border-pink-400 hover:bg-pink-400 hover:text-gray-950"
							>
								<FiMail size={17} />
							</a>
						</div>
					</div>

					<div>
						<h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-300">Explore</h2>
						<nav className="mt-5 flex flex-col items-start gap-3">
							{footerLinks.map(({ label, to }) => (
								<Link
									key={to}
									to={to}
									className="text-sm text-gray-400 transition hover:text-white"
								>
									{label}
								</Link>
							))}
						</nav>
					</div>

					<div>
						<h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-300">Stay in the loop</h2>
						<p className="mt-5 max-w-sm text-sm leading-6 text-gray-400">
							New drops, skincare notes, and a little extra glow in your inbox.
						</p>
						<form className="mt-5 flex max-w-sm border-b border-white/25 pb-2 focus-within:border-pink-400">
							<label htmlFor="footer-email" className="sr-only">Email address</label>
							<input
								id="footer-email"
								type="email"
								placeholder="Your email address"
								className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
							/>
							<button
								type="submit"
								aria-label="Subscribe to newsletter"
								className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-400 text-gray-950 transition hover:bg-pink-300"
							>
								<FiArrowUpRight size={17} />
							</button>
						</form>
					</div>
				</div>

				<div className="flex flex-col gap-3 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
					<p>© 2026 Luma Skin. All rights reserved.</p>
					<div className="flex gap-5">
						<a href="#privacy" className="transition hover:text-gray-300">Privacy</a>
						<a href="#terms" className="transition hover:text-gray-300">Terms</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

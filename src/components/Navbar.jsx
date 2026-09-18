import { useState } from "react";
import { FiHeart, FiMenu, FiShoppingBag, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const navigation = [
	{ label: "Home", to: "/" },
	{ label: "Shop", to: "/shop" },
	{ label: "Categories", to: "/category" },
	{ label: "About", to: "/about" },
	{ label: "Contact", to: "/contact" },
];

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const { itemCount } = useCart();

	const closeMenu = () => setMenuOpen(false);

	return (
		<header className="relative z-50 bg-[#fffaf8] text-gray-900">
			<div className="bg-gray-900 px-6 py-2 text-center text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white">
				Free shipping on orders over $50
			</div>

			<nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-8">
				<Link to="/" onClick={closeMenu} className="group shrink-0">
					<span className="block font-serif text-2xl font-bold leading-none tracking-tight text-gray-900">
						Luma<span className="text-pink-500">.</span>
					</span>
					<span className="mt-1 block text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-gray-500">
						Skin, simplified
					</span>
				</Link>

				<div className="hidden items-center gap-8 lg:flex">
					{navigation.map(({ label, to }) => (
						<NavLink
							key={to}
							to={to}
							className={({ isActive }) =>
								`relative py-2 text-sm font-semibold transition after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-pink-500 after:transition-transform hover:text-pink-500 hover:after:scale-x-100 ${
									isActive ? "text-pink-500 after:scale-x-100" : "text-gray-600"
								}`
							}
						>
							{label}
						</NavLink>
					))}
				</div>

				<div className="flex items-center gap-2">
					<button
						type="button"
						aria-label="Wishlist"
						className="hidden h-10 w-10 items-center justify-center rounded-full text-gray-700 transition hover:bg-pink-50 hover:text-pink-500 sm:flex"
					>
						<FiHeart size={19} />
					</button>
					<Link
						to="/cart"
						aria-label="Shopping cart"
						className="relative flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition hover:bg-pink-50 hover:text-pink-500"
					>
						<FiShoppingBag size={20} />
						<span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-pink-500 px-1 text-[0.6rem] font-bold text-white">
							{itemCount}
						</span>
					</Link>
					<button
						type="button"
						aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
						aria-expanded={menuOpen}
						onClick={() => setMenuOpen((isOpen) => !isOpen)}
						className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition hover:bg-pink-50 hover:text-pink-500 lg:hidden"
					>
						{menuOpen ? <FiX size={21} /> : <FiMenu size={21} />}
					</button>
				</div>
			</nav>

			{menuOpen && (
				<div className="border-t border-pink-100 bg-white px-6 py-4 shadow-lg lg:hidden">
					<div className="mx-auto flex max-w-7xl flex-col gap-1">
						{navigation.map(({ label, to }) => (
							<NavLink
								key={to}
								to={to}
								onClick={closeMenu}
								className={({ isActive }) =>
									`rounded-xl px-4 py-3 text-sm font-semibold transition ${
										isActive ? "bg-pink-50 text-pink-500" : "text-gray-700 hover:bg-gray-50"
									}`
								}
							>
								{label}
							</NavLink>
						))}
					</div>
				</div>
			)}
		</header>
	);
}

export default Navbar;

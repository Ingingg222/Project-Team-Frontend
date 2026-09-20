import { useState } from "react";
import { FiHeart, FiLogIn, FiMenu, FiShoppingBag, FiX } from "react-icons/fi";
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
		<header className="z-50 bg-pink-100 text-gray-900 relative">
			

			<nav className="gap-6 px-6 py-5 mx-auto max-w-7xl justify-between flex items-center lg:px-8">
				<Link to="/" onClick={closeMenu} className="group shrink-0">
					<span className="font-serif text-2xl font-bold text-gray-900 block leading-none tracking-tight">
						M & L Cusmetic<span className="text-pink-500"></span>
					</span>
					
				</Link>

				<div className="gap-8 hidden items-center lg:flex">
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

				<div className="gap-2 flex items-center">
					<button
						type="button"
						aria-label="Wishlist"
						className="h-10 w-10 justify-center rounded-full text-gray-700 hidden items-center transition hover:bg-pink-50 hover:text-pink-500 sm:flex"
					>
						<FiHeart size={19} />
					</button>
					<Link
						to="/cart"
						aria-label="Shopping cart"
						className="h-10 w-10 justify-center rounded-full text-gray-700 relative flex items-center transition hover:bg-pink-50 hover:text-pink-500"
					>
						<FiShoppingBag size={20} />
						<span className="px-1 top-0 h-4 min-w-4 justify-center rounded-full bg-pink-500 text-[0.6rem] font-bold text-white absolute right-0 flex items-center">
							{itemCount}
						</span>
					</Link>
					<Link
						to="/login"
						className="gap-2 px-4 py-2 rounded-full bg-gray-900 text-sm font-semibold text-white inline-flex items-center transition hover:bg-pink-500"
					>
						<FiLogIn size={16} />
						Sign in
					</Link>
					<button
						type="button"
						aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
						aria-expanded={menuOpen}
						onClick={() => setMenuOpen((isOpen) => !isOpen)}
						className="h-10 w-10 justify-center rounded-full text-gray-700 flex items-center transition hover:bg-pink-50 hover:text-pink-500 lg:hidden"
					>
						{menuOpen ? <FiX size={21} /> : <FiMenu size={21} />}
					</button>
				</div>
			</nav>

			{menuOpen && (
				<div className="px-6 py-4 border-t border-pink-100 bg-white shadow-lg lg:hidden">
					<div className="flex-col gap-1 mx-auto max-w-7xl flex">
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

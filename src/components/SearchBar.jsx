import { FiSearch, FiX } from "react-icons/fi";

function SearchBar({ value, onChange, placeholder = "Search skincare products..." }) {
	return (
		<div className="group relative w-full">
			<label htmlFor="product-search" className="sr-only">
				Search skincare products
			</label>
			<FiSearch
				aria-hidden="true"
				className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition group-focus-within:text-pink-500"
				size={19}
			/>
			<input
				id="product-search"
				type="search"
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className="h-14 w-full rounded-2xl border border-gray-200 bg-white pl-12 pr-12 text-sm text-gray-800 shadow-sm outline-none transition placeholder:text-gray-400 hover:border-pink-200 focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
			/>
			{value && (
				<button
					type="button"
					aria-label="Clear search"
					onClick={() => onChange({ target: { value: "" } })}
					className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-gray-400 transition hover:bg-pink-50 hover:text-pink-500"
				>
					<FiX size={17} />
				</button>
			)}
		</div>
	);
}

export default SearchBar;

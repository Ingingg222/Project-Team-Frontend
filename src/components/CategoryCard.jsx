import { Link } from "react-router-dom";

function CategoryCard({ name, query, product, count }) {
	if (!product) return null;

	return (
		<Link
			to={`/category?name=${query || name}`}
			className="group relative isolate block aspect-[4/5] overflow-hidden rounded-2xl bg-gray-200 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
		>
			<img
				src={product.image}
				alt={name}
				className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/10 to-transparent" />

			<div className="absolute inset-x-0 bottom-0 p-4 text-white md:p-5">
				<p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-pink-200">
					Skincare essentials
				</p>
				<div className="mt-2 flex items-end justify-between gap-3">
					<div>
						<h3 className="font-serif text-xl font-bold leading-tight md:text-2xl">
							{name}
						</h3>
						{count && <p className="mt-1 text-xs text-white/75">{count}</p>}
					</div>
					<span
						aria-hidden="true"
						className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-lg text-gray-900 transition group-hover:bg-pink-500 group-hover:text-white"
					>
						→
					</span>
				</div>
			</div>
		</Link>
	);
}

export default CategoryCard;

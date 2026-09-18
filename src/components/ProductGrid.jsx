import ProductCard from "./ProductCard";

function ProductGrid({ products = [], emptyMessage = "No products found." }) {
	if (products.length === 0) {
		return (
			<div className="border-y border-dashed border-pink-200 py-20 text-center">
				<p className="font-serif text-2xl font-bold text-gray-800">Nothing here yet</p>
				<p className="mt-2 text-sm text-gray-500">{emptyMessage}</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
}

export default ProductGrid;

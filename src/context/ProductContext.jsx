import { createContext, useContext } from "react";
import { ProductData } from "../data/ProductData";

const ProductContext = createContext(null);

const normalizeCategory = (value = "") =>
	value.trim().toLowerCase().replace(/\s+/g, " ");

function ProductProvider({ children }) {
	const categories = [
		"All",
		...new Set(ProductData.map((product) => product.category.trim()).filter(Boolean)),
	];

	const getProductById = (productId) =>
		ProductData.find((product) => product.id === Number(productId));

	const filterProducts = ({ search = "", category = "All" } = {}) => {
		const searchValue = search.trim().toLowerCase();

		return ProductData.filter((product) => {
			const searchableText = `${product.name} ${product.brand} ${product.category}`.toLowerCase();
			const searchMatch = !searchValue || searchableText.includes(searchValue);
			const categoryMatch =
				category === "All" ||
				normalizeCategory(product.category) === normalizeCategory(category);

			return searchMatch && categoryMatch;
		});
	};

	return (
		<ProductContext.Provider
			value={{
				products: ProductData,
				categories,
				getProductById,
				filterProducts,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
}

function useProducts() {
	const context = useContext(ProductContext);

	if (!context) {
		throw new Error("useProducts must be used inside ProductProvider");
	}

	return context;
}

export { ProductProvider, useProducts };

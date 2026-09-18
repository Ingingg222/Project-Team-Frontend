import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);
const storageKey = "luma-cart";

function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState(() => {
		try {
			return JSON.parse(localStorage.getItem(storageKey)) || [];
		} catch {
			return [];
		}
	});

	useEffect(() => {
		localStorage.setItem(storageKey, JSON.stringify(cartItems));
	}, [cartItems]);

	const addToCart = (product) => {
		setCartItems((currentItems) => {
			const existingItem = currentItems.find((item) => item.id === product.id);

			if (existingItem) {
				return currentItems.map((item) =>
					item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
				);
			}

			return [...currentItems, { ...product, quantity: 1 }];
		});
	};

	const updateQuantity = (productId, quantity) => {
		if (quantity <= 0) {
			setCartItems((currentItems) => currentItems.filter((item) => item.id !== productId));
			return;
		}

		setCartItems((currentItems) =>
			currentItems.map((item) =>
				item.id === productId ? { ...item, quantity } : item
			)
		);
	};

	const removeFromCart = (productId) => {
		setCartItems((currentItems) => currentItems.filter((item) => item.id !== productId));
	};

	const clearCart = () => setCartItems([]);
	const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
	const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

	return (
		<CartContext.Provider
			value={{
				cartItems,
				itemCount,
				subtotal,
				addToCart,
				updateQuantity,
				removeFromCart,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

function useCart() {
	const context = useContext(CartContext);

	if (!context) {
		throw new Error("useCart must be used inside CartProvider");
	}

	return context;
}

export { CartProvider, useCart };

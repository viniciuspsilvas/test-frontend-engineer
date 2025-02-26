import { create } from "zustand";
import { Product } from "@/gql/graphql";

// Extend the Product type to include a quantity field
interface CartProduct extends Product {
  quantity: number;
}

// Define the state and actions for the cart
interface CartState {
  cart: CartProduct[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

// Create the Zustand store
export const useCartStore = create<CartState>((set) => ({
  cart: [], // Initial state: empty cart

  // Add a product to the cart
  addToCart: (product) =>
    set((state) => {
      // Check if the product is already in the cart
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        // If the product exists, increment its quantity
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }

      // If the product is not in the cart, add it with a quantity of 1
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),

  // Remove a product from the cart
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id)
    })),

  // Clear the entire cart
  clearCart: () => set({ cart: [] })
}));

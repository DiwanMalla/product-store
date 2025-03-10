/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

type Product = {
  _id: string;
  name: string;
  price: string;
  image: string;
};

interface ProductStore {
  products: Product[];
  setProducts: (products: Product[]) => void;
  createProduct: (
    newProduct: Product
  ) => Promise<{ success: boolean; message: string }>;
  fetchProduct: () => Promise<void>;
  deleteProduct: (id: string) => Promise<{ success: boolean; message: string }>;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),

  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return { success: false, message: "Please fill in all fields." };
    }

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) {
        throw new Error("Failed to create product");
      }

      const data = await res.json();
      set((state) => ({ products: [...state.products, data.data] }));
      return { success: true, message: "Added successfully" };
    } catch (error) {
      return {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      };
    }
  },

  fetchProduct: async () => {
    try {
      const res = await fetch("/api/products");
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await res.json();
      set({ products: data.data });
    } catch (error) {
      console.error("Error fetching products:", error);
      // Handle error case here (e.g., show a message to the user)
    }
  },

  deleteProduct: async (id) => {
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to delete product");
      }

      set((state) => ({
        products: state.products.filter((product) => product._id !== id),
      }));
      return { success: true, message: "Product deleted successfully" };
    } catch (error) {
      console.error("Error deleting product:", error);
      return {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      };
    }
  },
}));

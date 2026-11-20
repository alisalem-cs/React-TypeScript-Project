import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { WishlistState } from "../types";

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set) => ({
      items: [],

      toggleWishlist: (product) =>
        set((state) => {
          const exists = state.items.some(
            (item) => item.id === product.id
          );

          if (exists) {
            return {
              items: state.items.filter(
                (item) => item.id !== product.id
              ),
            };
          }

          return {
            items: [...state.items, product],
          };
        }),
    }),
    {
      name: "apex-wishlist-storage",
    }
  )
);
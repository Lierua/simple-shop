"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

const AddItem = create(
  persist(
    (set, get) => ({
      basketItems: [],

      addItem: (product) => {
        const current = get().basketItems;
        const exists = current.some((item) => item.id === product.id);

        if (exists) return;

        set({
          basketItems: [...current, product],
        });
      },
      removeItem: (id) => {
        set({
          basketItems: get().basketItems.filter((item) => item.id !== id),
        });
      },

      isInBasket: (id) => get().basketItems.some((item) => item.id === id),
    }),
    {
      name: "basket-storage",
    }
  )
);

export default AddItem;

import { create } from "zustand";
import { cartItem } from "@/interfaces/product";
import { persist } from "zustand/middleware";
import { countCartTotal } from "lib/utils";

type Store = {
  cart: cartItem[];
  total: number;
  setTotal: (cart: cartItem[]) => void;
  add: (product: cartItem) => void;
  remove: (productID: string) => void;
};

export const useCart = create<Store>()(
  persist(
    (set, get) => ({
      cart: [],
      total: 0,
      setTotal: (cart: cartItem[]) => {
        set((state) => ({ total: countCartTotal(cart) }));
      },
      add: (product: cartItem) => {
        set((state) => {
          if (state.cart.findIndex((e) => e.id === product.id) > -1) {
            const updatedArr = state.cart.map((item) => {
              if (item.id === product.id) {
                item.quantity += product.quantity;
                return item;
              } else {
                return item;
              }
            });
            return { cart: [...updatedArr] };
          } else {
            return { cart: [...state.cart, product] };
          }
        });
      },
      remove: (productID: string) => {
        set((state) => ({
          cart: [...state.cart.filter((item) => item.id !== productID)],
        }));
      },
    }),
    { name: "cart" }
  )
);

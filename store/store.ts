import { create } from "zustand";
import { RecordModel } from "pocketbase";
import { cartItem } from "@/interfaces/product";

type Store = {
  cart: cartItem[];
  add: (product: cartItem) => void;
  remove: (productID: string) => void;
};

export const useCart = create<Store>()((set) => ({
  cart: [],
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
}));

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cartItem } from "@/interfaces/product";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function countCartTotal(array: cartItem[]) {
  let total = 0;
  array.forEach((item) => {
    if (item.quantity) {
      total += item.quantity * item.price;
    } else {
      total += item.price;
    }
  });
  return total;
}

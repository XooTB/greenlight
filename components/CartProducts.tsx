"use client";
import { useCart } from "@/store/store";
import React from "react";
import CartProductView from "./CartProductView";

const CartProducts = () => {
  const { cart } = useCart();
  return (
    <tbody>
      {cart?.map((item, i) => (
        <CartProductView product={item} key={i} />
      ))}
    </tbody>
  );
};

export default CartProducts;

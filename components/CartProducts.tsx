"use client";
import { useCart } from "@/store/store";
import React, { useEffect, useState } from "react";
import CartProductView from "./CartProductView";

const CartProducts = () => {
  const { cart } = useCart();
  const [isClient, setIsClient] = useState<boolean>(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <tbody suppressHydrationWarning={true}>
      {isClient &&
        cart?.map((item, i) => <CartProductView product={item} key={i} />)}
    </tbody>
  );
};

export default CartProducts;

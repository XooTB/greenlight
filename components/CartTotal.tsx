"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useCart } from "store/store";

const CartTotal = () => {
  const { cart, total, setTotal } = useCart();

  useEffect(() => {
    setTotal(cart);
  }, [cart]);

  return (
    <div className="px-5 py-10 flex justify-end gap-10">
      <div className="font-poppins flex flex-col items-end">
        <h1 className="font-semibold text-xl text-black">
          Sub-total: ${total}
        </h1>
        <p className="text-grey text-sm">
          Shipping cost will be calculated later
        </p>
      </div>
      <Link href="/cart/checkout" className="">
        <button className="bg-green text-white font-poppins px-5 py-2 rounded-lg font-semibold hover:bg-slate-500">
          Check-out
        </button>
      </Link>
    </div>
  );
};

export default CartTotal;

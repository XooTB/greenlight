"use client";
import React, { useEffect } from "react";
import { useCart } from "store/store";
import { countCartTotal } from "lib/utils";

const CartTotal = () => {
  const { cart } = useCart();
  let total;
  useEffect(() => {
    total = countCartTotal(cart);
  }, []);

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
      <button className="bg-green text-white font-poppins px-5 py-1 rounded-lg font-semibold">
        Check-out
      </button>
    </div>
  );
};

export default CartTotal;

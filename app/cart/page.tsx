import React from "react";
import Link from "next/link";
import CartProducts from "components/CartProducts";
import CartTotal from "components/CartTotal";

const Page = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center pt-10">
        <h1 className="text-3xl font-poppins font-medium">Your cart items</h1>
        <Link href="/products" className="text-green underline pt-10">
          <p>Back to shopping</p>
        </Link>
      </div>
      <div className="px-32">
        <table className="w-full border-b">
          <thead className="font-poppins font-medium text-black border-b-[1px] flex justify-between">
            <tr className="w-full font-poppins font-medium text-black border-b-[1px] flex justify-between">
              <th className="w-[60%] pb-7 text-left">Product</th>
              <th className="pb-7">Price</th>
              <th className="pb-7">Quantity</th>
              <th className="pb-7">Total</th>
            </tr>
          </thead>
          <CartProducts />
        </table>
        <CartTotal />
      </div>
    </div>
  );
};

export default Page;

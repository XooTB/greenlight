import React from "react";
import { cartItem } from "@/interfaces/product";

interface CheckoutProductProps {
  product: cartItem;
}

const CheckoutProduct = ({ product }: CheckoutProductProps) => {
  return (
    <div className="flex">
      <img src={product.imageUrl} alt="product_img" className=" w-52" />
      <div className="font-poppins text-black">
        <h1 className="text-2xl pt-5">{product.title}</h1>
        <p className="text-xl font-semibold text-green pt-5">
          ${product.price}
        </p>
        <p>{product.quantity} Pcs</p>
      </div>
    </div>
  );
};

export default CheckoutProduct;

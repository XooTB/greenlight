import React from "react";
import { cartItem } from "@/interfaces/product";
import { useCart } from "@/store/store";

interface cartProductViewProps {
  product: cartItem;
}

const CartProductView = ({ product }: cartProductViewProps) => {
  const { remove } = useCart();
  const handleClick = () => {
    remove(product.id);
  };
  return (
    <tr className="font-poppins font-medium text-black border-b-[1px] flex justify-between items-center px-2">
      <td className="min-w-[60%] pb-3">
        <div className="flex">
          <img src={product.imageUrl} className="w-52" />
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-2xl">{product.title} GreenLight</h2>
            <button
              className="text-green underline hover:text-red-500 font-medium text-sm"
              onClick={handleClick}
            >
              Remove
            </button>
          </div>
        </div>
      </td>
      <td className="pb-3 font-medium">${product.price}</td>
      <td className="pb-3">{product.quantity}</td>
      <td className="pb-3 font-semibold">
        ${product.price * product.quantity}
      </td>
    </tr>
  );
};

export default CartProductView;

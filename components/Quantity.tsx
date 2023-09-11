import React, { useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface quantityProps {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
}

const Quantity = ({ quantity, setQuantity }: quantityProps) => {
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex justify-center flex-col w-1/3  py-2 font-poppins font-medium">
      <p className="text-center font-semibold">Quantity</p>
      <div className="flex items-center justify-center gap-5 border-2 border-green text-green w-full">
        <button
          onClick={handleDecrement}
          className="text-red-600 hover:bg-gray-200 w-1/4 px-2 py-2"
        >
          -
        </button>
        <p className="w-2/4 text-center text-black">{quantity}</p>
        <button
          onClick={handleIncrement}
          className="hover:bg-gray-200 w-1/4 py-2 px-2"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Quantity;

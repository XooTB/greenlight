import React, { useState } from "react";

const Quantity = () => {
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
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
        <p className="w-2/4 text-center text-black">{count}</p>
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

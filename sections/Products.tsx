"use client";

import React, { useEffect } from "react";
import ProductCard from "components/ProductCard";
import useListProduct from "hooks/useListProduct";

const Products = () => {
  const { list, isLoading, data } = useListProduct();

  useEffect(() => {
    list();
  }, []);
  return (
    <div className="w-full bg-white min-h-[500px] text-black py-20">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-blue text-3xl font-poppins font-medium">
          Products
        </h1>
        <p className="text-grey text-base font-medium">
          Order it for you or for your beloved ones{" "}
        </p>
      </div>
      <div className="grid grid-cols-4 px-28 gap-5 mt-10">
        {data?.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

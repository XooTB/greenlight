"use client";
import React, { useEffect } from "react";
import useListProduct from "hooks/useListProduct";
import ProductCard from "components/ProductCard";

const Populars = () => {
  const { data, isLoading, list } = useListProduct();
  useEffect(() => {
    list(4);
  }, []);
  return (
    <div className="bg-white h-full py-10">
      <div className="flex flex-col items-center font-poppins">
        <h1 className="text-blue text-3xl font-medium">Populars</h1>
        <p className="text-grey">Our top selling product that you may like</p>
      </div>
      <div className="my-10 grid grid-cols-4 px-20 gap-5">
        {data?.map((item) => (
          <ProductCard product={item} />
        ))}
      </div>
    </div>
  );
};

export default Populars;

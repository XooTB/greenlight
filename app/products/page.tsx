"use client";
import React from "react";
import useListProduct from "hooks/useListProduct";
import ProductCard from "components/ProductCard";
import { useEffect } from "react";

const page = () => {
  const { isLoading, data, list } = useListProduct();

  useEffect(() => {
    list(8);
  }, []);

  return (
    <div className="min-h-screen">
      <h1 className="text-center text-3xl font-poppins pt-5 text-blue font-semibold">
        Discover our offerings
      </h1>
      <div className="grid grid-cols-4 gap-5 px-10 py-14">
        {data?.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;

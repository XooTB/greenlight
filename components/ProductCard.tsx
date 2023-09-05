import React from "react";
import { ProductCardProps } from "@/interfaces/home";
import useFile from "hooks/useFile";
import Link from "next/link";

const ProductCard = ({ product }: any | ProductCardProps) => {
  const imageUrl = useFile(product, product.image);

  return (
    <div className="bg-white border-[1px] px-1 py-3 flex flex-col justify-center ">
      <Link href={`/products/${product.id}`}>
        <img src={imageUrl} alt="product-image" className="" />
        <h1 className="px-2 hover:text-green transition duration-200">
          {product.title}
        </h1>
      </Link>
      <p className="px-2">${product.price}</p>
    </div>
  );
};

export default ProductCard;

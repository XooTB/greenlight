"use client";
import React, { useEffect, useState } from "react";
import { ShoppingCartOutlined, Add } from "@mui/icons-material";
import useGetProductDetails from "hooks/useGetProductDetails";
import useFile from "hooks/useFile";
import Quantity from "components/Quantity";
import OrderTypeForm from "components/OrderTypeForm";
import { useCart } from "@store/store";
import { cartItem } from "@/interfaces/product";

interface productPageProps {
  params: { productID: string };
}

const page = ({ params }: productPageProps) => {
  const ID = params.productID;
  const { isLoading, data, getDetails } = useGetProductDetails();
  const imageUrl = useFile(data, data?.image);
  const [quantity, setQuantity] = useState<number>(1);
  const { add } = useCart();

  useEffect(() => {
    getDetails(ID);
  }, []);

  const handleAddToCart = () => {
    const item: cartItem = {
      id: ID,
      title: data?.title,
      price: data?.price,
      imageUrl,
      quantity,
    };
    add(item);
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 px-20 py-10 flex flex-col items-end">
        <img src={imageUrl} alt="product_img" className="w-full px-5" />
        <p className="font-bold font-poppins text-center text-black">
          All hand-made with natural soy wax, Candleaf is made for your pleasure
          moments.
        </p>
      </div>
      <div className="w-1/2">
        <div className="py-5">
          <h1 className="text-2xl font-poppins text-black font-medium">
            {data?.title} By GreenLight
          </h1>
        </div>
        <div className="">
          <div className="w-1/2">
            <p className="text-green text-xl font-medium mb-5">
              ${data?.price}
            </p>
            <Quantity quantity={quantity} setQuantity={setQuantity} />
          </div>
          <div className="w-1/2">
            <OrderTypeForm />
            <button
              className="bg-green text-white px-5 py-2 mt-5 hover:bg-grey rounded-md"
              onClick={handleAddToCart}
            >
              <ShoppingCartOutlined className="text-white" /> Add to Cart
            </button>
          </div>
        </div>
        <div className="text-grey border px-3 py-2 mt-5">
          <p>
            <span className="font-semibold text-blue">Wax:</span> Top quality
            wax that provides a smokeless consistent burn.
          </p>
          <p>
            <span className="font-semibold text-blue">Fragrance:</span> Premium
            quanity ingredients with natural essential oils.
          </p>
          <p>
            <span className="font-semibold text-blue">Burning Time:</span> 70-75
            Hours
          </p>
          <p>
            <span className="font-semibold text-blue">Dimentions:</span> 10cm X
            15cm
          </p>
          <p>
            <span className="font-semibold text-blue">Weight:</span> 400g
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;

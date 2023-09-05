"use client";
import PocketBase from "pocketbase";
import { useState } from "react";
import { RecordModel } from "pocketbase";

const useGetProductDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<RecordModel | undefined>();
  const pb = new PocketBase(process.env.NEXT_PUBLIC_API);

  const getDetails = async (ID: string) => {
    setIsLoading(true);
    const response = await pb.collection("products").getOne(ID);
    setData(response);
    setIsLoading(false);
  };

  return { isLoading, data, getDetails };
};

export default useGetProductDetails;

import PocketBase from "pocketbase";
import { useState } from "react";
import { RecordModel } from "pocketbase";

const useListProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<RecordModel[] | undefined>();

  const pb = new PocketBase(process.env.NEXT_PUBLIC_API);

  const list = async (max: number) => {
    setIsLoading(true);
    const response = await pb.collection("products").getList(1, max, {
      sort: "-created",
    });
    setData(response.items);
    setIsLoading(false);
  };

  return { list, isLoading, data };
};

export default useListProduct;

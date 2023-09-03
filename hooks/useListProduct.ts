import PocketBase from "pocketbase";
import { useState } from "react";
import { RecordModel } from "pocketbase";

const useListProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<RecordModel[] | undefined>();

  const pb = new PocketBase(process.env.NEXT_PUBLIC_API);

  const list = async () => {
    setIsLoading(true);
    const records = await pb.collection("products").getFullList({
      sort: "-created",
    });
    setData(records);
    setIsLoading(false);
  };

  return { list, isLoading, data };
};

export default useListProduct;

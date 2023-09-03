import PocketBase from "pocketbase";

const useFile = (record: any, file: string) => {
  const pb = new PocketBase(process.env.NEXT_PUBLIC_API);

  const url = pb.files.getUrl(record, file);

  return url;
};

export default useFile;

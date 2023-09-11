import { RecordModel } from "pocketbase";

export interface cartItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
  subscription?: boolean;
  weeks?: number;
}

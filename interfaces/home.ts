import { StaticImageData } from "next/image";

export interface ProductCardProps {
  product: {
    collectionId: string;
    collectionName: string;
    created: string;
    descripton: string;
    id: string;
    image: string;
    price: number;
    quantity: number;
    title: string;
    updated: string;
  };
}

export interface ReviewCardProps {
  name: string;
  text: string;
  rating: number;
  image: any;
}

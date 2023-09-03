import React from "react";
import { ReviewCardProps } from "@/interfaces/home";
import Image from "next/image";
import Rating from "./Rating";

const ReviewCard = ({ name, text, image, rating }: ReviewCardProps) => {
  return (
    <div className="font-poppins flex flex-col items-center justify-center bg-white h-72 w-80 rounded-lg">
      <Image src={image} alt="review_img" height={100} width={100} />
      <Rating rating={rating} />
      <h1 className="text-xl text-blue font-medium px-5 text-center">
        "{text}"
      </h1>
      <p>{name}</p>
    </div>
  );
};

export default ReviewCard;

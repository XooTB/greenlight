import React from "react";
import ReviewCard from "components/ReviewCard";
import { reviews } from "@/constants/reviews";

const Testimonials = () => {
  return (
    <div className="bg-white">
      <div className="h-full bg-green bg-opacity-10 py-20">
        <div className="font-poppins flex justify-center flex-col items-center">
          <h1 className="text-blue text-4xl font-medium">Testimonials</h1>
          <p className="text-grey font-medium">
            Some quotes from our happy customers
          </p>
        </div>
        <div className="flex justify-center gap-10 mt-10">
          {reviews?.map((review) => (
            <ReviewCard
              name={review.name}
              text={review.text}
              image={review.image}
              rating={review.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

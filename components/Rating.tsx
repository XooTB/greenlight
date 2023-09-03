import React from "react";
import { Star, StarOutline, StarHalf } from "@mui/icons-material";
import { SvgIcon } from "@mui/material";

interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => {
  let stars = [];

  for (let i = 0; i < 5; ++i) {
    if (i < rating) {
      stars.push(<Star htmlColor="#56B280" />);
    } else {
      stars.push(<StarOutline htmlColor="#5E6E89" />);
    }
  }
  return <div>{stars}</div>;
};

export default Rating;

import React from "react";

const Review = ({ review }) => {
  return (
    <div>
      <img src={review.image} alt={review.name} />
      <h4>{review.name}</h4>
      <h4>{review.job}</h4>
      <p>{review.text}</p>
    </div>
  );
};

export default Review;

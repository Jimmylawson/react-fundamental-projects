import { useState } from "react";

import Review from "./Review";
import data from "../data";

const Reviews = () => {
  const [people, setPeople] = useState(data);
  return (
    <div>
      {people.map((review) => {
        return <Review key={review.id} review={review} />;
      })}
    </div>
  );
};

export default Reviews;

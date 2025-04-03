import { useState } from "react";
import Review from "./Review";
import data from "../data";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const review = data[index];

  const checkIndex = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) return data.length - 1;

    return number;
  };

  const nextReview = () => {
    setIndex((prevIndex) => checkIndex(prevIndex + 1));
  };

  const prevReview = () => {
    setIndex((prevIndex) => checkIndex(prevIndex - 1));
  };

  //handle random
  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * (data.length - 1));
    setIndex(randomIndex);
  };
  return (
    <main>
      <section className="reviews-container">
        <Review
          key={review.id}
          {...review}
          prev={prevReview}
          next={nextReview}
          randomSelect={handleRandom}
        />
      </section>
    </main>
  );
};

export default Reviews;

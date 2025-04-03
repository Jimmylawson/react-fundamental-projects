import { FaQuoteRight, FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Review = ({ image, name, job, text, prev, next, randomSelect }) => {
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span>
          <FaQuoteRight className="quote-icon" />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <h4 className="job">{job}</h4>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button onClick={prev} className="prev-btn">
          <FaAngleLeft />
        </button>
        <button onClick={next} className="next-btn">
          <FaAngleRight />
        </button>
      </div>
      <button className="btn" onClick={randomSelect}>
        Surprise me
      </button>
    </article>
  );
};

export default Review;

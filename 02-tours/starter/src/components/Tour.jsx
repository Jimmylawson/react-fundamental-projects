import { useState } from "react";

const Tour = ({ image, name, info, price }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">{price}</span>
      <div className="tour-info">
        <h3>{name}</h3>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <span className="info-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show Less" : "Read More"}
          </span>
        </p>

        <br />
        <button className="btn">Not Interested</button>
      </div>
    </article>
  );
};

export default Tour;

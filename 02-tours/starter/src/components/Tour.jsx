import React from "react";

const Tour = ({ image, name, info, price }) => {
  return (
    <div>
      <img src={image} alt="city picture" className="img" />
      <h3>{name}</h3>
      <p>{info}</p>
      <p>{price}</p>
    </div>
  );
};

export default Tour;

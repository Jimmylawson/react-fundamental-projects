import React from "react";

const Menu = ({ title, category, price, img, desc }) => {
  return (
    <section>
      <div>
        <img src={img} alt={title} />
        <p>
          {title} <span>{price}</span>
        </p>
        <p>{desc}</p>
      </div>
    </section>
  );
};

export default Menu;

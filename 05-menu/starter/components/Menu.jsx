import React from "react";

const Menu = ({ title, category, price, img, desc }) => {
  return (
    <article className="menu-item">
      <div className="item-info">
        <img src={img} alt={title} className="img" />
        <header>
          <h5>{title}</h5>
          <span className="item-price">{`$${price}`}</span>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};

export default Menu;

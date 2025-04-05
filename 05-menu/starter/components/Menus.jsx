import React from "react";
import Menu from "./Menu";
const Menus = ({ menus }) => {
  return (
    <article>
      {menus.map((item) => {
        return <Menu key={item.id} {...item} />;
      })}
    </article>
  );
};

export default Menus;

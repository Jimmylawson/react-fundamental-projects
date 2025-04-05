import React from "react";
import Menu from "./Menu";
const Menus = ({ menus }) => {
  return (
    <div className="section-center">
      {menus.map((item) => {
        return <Menu key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Menus;

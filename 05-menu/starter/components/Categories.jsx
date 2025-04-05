import React from "react";

const Categories = ({ categories, filteredItem }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button className="btn" onClick={() => filteredItem(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

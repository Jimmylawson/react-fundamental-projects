import { useState } from "react";
const SingleForm = ({ item, index, toggleComplete, deleteItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => toggleComplete(item.id)}
      />
      <span>
        {index + 1}. {item.name}
      </span>
      <button onClick={() => deleteItem(item.id)} className="remove-btn btn">
        Delete
      </button>
    </div>
  );
};

export default SingleForm;

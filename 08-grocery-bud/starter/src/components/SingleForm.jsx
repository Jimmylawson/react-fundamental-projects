import { useState } from "react";
const SingleForm = ({ item, index, toggleComplete, deleteItem }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => toggleComplete(item.id)}
      />
      <span>
        {index + 1}. {item.name}
      </span>
      <button onClick={() => deleteItem(item.id)}>Delete</button>
    </div>
  );
};

export default SingleForm;

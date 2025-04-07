import { useState } from "react";
import SingleForm from "./SingleForm";
import { nanoid } from "nanoid";
const Form = () => {
  const [InputItem, setInputItem] = useState(" ");
  const [listItems, setListItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!InputItem.trim()) return;

    const newItem = {
      id: nanoid(),
      name: InputItem,
      completed: false,
    };

    setListItems((prevItems) => [...prevItems, newItem]);
    setInputItem("");
  };

  const toggleComplete = (id) => {
    setListItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
    });
  };

  const deleteItem = (id) => {
    const newItem = listItems.filter((item) => item.id !== id);
    setListItems(newItem);
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={InputItem}
          onChange={(e) => setInputItem(e.target.value)}
        />
        <button className="btn" type="submit">
          AddItem
        </button>
      </form>
      <div>
        {listItems.map((item, index) => {
          return (
            <SingleForm
              key={item.id}
              item={item}
              index={index}
              toggleComplete={toggleComplete}
              deleteItem={deleteItem}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Form;

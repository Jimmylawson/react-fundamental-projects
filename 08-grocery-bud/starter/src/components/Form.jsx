import { useState } from "react";
import SingleForm from "./SingleForm";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Form = () => {
  const [InputItem, setInputItem] = useState(" ");
  const [listItems, setListItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!InputItem.trim()) {
      toast.error("Please enter a value.");
      return;
    }

    const newItem = {
      id: nanoid(),
      name: InputItem,
      completed: false,
    };

    setListItems((prevItems) => {
      const updatedList = [...prevItems, newItem];
      localStorage.setItem("listItems", JSON.stringify([updatedList]));
      return updatedList;
    });
    toast.success("Item added successfully!");
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
    <section className="section-center">
      <form onSubmit={handleSubmit}>
        <h4>Grocery Bud</h4>
        <div className="form-control">
          <input
            type="text"
            className="form-input"
            value={InputItem}
            onChange={(e) => setInputItem(e.target.value)}
            placeholder="e.g. eggs"
          />
          <button className="btn" type="submit">
            AddItem
          </button>
        </div>
      </form>

      <div className="items">
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
      <ToastContainer position="top-right" />
    </section>
  );
};

export default Form;

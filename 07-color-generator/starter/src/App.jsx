import { useState } from "react";
import Values from "values.js";
import SingleColor from "./components/SingleColor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css"; // make sure to import this if you're not already

const App = () => {
  const [color, setColor] = useState("#f15025");
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error("Invalid hex code");
    }
  };

  return (
    <>
      <section className="container">
        <h4>Color Generator</h4>
        <form className="color-form" onSubmit={handleSubmit}>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            type="text"
            value={color || " "}
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>

      <section className="colors">
        {colors.map((col, index) => (
          <SingleColor key={index} {...col} index={index} />
        ))}
      </section>

      <ToastContainer position="top-center" />
    </>
  );
};

export default App;

import { useState } from "react";
import { nanoid } from "nanoid";
import data from "./data";
const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (isNaN(amount) || amount < 0) {
      amount = 1;
    }

    setText(data.slice(0, amount));
  };

  return (
    <main>
      <section className="section-center">
        <h3>TIRED OF BORING LOREM IPSUM</h3>
        <form onSubmit={handleSubmit} className="lorem-form">
          <label>Paragraphs:</label>
          <input
            type="number"
            min="1"
            step="1"
            max={data.length}
            name="amount"
            onChange={(e) => setCount(e.target.value)}
            value={count}
          />

          <button className="btn" type="submit">
            Generate
          </button>
        </form>
        <article className="lorem-text">
          {text.map((para) => {
            return <p key={nanoid()}>{para}</p>;
          })}
        </article>
      </section>
    </main>
  );
};
export default App;

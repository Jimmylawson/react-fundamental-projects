import { useState } from "react";
import data from "./data";
const App = () => {
  const [people, setPeople] = useState(data);
  const [show, setShow] = useState(false);
  const clearAll = () => {
    setPeople([]);
    setShow(true);
  };

  const showPeople = () => {
    setPeople(data);
    setShow(false);
  };

  return (
    <div>
      <h1>{people.length} Birthdays Today</h1>
      <div className="container">
        {people.map((person) => {
          let { id, name, age, image } = person;
          return (
            <div className="card" key={id}>
              <img src={image} alt="person picture" className="img" />
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          );
        })}
      </div>
      <div className="button-group">
        <button className="clear" onClick={clearAll}>
          Clear All
        </button>
        <button className="clear" onClick={showPeople}>
          Show
        </button>
      </div>
    </div>
  );
};
export default App;

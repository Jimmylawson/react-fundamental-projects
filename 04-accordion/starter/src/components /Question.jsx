import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
const Question = ({ title, info, isActive, toggleQuestion }) => {
  //the user click on the icon to view the answers the plus should turn into  - and if
  //the user click on the - it should turn into plus to view only the question
  const [showAnswer, setShowAnswer] = useState(false);

  // const toggleButton = () => {
  //   setShowAnswer(!showAnswer);
  // };

  //if a current answer is selected the rest should show the questions

  return (
    <article className={`question ${isActive ? "active" : ""}`}>
      <header>
        <h3>{title}</h3>
        <button
          className={`question-btn ${isActive ? "rotate" : ""}`}
          onClick={toggleQuestion}
        >
          {isActive ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};

export default Question;

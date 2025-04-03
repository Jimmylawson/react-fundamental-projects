import Question from "./Question";
import { useState } from "react";

const Questions = ({ questions }) => {
  const [activeId, setActiveId] = useState(null);

  //if a current answer is selected the rest should show the questions
  const toggleQuestion = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <article className="container">
      {questions.map((question) => {
        return (
          <Question
            key={question.id}
            {...question}
            isActive={activeId === question.id}
            toggleQuestion={() => toggleQuestion(question.id)}
          />
        );
      })}
    </article>
  );
};

export default Questions;

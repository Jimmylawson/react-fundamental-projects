import Question from "./Question";
import { useState } from "react";
import data from "../data";

const Questions = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);

  //if a current answer is selected the rest should show the questions
  const toggleQuestion = (id) => {
    setActiveId((prev) => (prev.id === id ? null : id));
  };

  return (
    <article>
      {questions.map((question) => {
        return <Question key={question.id} {...question} />;
      })}
    </article>
  );
};

export default Questions;

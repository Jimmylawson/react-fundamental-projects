import Question from "./Question";
import { useState } from "react";
import data from "../data";
const Questions = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      {questions.map((question) => {
        return <Question key={question.id} {...question} />;
      })}
    </main>
  );
};

export default Questions;

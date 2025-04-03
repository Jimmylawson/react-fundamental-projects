import Questions from "./components /Questions";
import { useState } from "react";
import data from "./data";
const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      {/* <h1>Frequently Asked Questions</h1> */}
      <Questions questions={questions} />
    </main>
  );
};
export default App;

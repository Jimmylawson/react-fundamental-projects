import Title from "../components/Title";
import Menus from "../components/Menus";
import data from "./data";
import { useState } from "react";
const App = () => {
  const [menu, setMenu] = useState(data);

  return (
    <section>
      <Title />
      <Menus menus={menu} />
    </section>
  );
};
export default App;

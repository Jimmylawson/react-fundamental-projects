import Title from "../components/Title";
import Menus from "../components/Menus";
import data from "./data";
import { useState } from "react";
const App = () => {
  const [menu, setMenu] = useState(data);

  /
  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <div>
          <button>All</button>
          <button>Breakfast</button>
          <button>Lunch</button>
          <button>Shakes</button>
        </div>
        <Menus menus={menu} />
      </section>
    </main>
  );
};
export default App;

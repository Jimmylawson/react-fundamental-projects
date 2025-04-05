import Title from "../components/Title";
import Menus from "../components/Menus";
import data from "./data";
import { useState } from "react";
import Categories from "../components/Categories";

const allCategories = ["All", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const set = new Set();
  for (const item of menu) {
    set.add(item.category);
  }

  const filterMenu = (category) => {
    if (category === "All") {
      setMenu(data); //show all menu items
      return;
    }
    const filteredMenu = data.filter(
      (menuItem) => menuItem.category === category
    );
    setMenu(filteredMenu);
  };

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <div className="btn-container">
          <Categories categories={categories} filteredItem={filterMenu} />
        </div>
        <Menus menus={menu} />
      </section>
    </main>
  );
};
export default App;

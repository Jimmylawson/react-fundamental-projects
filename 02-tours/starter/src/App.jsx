const url = "https://www.course-api.com/react-tours-project";
import { useState, useEffect } from "react";
import Tours from "./components/Tours";
const App = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error occurred while fetching data");
        }
        const data = await response.json();

        setTours(data);
      } catch (ex) {
        console.log("An error: " + ex.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h2 className="header">Our Tour</h2>
      <div>
        <Tours tours={tours} />
      </div>
    </div>
  );
};
export default App;

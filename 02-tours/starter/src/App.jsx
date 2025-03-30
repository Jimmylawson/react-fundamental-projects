const url = "https://www.course-api.com/react-tours-project";
import { useState, useEffect } from "react";
import Tours from "./components/Tours";
import Loading from "./components/Loading";
const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
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
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="title">
      <h2 className="header">Our Tour</h2>
      <div className="title-underline"></div>
      <div>
        <Tours tours={tours} />
      </div>
    </div>
  );
};
export default App;

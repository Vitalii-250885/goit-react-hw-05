import { useEffect } from "react";
import "./App.css";
import { fetchMovies } from "../../api/moves";

function App() {
  useEffect(() => {
    const load = async () => {
      const resData = await fetchMovies();
      console.log("🚀 ~ load ~ resData:", resData);
    };
    load();
  }, []);

  return <>App</>;
}

export default App;

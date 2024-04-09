import { useEffect, useState } from "react";
import "./App.css";
import { fetchMovies } from "../../api/moves";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const load = async () => {
      const resData = await fetchMovies();
      setMovies(resData);
    };
    load();
  }, []);

  return (
    <>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

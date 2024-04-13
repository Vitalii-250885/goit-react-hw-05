import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import css from "./HomePage.module.css";

import { fetchMovies } from "../../api/moves";
import MovieList from "../../components/movieList/MovieList";

const HomePage = () => {
  const location = useLocation();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const load = async () => {
      const resData = await fetchMovies();
      setMovies(resData);
    };
    load();
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Trending today</h1>
      <ul className={css["movies-list"]}>
        {movies.map(({ id, title }) => (
          <MovieList key={id} title={title} id={id} location={location} />
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

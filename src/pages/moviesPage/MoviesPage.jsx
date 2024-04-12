import { useEffect, useState } from "react";
import css from "./MoviesPage.module.css";
import { fetchMovieSearch } from "../../api/moves";
import MovieList from "../../components/movieList/MovieList";

const MoviesPage = () => {
  const [movies, setMuvies] = useState([]);

  const query = "batman";

  useEffect(() => {
    const load = async () => {
      const resData = await fetchMovieSearch(query);

      setMuvies(resData);
    };
    load();
  }, [query]);

  const handleSearchMovies = (e) => {
    e.preventDefault();
    // const value = e.target.value;
    console.log("🚀 ~ handleSearchMovies ~ e:", e);
  };

  return (
    <div className={css.container}>
      <h1>Search movies</h1>
      <form>
        <input type="text" name="search" className={css.input} />
        <button
          type="submit"
          onSubmit={handleSearchMovies}
          className={css.button}>
          Search
        </button>
      </form>
      <ul className={css["movies-list"]}>
        {movies.map(({ id, title }) => (
          <MovieList key={id} title={title} id={id} />
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;

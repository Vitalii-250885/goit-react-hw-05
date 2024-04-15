import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import css from "./MoviesPage.module.css";
import { fetchMovieSearch } from "../../api/moves";
import MovieList from "../../components/movieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query");

  const handleSearchMovies = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value;

    setSearchParams({ query: value });
  };

  useEffect(() => {
    const load = async () => {
      const resData = await fetchMovieSearch(query);

      query ? setMovies(resData) : null;
    };
    load();
  }, [query]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Search movies</h1>
      <form onSubmit={handleSearchMovies}>
        <input type="text" name="search" className={css.input} />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
      <ul className={css["movies-list"]}>
        <MovieList movies={movies} />
      </ul>
    </div>
  );
};

export default MoviesPage;

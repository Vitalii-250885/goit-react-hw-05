import { Link, useLocation } from "react-router-dom";

import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link
            to={`/movies/${id}`}
            className={css.link}
            state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default MovieList;

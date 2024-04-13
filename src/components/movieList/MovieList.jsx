import { Link } from "react-router-dom";

import css from "./MovieList.module.css";

const MovieList = ({ title, id, location }) => {
  return (
    <li>
      <Link
        to={`/movies/${id}`}
        className={css.link}
        state={{ from: location }}>
        {title}
      </Link>
    </li>
  );
};

export default MovieList;

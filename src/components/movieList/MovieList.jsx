import { Link } from "react-router-dom";

import css from "./MovieList.module.css";

const MovieList = ({ title, id }) => {
  return (
    <li>
      <Link to={`/movies/${id}`} className={css.link}>
        {title}
      </Link>
    </li>
  );
};

export default MovieList;

// import { useParams } from "react";
import { Link } from "react-router-dom";

import css from "./MovieList.module.css";

const MovieList = ({ title }) => {
  //   const { movieId } = useParams();

  return (
    <li>
      <Link to="/movies/:movieId" className={css.link}>
        {title}
      </Link>
    </li>
  );
};

export default MovieList;

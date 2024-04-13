import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import css from "./MovieReviews.module.css";

import { fetchMovieReviews } from "../../api/moves";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const load = async () => {
      const resData = await fetchMovieReviews(movieId);

      setReviews(resData);
    };
    load();
  }, [movieId]);

  return (
    <div className={css.container}>
      <h3 className={css.title}>Reviews</h3>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id} className={css.item}>
            <p className={css.name}>{author}</p>
            <p className={css.text}>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;

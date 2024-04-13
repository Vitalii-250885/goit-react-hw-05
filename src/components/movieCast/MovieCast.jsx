import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import css from "./MovieCast.module.css";

import { fetchMovieCast } from "../../api/moves";

const defaultImg = "/user.jpg";

const MovieCast = () => {
  const { movieId } = useParams();

  const [actors, setActors] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const load = async () => {
      const resData = await fetchMovieCast(movieId);

      setActors(resData.cast);
    };
    load();
  }, [movieId]);

  return (
    <div className={css.container}>
      <h3 className={css.title}>Cast</h3>
      <ul className={css["cast-list"]}>
        {actors.map(({ name, id, profile_path, character }) => (
          <li key={id}>
            <div className={css.card}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : defaultImg
                }
                alt={name}
                className={css.image}
              />

              <h4 className={css.name}>{name}</h4>
              <p className={css.character}>
                <span className={css["character-title"]}>Character: </span>
                {character}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;

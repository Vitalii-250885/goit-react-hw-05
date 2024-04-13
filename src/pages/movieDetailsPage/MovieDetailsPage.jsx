import { useEffect, useRef, useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import {
  useParams,
  Link,
  NavLink,
  Outlet,
  useLocation,
} from "react-router-dom";

import { fetchAboutMovie } from "../../api/moves";

import clsx from "classix";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [image, setImage] = useState("");
  const [backDrop, setBackDrop] = useState("");
  const [title, setTitle] = useState("");
  const [dateStr, setDateStr] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [overview, setOverview] = useState("");
  const [genres, setGenres] = useState([]);
  const [isShow, setIsShow] = useState(false);

  const dateMs = Date.parse(dateStr);
  const date = new Date(dateMs);
  const year = date.getFullYear();

  const userScorePercentages = userScore * 10;
  const userScoreRound = Math.round(userScorePercentages);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/");

  useEffect(() => {
    const load = async () => {
      const resData = await fetchAboutMovie(movieId);
      const {
        poster_path,
        backdrop_path,
        title,
        release_date,
        vote_average,
        overview,
        genres,
      } = resData;
      setImage(poster_path);
      setTitle(title);
      setDateStr(release_date);
      setUserScore(vote_average);
      setOverview(overview);
      setGenres(genres);
      setBackDrop(backdrop_path);
    };
    load();
  }, [movieId]);

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isShow && isActive && css.active);
  };

  const handleShowInfo = () => {
    setIsShow(true);
  };

  const defaultImg = "/poster.jpg";

  return (
    <div
      className={css.container}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${backDrop})`,
      }}>
      <Link to={backLinkLocationRef.current} className={css["go-back-button"]}>
        ← Go back
      </Link>

      <div className={css.info}>
        <div className={css["image-section"]}>
          <img
            src={image ? `https://image.tmdb.org/t/p/w500${image}` : defaultImg}
            alt=""
            className={css.image}
          />

          <h3 className={css["information-title"]}>Additional information</h3>
          <ul className={css["information-list"]}>
            <li className={css["information-item"]}>
              <NavLink
                to="cast"
                onClick={handleShowInfo}
                className={buildLinkClass}>
                Cast
              </NavLink>
            </li>
            <li className={css["information-item"]}>
              <NavLink
                to="reviews"
                onClick={handleShowInfo}
                className={buildLinkClass}>
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={css.description}>
          <h2 className={css.title}>
            {title} ({year})
          </h2>
          <p className={css.score}>
            {<AiTwotoneStar className={css.star} />} {userScoreRound}%
          </p>
          <div className={css.overview}>
            <h3 className={css.subtitle}>Overview</h3>
            <p>{overview}</p>
          </div>
          <div className={css.genres}>
            <p>Genres:</p>
            <ul className={css["genres-list"]}>
              {genres.map(({ id, name }) => (
                <li key={id} className={css["genres-item"]}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {isShow && <Outlet />}
    </div>
  );
};

export default MovieDetailsPage;

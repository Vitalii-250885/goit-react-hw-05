import { Routes, Route } from "react-router-dom";

import "./App.css";

import HomePage from "../../pages/homePage/HomePage";
import MoviesPage from "../../pages/moviesPage/MoviesPage";
import NotFoundPage from "../../pages/notFoundPage/NotFoundPage";
import MovieDetailsPage from "../../pages/movieDetailsPage/MovieDetailsPage";

import Navigation from "../navigation/Navigation";
import MovieCast from "../movieCast/MovieCast";
import MovieReviews from "../movieReviews/MovieReviews";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";

import Navigation from "../navigation/Navigation";
import MovieCast from "../movieCast/MovieCast";
import MovieReviews from "../movieReviews/MovieReviews";

const HomePage = lazy(() => import("../../pages/homePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/moviesPage/MoviesPage"));
const NotFoundPage = lazy(() =>
  import("../../pages/notFoundPage/NotFoundPage")
);
const MovieDetailsPage = lazy(() =>
  import("../../pages/movieDetailsPage/MovieDetailsPage")
);

import "./App.css";

function App() {
  return (
    <div className="container">
      <Suspense
        fallback={
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        }>
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
      </Suspense>
    </div>
  );
}

export default App;

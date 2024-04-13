import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDQ2ZTZkMDQwYTNhYmNhNGRmM2Y3OWE2YzM0N2JmZiIsInN1YiI6IjY2MTUzNGYxZTEwZjQ2MDE0YTM5MTJhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QUPOb4fuP8vIPxSm2Uh1OHPymgtEc_q_D-IuwGez5PE",
  },
};

const fetchMovies = async () => {
  const res = await axios("/trending/movie/day?", options);

  return res.data.results;
};

const fetchAboutMovie = async (movieId) => {
  const res = await axios(`/movie/${movieId}?`, options);

  return res.data;
};

const fetchMovieCast = async (movieId) => {
  const res = await axios(`/movie/${movieId}/credits?`, options);

  return res.data;
};

const fetchMovieReviews = async (movieId) => {
  const res = await axios(`/movie/${movieId}/reviews?`, options);

  return res.data.results;
};

const fetchMovieSearch = async (query) => {
  const res = await axios(`/search/movie?query=${query}`, options);

  return res.data.results;
};

export {
  fetchMovies,
  fetchAboutMovie,
  fetchMovieCast,
  fetchMovieReviews,
  fetchMovieSearch,
};

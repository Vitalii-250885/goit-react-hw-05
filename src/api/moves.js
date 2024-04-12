import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const fetchMovies = async () => {
  const res = await axios.get(
    "/trending/movie/day?api_key=1d46e6d040a3abca4df3f79a6c347bff"
  );

  return res.data.results;
};

const fetchAboutMovie = async (movieId) => {
  const res = await axios.get(
    `/movie/${movieId}?api_key=1d46e6d040a3abca4df3f79a6c347bff`
  );

  return res.data;
};

const fetchMovieCast = async (movieId) => {
  const res = await axios.get(
    `/movie/${movieId}/credits?api_key=1d46e6d040a3abca4df3f79a6c347bff`
  );

  return res.data;
};

const fetchMovieReviews = async (movieId) => {
  const res = await axios.get(
    `/movie/${movieId}/reviews?api_key=1d46e6d040a3abca4df3f79a6c347bff`
  );

  return res.data.results;
};

const fetchMovieSearch = async (query) => {
  const res = await axios.get(
    `/search/movie?query=${query}&api_key=1d46e6d040a3abca4df3f79a6c347bff`
  );

  return res.data.results;
};

export {
  fetchMovies,
  fetchAboutMovie,
  fetchMovieCast,
  fetchMovieReviews,
  fetchMovieSearch,
};

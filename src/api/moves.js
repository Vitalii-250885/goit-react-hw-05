import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/trending/movie";

const fetchMovies = async () => {
  const res = await axios.get("/day?api_key=1d46e6d040a3abca4df3f79a6c347bff");

  return res.data.results;
};

export { fetchMovies };

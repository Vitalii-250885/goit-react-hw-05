import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/trending/movie";

const fetchMovies = async () => {
  const res = await axios.get("/day");
  console.log("🚀 ~ fetchMovies ~ res:", res);

  return res;
};

export { fetchMovies };

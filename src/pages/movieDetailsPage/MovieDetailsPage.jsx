import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAboutMovie } from "../../api/moves";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [image, setImage] = useState("");

  useEffect(() => {
    const load = async () => {
      const resData = await fetchAboutMovie(movieId);
      const { backdrop_path } = resData;
      setImage(backdrop_path);
      console.log("🚀 ~ load ~ backdrop_path:", backdrop_path);
    };
    load();
  }, [movieId]);
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${image}`} alt="" />
    </div>
  );
};

export default MovieDetailsPage;

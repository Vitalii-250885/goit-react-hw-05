import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <Link to={"/"} className={css["go-back-button"]}>
        ← Go home page
      </Link>
      <img
        src="/1581099611064.jpg"
        alt="Page not found"
        className={css.image}
      />
    </div>
  );
};

export default NotFoundPage;

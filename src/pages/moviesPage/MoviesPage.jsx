import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  return (
    <div className={css.container}>
      <form>
        <input type="text" name="search" className={css.input} />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </div>
  );
};

export default MoviesPage;

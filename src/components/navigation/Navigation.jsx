import { NavLink } from "react-router-dom";

import clsx from "classix";

import css from "./Navigation.module.css";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={buildLinkClass} state="/">
        Home
      </NavLink>
      <NavLink to="/movies" className={buildLinkClass} state="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;

import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AppBar.module.css";

const AppBar = () => {
  const linkClassName = (link: { isActive: boolean }) => {
    const active = link.isActive ? css.active : null;
    return clsx(css.link, active);
  };

  return (
    <div className={css.appBar}>
      <nav className={css.nav}>
        <ul className={css.list}>
          <li>
            <NavLink className={linkClassName} to="/">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink className={linkClassName} to="/todos">
              Todos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AppBar;

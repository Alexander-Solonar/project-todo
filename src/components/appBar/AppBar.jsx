import { NavLink } from "react-router-dom";
import css from "./AppBar.module.css";

const AppBar = () => {
  const linkClassName = ({ isActive }) => {
    const className = isActive ? css.active : css.link;
    return className;
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

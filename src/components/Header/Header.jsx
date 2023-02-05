import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

export default function Header() {
  return (
    <div>
      <ul className={s.list}>
        <li>
          <NavLink className={s.link} to="calendar">
            Calendar Page
          </NavLink>
        </li>
        <li>
          <NavLink className={s.link} to="test">
            Test Page
          </NavLink>
        </li>
        <li>
          <NavLink className={s.link} to="login">
            Login Page
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

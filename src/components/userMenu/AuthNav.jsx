import { NavLink } from "react-router-dom"

export default function AuthNav() {
    return (
      <ul>
        <li>
          {' '}
          <NavLink to="/register">
            Registration
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink to="/login">
            Log In
          </NavLink>
        </li>
      </ul>
    );
}
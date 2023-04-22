import { NavLink } from 'react-router-dom';
import Loader from '../loader/Loader';

export default function AuthNav() {
  return (
    <Loader>
      <ul>
        <li>
          <NavLink to="/register">Registration</NavLink>
        </li>
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
      </ul>
    </Loader>
  );
}

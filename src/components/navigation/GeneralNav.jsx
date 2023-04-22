import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSlice';

const GeneralNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Main</NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default GeneralNav;

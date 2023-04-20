import { NavLink } from 'react-router-dom';

const GeneralNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            Main
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts">
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default GeneralNav;

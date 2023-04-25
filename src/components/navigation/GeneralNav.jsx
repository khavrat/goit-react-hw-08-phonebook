import { EditIcon, ViewIcon } from '@chakra-ui/icons';
import {
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSlice';

const GeneralNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <List
        ml="20px"
        color="white"
        fontSize={{ base: '1em', md: '1.2em' }}
        spacing={4}
      >
        <ListItem>
          <NavLink to="/" activeclassname="active" className="nav-link">
            <ListIcon as={ViewIcon} color="white"></ListIcon>Main
          </NavLink>
        </ListItem>
        {isLoggedIn && (
          <ListItem>
            <NavLink
              to="/contacts"
              activeclassname="active"
              className="nav-link"
            >
              <ListIcon as={EditIcon} color="white"></ListIcon>
              Contacts
            </NavLink>
          </ListItem>
        )}
      </List>
    </nav>
  );
};

export default GeneralNav;

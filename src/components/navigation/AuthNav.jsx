import { Flex, List, ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import Loader from '../loader/Loader';

export default function AuthNav() {
  return (
    <Loader>
      <List>
        {' '}
        <Flex as="nav" p="10px" alignItems="center" gap="30px">
          <ListItem>
            <NavLink to="/login" activeclassname="active" className="auth-link">
              Log In
            </NavLink>
          </ListItem>
          <li>
            <NavLink
              to="/register"
              activeclassname="active"
              className="auth-link"
            >
              Registration
            </NavLink>
          </li>
        </Flex>
      </List>
    </Loader>
  );
}

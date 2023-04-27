import { Flex, List, ListItem, useColorMode } from '@chakra-ui/react';
import Loader from '../loader/Loader';
import { NavLinkAuthStyles } from '../navigation/StylesNav';
import {
  getAuthNavColor,
  getAuthNavActivLinkColor,
} from '../colorModeSwitcher/ColorModeStyles';

export default function AuthNav() {
  const { colorMode } = useColorMode();
  const activeStyles = getAuthNavActivLinkColor(colorMode);

  return (
    <Loader>
      <List sx={getAuthNavColor(colorMode)}>
        <Flex as="nav" p="10px" alignItems="center" gap="30px">
          <ListItem>
            <NavLinkAuthStyles
              to="/login"
              colormode={colorMode}
              activeclassname={activeStyles}
            >
              Log In
            </NavLinkAuthStyles>
          </ListItem>
          <ListItem>
            <NavLinkAuthStyles
              to="/register"
              colormode={colorMode}
              activeclassname={activeStyles}
            >
              Registration
            </NavLinkAuthStyles>
          </ListItem>
        </Flex>
      </List>
    </Loader>
  );
}

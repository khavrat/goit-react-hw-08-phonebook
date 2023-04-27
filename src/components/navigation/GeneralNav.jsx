import { EditIcon, ViewIcon } from '@chakra-ui/icons';
import { List, ListIcon, ListItem, useColorMode } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSlice';
import { ColorModeSwitcher } from '../colorModeSwitcher/ColorModeSwitch';
import { getSwitcherColor } from '../colorModeSwitcher/ColorModeSwitch';
import {
  getGeneralNavColor,
  getGeneralNavActivLinkColor,
} from '../colorModeSwitcher/ColorModeSwitch';
import { NavLinkGeneralStyles } from '../navigation/StylesNav';

const GeneralNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { colorMode } = useColorMode();
  const activeStyles = getGeneralNavActivLinkColor(colorMode);

  return (
    <nav>
      <List sx={getGeneralNavColor(colorMode)}>
        <ListItem mb="40px">
          <ColorModeSwitcher sx={getSwitcherColor(colorMode)} />
        </ListItem>
        <ListItem m="0 0 20px 0">
          <NavLinkGeneralStyles
            to="/"
            colormode={colorMode}
            activeclassname={activeStyles}
          >
            <ListIcon as={ViewIcon} color="white"></ListIcon>Main
          </NavLinkGeneralStyles>
        </ListItem>
        {isLoggedIn && (
          <ListItem m="10px 0">
            <NavLinkGeneralStyles
              to="/contacts"
              colormode={colorMode}
              activeclassname={activeStyles}
            >
              <ListIcon as={EditIcon} color="white"></ListIcon>
              Contacts
            </NavLinkGeneralStyles>
          </ListItem>
        )}
      </List>
    </nav>
  );
};

export default GeneralNav;

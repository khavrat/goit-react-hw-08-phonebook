import {
  listStylesGeneralNavLight,
  listStylesGeneralNavDark,
  stylesSwitcherDark,
  stylesSwitcherLight,
  listStylesAuthNavLight,
  listStylesAuthNavDark,
} from '../../components/navigation/StylesNav';

//colorModeThemeFunctions
export const getBackgroundColor = colorMode => {
  return colorMode === 'dark' ? 'blackAlpha.600' : 'blue.600';
};

export const getBackgroundColorBase = colorMode => {
  return colorMode === 'dark' ? 'gray.800' : 'gray.50';
};

export const getInputColor = colorMode => {
  return colorMode === 'dark' ? 'whiteAlpha.200' : 'white';
};

export const getContactFieldColor = colorMode => {
  return colorMode === 'dark' ? 'blackAlpha.600' : 'green.50';
};

export const getElementsColor = colorMode => {
  return colorMode === 'dark' ? 'blue.200' : 'blue.600';
};

export const getSwitcherColor = colorMode => {
  return colorMode === 'dark' ? stylesSwitcherDark : stylesSwitcherLight;
};

export const getGeneralNavColor = colorMode => {
  return colorMode === 'dark'
    ? listStylesGeneralNavDark
    : listStylesGeneralNavLight;
};

export const getAuthNavColor = colorMode => {
  return colorMode === 'dark' ? listStylesAuthNavDark : listStylesAuthNavLight;
};

export const getGeneralNavActivLinkColor = colorMode => {
  return colorMode === 'dark'
    ? {
        background:
          'linear-gradient(116.72deg, #12161D 0.92%, rgba(33, 41, 44, 0.99) 102.86%)',
        boxShadow:
          'inset -2px -2px 2px rgba(255, 255, 255, 0.15), inset 2px 2px 2px #000000',
      }
    : {
        background:
          'linear-gradient(116.72deg, #2a67a8 0.92%, #2f70b4 58.88%, #3276bd 102.86%)',
        boxShadow:
          'inset 0px -2px 2px rgba(255, 255, 255, 0.5), inset 2px 1px 2px rgba(43, 54, 61, 0.5)',
      };
};

export const getAuthNavActivLinkColor = colorMode => {
  return colorMode === 'dark'
    ? {
        background:
          'linear-gradient(94.45deg, rgba(221, 226, 228, 0.47) -23.58%, rgba(241, 247, 251, 0.38303) 15.25%, #fefefe 101.84%)',
        boxShadow:
          '-2px -2px 2px rgba(255, 255, 255, 0.15), inset 2px 2px 2px #000000',
      }
    : {
        background:
          'linear-gradient(94.45deg, rgba(221, 226, 228, 0.47) -23.58%, rgba(241, 247, 251, 0.38303) 15.25%, #FEFEFE 101.84%)',
        boxShadow: 'inset 0px -2px 2px #FFFFFF, inset 2px 1px 2px #D4E1E8',
      };
};

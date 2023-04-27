import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const listStylesAuthNavLight = {
  background:
    'linear-gradient(94.45deg, rgba(213, 226, 233, 0.37) -23.58%, rgba(241, 247, 251, 0.38303) 5.81%, #FCFDFF 101.84%)',
  boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.25), -4px -4px 10px #FFFFFF',
  borderRadius: '10px',
};

export const listStylesAuthNavDark = {
  background: '(96.64deg, #11151D -19.36%, #151A1C 107.21%)',
  boxShadow: '2px 2px 2px #000000, -2px -2px 4px rgba(255, 255, 255, 0.15)',
  borderRadius: '10px',
};

export const listStylesGeneralNavLight = {
  background:
    'linear-gradient(99.95deg, #2764A3 -16.49%, #3378BF 103.86%, #347ECB 104.57%)',
  boxShadow: '2px 2px 6px #1B3F64, -4px -4px 4px rgba(255, 255, 255, 0.25)',
  borderRadius: '10px',
  padding: '8px',
  color: '#F7FAFC',
  fontSize: { base: 'sm', md: 'md' },
  spacing: 4,
};


export const listStylesGeneralNavDark = {
  background: '(96.64deg, #11151D -19.36%, #151A1C 107.21%)',
  boxShadow: '2px 2px 2px #000000, -2px -2px 4px rgba(255, 255, 255, 0.15)',
  borderRadius: '10px',
  padding: '8px',
  color: '#F7FAFC',
  fontSize: { base: 'sm', md: 'md' },
  spacing: 4,
};


export const NavLinkGeneralStyles = styled(NavLink)`
  color: wight;
  font-weight: bold;
  padding: 8px 12px;
  margin: 10px 0;
  border-radius: 10px;

  &.active {
    background: ${props =>
      props.colormode === 'dark'
        ? 'linear-gradient(116.72deg, #12161D 0.92%, rgba(33, 41, 44, 0.99) 102.86%)'
        : 'linear-gradient(116.72deg, #2a67a8 0.92%, #2f70b4 58.88%, #3276bd 102.86%)'};
    box-shadow: ${props =>
      props.colormode === 'dark'
        ? 'inset -2px -2px 2px rgba(255, 255, 255, 0.15), inset 2px 2px 2px #000000'
        : 'inset 0px -2px 2px rgba(255, 255, 255, 0.5), inset 2px 1px 2px rgba(43, 54, 61, 0.5)'};
  }
`;

export const NavLinkAuthStyles = styled(NavLink)`
  color: grey;
  font-weight: bold;
  padding: 8px 12px;
  margin: 10px 0;
  border-radius: 10px;

  &.active {
    color: ${props => (props.colormode === 'dark' ? 'white' : '#2B6CB0')};

    background: ${props =>
      props.colormode === 'dark'
        ? 'linear-gradient(116.72deg, #12161D 0.92%, rgba(33, 41, 44, 0.99) 102.86%)'
        : 'linear-gradient(94.45deg, rgba(221, 226, 228, 0.47) -23.58%, rgba(241, 247, 251, 0.38303) 15.25%, #FEFEFE 101.84%)'};
    box-shadow: ${props =>
      props.colormode === 'dark'
        ? 'inset -2px -2px 2px rgba(255, 255, 255, 0.15), inset 2px 2px 2px #000000'
        : 'inset 0px -2px 2px #FFFFFF, inset 2px 1px 2px #D4E1E8'};
  }
`;

export const stylesSwitcherLight = {
  background:
    'linear-gradient(99.95deg, #2764A3 -16.49%, #3378BF 103.86%, #347ECB 104.57%)',
  boxShadow: '2px 2px 6px #1B3F64, -4px -4px 4px rgba(255, 255, 255, 0.25)',
  borderRadius: '10px',
  padding: '8px',
  color: 'wight',
  fontSize: { base: 'sm', md: 'md' },
    spacing: 4,
    m: "2px",
};

export const stylesSwitcherDark = {
  background: 'linear-gradient(96.64deg, #11151D -19.36%, #151A1C 107.21%)',
  boxShadow: '2px 2px 2px #000000, -2px -2px 4px rgba(255, 255, 255, 0.15)',
  borderRadius: '10px',
  padding: '8px',
  color: 'wight',
  fontSize: { base: 'sm', md: 'md' },
  spacing: 4,
  ml: '2px',
};

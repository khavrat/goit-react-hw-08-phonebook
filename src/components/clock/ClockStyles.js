import blackClock from '../../images/blackClock.png';
import whiteClock from '../../images/whiteClock.png';

const clockStylesLight = {
  position: 'relative',
  margin: '0 auto',
  maxWidth: { base: '200px', sm: '240px', md: '400px', lg: '500px' },
  height: { base: '200px', sm: '240px', md: '400px', lg: '500px' },
  background: 'linear-gradient(135deg, #BFBEBF 15.94%, #FFFFFF 85.31%)',
  boxShadow: '6px 6px 10px #BEBEBF, -2px -2px 20px rgba(226, 225, 230, 0.25)',
  backgroundImage: `url(${blackClock})`,
  backgroundSize: 'cover',
};

const clockStylesDark = {
  position: 'relative',
  margin: '0 auto',
  maxWidth: { base: '200px', sm: '240px', md: '400px', lg: '500px' },
  height: { base: '200px', sm: '240px', md: '400px', lg: '500px' },
  background: 'linear-gradient(135deg, #BFBEBF 15.94%, #FFFFFF 85.31%)',
  boxShadow: '4px 4px 6px #BEBEBF, -2px -2px 20px rgba(226, 225, 230, 0.25)',
  backgroundImage: `url(${whiteClock})`,
  backgroundSize: 'cover',
};

export const getClockColor = colorMode => {
    return colorMode === 'dark' ? clockStylesDark : clockStylesLight;
}

export const clockTextStyles = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-40%, -100%)',
  fontSize: { base: '12px', sm: '14px', md: '18px', lg: '28px' },
  fontWeight: 'bold',
  color: '#3d3d3d',
};

export const clockStylesAfter = {
  content: '""',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '15px',
  height: '15px',
  background: 'gray',
  borderRadius: '50%',
  zIndex: '500',
};

export const arrowWrapperHrStyles = {
  width: '160px',
  height: '160px',
};
export const arrowWrapperMinStyles = {
  width: '190px',
  height: '190px',
};

export const arrowWrapperSecStyles = {
  width: '230px',
  height: '230px',
};

export const arrowsStyles = {
  display: 'flex',
  justifyContent: 'center',
  borderRadius: '50%',
};

export const arrowHrStylesAfter = {
  content: '""',
  width: { base: '6px', sm: '6px', md: '8px', lg: '8px' },
  height: { base: '50px', sm: '60px',md: '90px', lg: '110px', xl: '120px' },
  borderRadius: '6px 6px 0 0',
  backgroundColor: '#C53030',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -100%)',
  zIndex: '10',
};

export const arrowMinStylesAfter = {
  content: '""',
  width: '4px',
    height: {
        base: '95px', sm: '115px', md: '195px', lg: '240px'},
  borderRadius: '6px 6px 0 0',
  backgroundColor: 'gray',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -80%)',
  zIndex: '11',
};

export const arrowSecStylesAfter = {
  content: '""',
  width: '2px',
  height: {
    base: '110px',
    sm: '130px',
    md: '210px',
    lg: '260px',
  },
  borderRadius: '6px 6px 0 0',
  backgroundColor: 'gray',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -20%)',
  zIndex: '12',
};

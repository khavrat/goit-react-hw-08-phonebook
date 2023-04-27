import { AbsoluteCenter, Circle, Text, useColorMode } from '@chakra-ui/react';
import { useRef, useEffect } from 'react';
import {
    clockStylesAfter,
    clockTextStyles,
  arrowWrapperHrStyles,
  arrowWrapperMinStyles,
  arrowWrapperSecStyles,
  arrowsStyles,
  arrowHrStylesAfter,
  arrowMinStylesAfter,
  arrowSecStylesAfter,
  getClockColor,
} from '../clock/ClockStyles';

export const Clock = () => {
  const hrRef = useRef(null);
  const minRef = useRef(null);
  const secRef = useRef(null);
  const { colorMode } = useColorMode();
  
  useEffect(() => {
    const intervalID = setInterval(() => {
      let now = new Date();
      let hh = now.getHours() * 30 + now.getMinutes() * 0.5;
      let mm = now.getMinutes() * 6;
      let ss = now.getSeconds() * 6;

      hrRef.current.style.transform = `rotateZ(${hh}deg)`;
      minRef.current.style.transform = `rotateZ(${mm}deg)`;
      secRef.current.style.transform = `rotateZ(${ss}deg)`;
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <Circle sx={getClockColor(colorMode)} _after={clockStylesAfter}>
      <Text sx={clockTextStyles}>time to call...</Text>
      <AbsoluteCenter sx={arrowWrapperHrStyles}>
        <AbsoluteCenter
          ref={hrRef}
          sx={arrowsStyles}
          _after={arrowHrStylesAfter}
        ></AbsoluteCenter>
      </AbsoluteCenter>
      <AbsoluteCenter sx={arrowWrapperMinStyles}>
        <AbsoluteCenter
          ref={minRef}
          sx={arrowsStyles}
          _after={arrowMinStylesAfter}
        ></AbsoluteCenter>
      </AbsoluteCenter>
      <AbsoluteCenter sx={arrowWrapperSecStyles}>
        <AbsoluteCenter
          ref={secRef}
          sx={arrowsStyles}
          _after={arrowSecStylesAfter}
        ></AbsoluteCenter>
      </AbsoluteCenter>
    </Circle>
  );
};

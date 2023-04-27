import NavBar from '../navigation/NavBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Grid, GridItem, useColorMode, Spinner } from '@chakra-ui/react';
import GeneralNav from 'components/navigation/GeneralNav';
import {
  getBackgroundColor,
  getBackgroundColorBase,
} from 'components/colorModeSwitcher/ColorModeStyles';

const SharedLayout = () => {
  const { colorMode } = useColorMode();

  return (
    <Grid
      templateColumns="repeat(8, 1fr)"
      bg={getBackgroundColorBase(colorMode)}
    >
      <GridItem
        as="aside"
        colSpan={{ base: 8, sm: 3, md: 2, lg: 2 }}
        bg={getBackgroundColor(colorMode)}
        p={{ base: '20px', md: '30px' }}
        minHeight={{ sm: '100vh' }}
      >
        <Box position="sticky" top="30px">
          <GeneralNav />
        </Box>
      </GridItem>
      <GridItem
        as="header"
        position="sticky"
        top="0"
        colSpan={{ base: 8, sm: 5, md: 6, lg: 6 }}
      >
        <Box
          position="sticky"
          top="0"
          bg={getBackgroundColorBase(colorMode)}
          zIndex={5}
        >
          <NavBar />
        </Box>
        <GridItem as="main">
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </GridItem>
      </GridItem>
    </Grid>
  );
};

export default SharedLayout;

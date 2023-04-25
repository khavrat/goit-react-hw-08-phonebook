import NavBar from '../navigation/NavBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import GeneralNav from 'components/navigation/GeneralNav';

const SharedLayout = () => {

  return (
    <Grid templateColumns="repeat(8, 1fr)" bg="gray.50">
      <GridItem
        as="aside"
        colSpan={{ base: 8, sm: 3, md: 2, lg: 2 }}
        bg="blue.600"
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
        <Box position="sticky" top='0' bg='gray.50' zIndex={5}>
          <NavBar />
        </Box>
        <GridItem as="main">
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </GridItem>
      </GridItem>
    </Grid>
  );
};

export default SharedLayout;

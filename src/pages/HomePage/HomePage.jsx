import { Clock } from 'components/clock/Clock';
const { Container } = require('@chakra-ui/react');

const HomePage = () => {
  return (
    <Container as="section" maxWidth="4xl" py="20px">
      <Clock />
    </Container>
  );
};

export default HomePage;

import { Container } from '@chakra-ui/react';
import LoginForm from '../../components/loginForm/LoginForm';

const LoginPage = () => {
  return (
    <Container as="section" maxWidth="4xl" py="20px">
      <LoginForm />
    </Container>
  );
};

export default LoginPage;

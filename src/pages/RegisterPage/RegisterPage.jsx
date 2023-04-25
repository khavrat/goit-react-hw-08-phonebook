import { Container } from '@chakra-ui/react';
import RegistrationForm from '../../components/registrationForm/RegistrationForm';

const RegisterPage = () => {
  return (
    <Container as="section" maxWidth="4xl" py="20px">
      <RegistrationForm />
    </Container>
  );
};

export default RegisterPage;

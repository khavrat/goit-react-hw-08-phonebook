import { Flex, HStack, Spacer } from '@chakra-ui/react';
import UserMenu from 'components/userMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSlice';
import AuthNav from './AuthNav';

export default function NavBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Flex as="nav" p="30px" alignItems="center">
      <Spacer />

      <HStack> {isLoggedIn ? <UserMenu /> : <AuthNav />}</HStack>
    </Flex>
  );
}

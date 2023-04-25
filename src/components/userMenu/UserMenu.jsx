import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/authSlice';
import authOperation from '../../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Flex, Text } from '@chakra-ui/react';

function UserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(selectUserName);

  const handleClick = async () => {
    try {
      await dispatch(authOperation.logOut());
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex alignItems="center" gap="10px">
      <Avatar name={name} color='green.600' bg="green.100" size="sm"></Avatar>
      <Text color="green.600">Welcome, {name}</Text>
      <Button
        colorScheme="blue"
        variant="outline"
        size="xs"
        ml="20px"
        type="button"
        onClick={handleClick}
      >
        Log Out
      </Button>
    </Flex>
  );
}

export default UserMenu;

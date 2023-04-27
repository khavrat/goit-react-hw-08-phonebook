import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperation from '../../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSlice';
import Loader from 'components/loader/Loader';
import { toast } from 'react-toastify';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  useColorMode,
} from '@chakra-ui/react';
import { getInputColor } from '../colorModeSwitcher/ColorModeStyles';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (isLoggedIn) {
      return navigate('/contacts');
    }
  }, [isLoggedIn, navigate]);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        setIsEmailError(false);
        break;
      case 'password':
        setPassword(value);
        setIsPasswordError(false);
        break;
      default:
        console.log('input value: error');
        return;
    }
  };

  const reset = () => {
    if (isEmailError) {
      setEmail('');
    }
    if (isPasswordError) {
      setPassword('');
    }
    if (!isEmailError && !isPasswordError) {
      setEmail('');
      setPassword('');
    }
  };

  const handleErrorByBlureEmail = e => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{3,}$/;
    setIsEmailError(!emailRegex.test(email));
  };

  const handleErrorByBlurePassword = e => {
    const passwordRegex = /^(?=.*\d).{6,}$/;
    setIsPasswordError(!passwordRegex.test(password));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    handleErrorByBlureEmail();
    handleErrorByBlurePassword();
    reset();

    if (!isEmailError && !isPasswordError) {
      try {
        const statusData = await dispatch(
          authOperation.logIn({ email, password })
        );
        if (statusData !== null) {
          toast.error(statusData.payload);
          reset();
        } else {
          reset();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleClick = () => setShow(!show);

  return (
    <Loader>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired isInvalid={isEmailError || isPasswordError}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            bg={getInputColor(colorMode)}
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            id="email-login"
            autoComplete="off"
            onChange={handleChange}
            required
            isInvalid={isEmailError}
            onBlur={handleErrorByBlureEmail}
          />
          {!isEmailError ? (
            <FormHelperText>Enter the email</FormHelperText>
          ) : (
            <FormErrorMessage>Email is required</FormErrorMessage>
          )}
          <FormLabel mt="50px" htmlFor="password">
            Password
          </FormLabel>
          <InputGroup>
            <Input
              bg={getInputColor(colorMode)}
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
              name="password"
              value={password}
              id="password-login"
              autoComplete="off"
              onChange={handleChange}
              required
              isInvalid={isPasswordError}
              onBlur={handleErrorByBlurePassword}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>{' '}
          </InputGroup>
          {!isPasswordError ? (
            <FormHelperText>
              Password must have at least 6 characters and at least one digit
            </FormHelperText>
          ) : (
            <FormErrorMessage>
              Password is not complete and it is required
            </FormErrorMessage>
          )}
          <Button mt="30px" type="submit" colorScheme="blue" size="sm">
            Log in
          </Button>
        </FormControl>
      </form>
    </Loader>
  );
}

export default LoginForm;

LoginForm.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  navigate: PropTypes.func.isRequired,
};
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperation from '../../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSlice';
import Loader from 'components/loader/Loader';
import { toast } from 'react-toastify';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

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
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.log('input value: error');
        return;
    }
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
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
      console.log(error.message)
    }
  };

  return (
    <Loader>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          autoComplete="off"
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          pattern="^(?=.*\d).{6,}$"
          title="Password must have at least 6 characters and at least one digit"
          autoComplete="off"
          onChange={handleChange}
          required
        />
        <button type="submit">Log in</button>
      </form>
    </Loader>
  );
}

export default LoginForm;

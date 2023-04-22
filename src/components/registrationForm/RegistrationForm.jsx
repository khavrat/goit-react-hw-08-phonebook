import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authOperation from 'redux/auth/authOperations';
import { selectIsLoggedIn } from '../../redux/auth/authSlice';
import { toast } from 'react-toastify';

function RegistrationForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //   const [confirmPassword, setConfirmPassword] = useState('');
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
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      //   case 'confirmPassword':
      //     setConfirmPassword(value);
      //     break;
      default:
        console.log('input value: error');
        return;
    }
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
    // setConfirmPassword('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const statusData = await dispatch(
        authOperation.register({ name, email, password })
      );
      if (statusData.error!==null) {
        toast.error(statusData.payload);
        reset();
      } else {
        reset();
      }
    } catch (error) {
      console.log(error.message);
    }
    // console.log('confirmPassword :>> ', confirmPassword);
  };

  return (
    <section>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          required
        />
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
        {/* <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          pattern="^(?=.*\d).{6,}$"
          title="Password must have at least 6 characters and at least one digit"
          autoComplete="off"
          onChange={handleChange}
          required
        /> */}
        <button type="submit">Register</button>
      </form>
    </section>
  );
}

export default RegistrationForm;

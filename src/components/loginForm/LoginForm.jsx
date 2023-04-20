import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/authOperations';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    dispatch(logIn({ email, password }));
    navigate('/contacts');
    reset();
  };

  return (
    <section>
      {' '}
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
    </section>
  );
}

export default LoginForm;

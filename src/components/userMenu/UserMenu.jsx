import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/authSlice';
import authOperation from '../../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <p>Welcome to your phone book, {name}</p>
      <button type="button" onClick={handleClick}>
        Log Out
      </button>
    </div>
  );
}

export default UserMenu;

import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/authSlice';

// export default function PrivateRoute({ children, ...routeProps }) {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   return (
//     <Route {...routeProps}>
//       {isLoggedIn ? children : <Navigate to="/login" />}
//     </Route>
//   );
// }

const PrivateRoute = () => {
      const isLoggedIn = useSelector(selectIsLoggedIn);
return isLoggedIn ? <Outlet/>:<Navigate to='/login'/>
}

export default PrivateRoute;
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { getCurrentUser } from '../../redux/authorization/operations';
import { selectUser } from '../../redux/authorization/selectors';
import PublicRoute from 'guards/PublicRoute';
import PrivateRoute from 'guards/PrivateRoute';
import { selectIsLoading } from '../../redux/root/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import Loader from 'components/Loader/Loader';

const Header = lazy(() => import('../../pages/Header/Header'));
const Home = lazy(() => import('../../pages/Home/Home'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));
const Register = lazy(() => import('../../pages/Register/Register'));
const Login = lazy(() => import('../../pages/Login/Login'));
const Error = lazy(() => import('../../pages/Error/Error'));

export const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    !user && dispatch(getCurrentUser());
    user && dispatch(fetchContacts());
  }, [dispatch, user]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute redirectTo="/contacts" component={<Register />} />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/contacts" component={<Login />} />
            }
          />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
};

import AdminPanel from './pages/AdminPanel';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from './utils/consts';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: AdminPanel,
  },
];

export const publickhRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: SignIn,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: SignUp,
  },
];

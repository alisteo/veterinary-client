import { Navigate, createBrowserRouter } from 'react-router-dom';

import { AuthRoutes } from '../AuthRoutes';

import { AuthLayout } from '@/auth/layout';

import { HomePage } from '@/app/home/pages/HomePage';
import { AppLayout } from '@/app/layouts';
import { LoginPage } from '@/auth/pages';
import { PrivateRoutes } from '../PrivateRoutes';

const AppRouter = createBrowserRouter([
  ///* Free Routes
  {
    path: '/',
    element: <HomePage />,
  },

  ////* Auth
  {
    path: '/auth',
    element: (
      <AuthRoutes>
        <AuthLayout />
      </AuthRoutes>
    ),
    children: [{ path: 'login', element: <LoginPage /> }],
  },

  ////* Private Routes
  {
    path: '/s',
    element: (
      <PrivateRoutes>
        <AppLayout />
      </PrivateRoutes>
    ),
    children: [
      ///* Home
      { path: 'sd', element: <HomePage /> },
      {
        path: 'consultas',
        element: <>Some page</>,
      },

      { path: '*', element: <Navigate to="/" /> },
    ],
  },
]);

export default AppRouter;

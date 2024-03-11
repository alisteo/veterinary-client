import { Navigate, createBrowserRouter } from 'react-router-dom';

import { AuthRoutes } from '../AuthRoutes';

import { AuthLayout } from '@/auth/layout';

import { HomePage } from '@/app/home/pages/HomePage';
import { AppLayout } from '@/app/layouts';
import { CreatePetPage, PestPage } from '@/app/pets/pages';
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
    path: '/',
    element: (
      <PrivateRoutes>
        <AppLayout />
      </PrivateRoutes>
    ),
    children: [
      ////* Pets
      {
        path: 'mascotas',
        element: <PestPage />,
      },
      {
        path: 'mascotas/registrar',
        element: <CreatePetPage />,
      },

      { path: '*', element: <Navigate to="/" /> },
    ],
  },
]);

export default AppRouter;

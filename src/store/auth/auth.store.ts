import { toast } from 'react-toastify';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { Nullable, User } from '@/shared/interfaces';

interface AuthStore {
  ///* state
  token: string;
  user: Nullable<User>;
  isAuth: boolean;
  isLoading: boolean;

  ///* actions
  setAuth: (token: string) => void;
  logout: () => Promise<void>;
  logOutWithoutToken: () => void;
  setisLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    set => ({
      token: '',
      user: null,
      isAuth: false,
      isLoading: false,

      ///* actions
      setAuth: token => {
        set({ token, isAuth: !!token });
      },

      logout: async () => {
        toast.success('Cierre de sesión exitoso!');

        set({ token: '', user: null, isAuth: false });

        localStorage.clear();
        // window.location.reload();
      },

      logOutWithoutToken: () => {
        set({ token: '', user: null, isAuth: false });
      },

      setisLoading: loading => {
        set({ isLoading: loading });
      },
    }),

    // localStorage
    {
      name: 'auth',
    }
  )
);

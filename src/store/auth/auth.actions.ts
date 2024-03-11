import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import { appAPI } from '@/shared/axios';
import { LoginResponse } from '@/shared/interfaces';
import { toast } from 'react-toastify';
import { useAuthStore } from '.';

const { post } = appAPI();

export type LoginData = {
  username_or_email: string;
  password: string;
};

export const useLogin = () => {
  const setAuth = useAuthStore(s => s.setAuth);
  const logOutWithoutToken = useAuthStore(s => s.logOutWithoutToken);

  return useMutation({
    mutationKey: ['login'],
    mutationFn: login,
    onSuccess: async res => {
      const { token } = res;
      setAuth(token);
      toast.success('Inicio de sesión exitoso!');
    },
    onError: err => {
      if (isAxiosError(err)) return console.error(err.response?.data.message);

      logOutWithoutToken();
    },
  });
};

export const login = async (data: LoginData) =>
  post<LoginResponse>(
    '/auth/login',
    {
      email: data.username_or_email,
      password: data.password,
    },
    false
  );

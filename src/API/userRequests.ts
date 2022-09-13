import { toast } from 'react-toastify';
import { instance } from '.';
import type { UserType } from './types';

export const signUp = async (email: string, password: string): Promise<UserType> => {
  const userData = await instance.post('api/auth/signup', { email, password }).catch((error) => {
    (() => toast(error.response.data.message))();
  });

  localStorage.setItem('accessToken', userData?.data.accessToken);

  return userData?.data;
};

export const logIn = async (email: string, password: string): Promise<UserType> => {
  const userData = await instance.post('api/auth/login', { email, password }).catch((error) => {
    (() => toast(error.response.data.message))();
  });

  localStorage.setItem('accessToken', userData?.data.accessToken);

  return userData?.data;
};

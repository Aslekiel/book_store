import type { AxiosResponse } from 'axios';
import { instance } from '.';

export const signUp = async (email: string, password: string): Promise<AxiosResponse> => {
  const userData = await instance.post('auth/signup', { email, password });

  localStorage.setItem('accessToken', userData?.data.accessToken);

  return userData;
};

export const logIn = async (email: string, password: string): Promise<AxiosResponse> => {
  const userData = await instance.post('auth/login', { email, password });

  localStorage.setItem('accessToken', userData?.data.accessToken);

  return userData;
};

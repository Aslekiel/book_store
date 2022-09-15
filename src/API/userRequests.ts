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

export const findUser = async (id: number): Promise<AxiosResponse> => {
  const userData = await instance.post('auth/', { id });

  return userData;
};

export const editUserInformation =
  async (fullname: string, email: string): Promise<AxiosResponse> => {
    const userData = await instance.patch('user/info', { fullname, email });

    return userData;
  };

export const editUserPassword =
  async (
    password: string,
    newPassword: string,
    confirmPassword: string,
  ): Promise<AxiosResponse> => {
    const userData = await instance.patch('user/password', { password, newPassword, confirmPassword });

    return userData;
  };

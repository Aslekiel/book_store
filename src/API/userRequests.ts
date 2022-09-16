import type { AxiosResponse } from 'axios';
import { instance } from '.';
import type { IResDataType, UserPasswordsType } from './types';

export const signUp = async (
  email: string, password: string,
): Promise<AxiosResponse<IResDataType>> => {
  const userData = await instance.post('auth/signup', { email, password });

  localStorage.setItem('accessToken', userData?.data.accessToken);

  return userData;
};

export const logIn = async (
  email: string, password: string,
): Promise<AxiosResponse<IResDataType>> => {
  const userData = await instance.post('auth/login', { email, password });

  localStorage.setItem('accessToken', userData?.data.accessToken);

  return userData;
};

export const editUserInformation =
  async (fullname: string, email: string): Promise<AxiosResponse<IResDataType>> => {
    const userData = await instance.patch('user/info', { fullname, email });

    return userData;
  };

export const editUserPassword =
  async (options: UserPasswordsType): Promise<AxiosResponse> => {
    const userData = await instance.patch('user/password', {
      oldPassword: options.oldPassword,
      newPassword: options.newPassword,
      confirmPassword: options.confirmPassword,
    });
    return userData;
  };

export const checkUser = async (): Promise<AxiosResponse<IResDataType>> => {
  const userData = await instance.get('auth/');

  return userData;
};

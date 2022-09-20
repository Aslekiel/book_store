import type { AxiosResponse } from 'axios';
import { instance } from '.';
import type { IResDataType, UserPasswordsType, IPropsType } from './types';

export const logIn = async (
  options: IPropsType,
): Promise<AxiosResponse<IResDataType>> => {
  const userData = await instance.post('auth/login',
    { email: options.email, password: options.password });

  localStorage.setItem('accessToken', userData?.data.accessToken);

  return userData;
};

export const signUp = async (
  options: IPropsType,
): Promise<AxiosResponse<IResDataType>> => {
  const userData = await instance.post('auth/signup',
    { email: options.email, password: options.password });

  localStorage.setItem('accessToken', userData?.data.accessToken);

  return userData;
};

export const editUserInformation =
  async (options: IPropsType): Promise<AxiosResponse<IResDataType>> => {
    const userData = await instance.patch('user/info',
      { fullname: options.fullname, email: options.email });

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

export const uploadAvatar =
  async (avatar: string | ArrayBuffer): Promise<AxiosResponse<IResDataType>> => {
    const userData = await instance.post('user/upload', { avatar });

    return userData;
  };

import type { AxiosResponse } from 'axios';
import { instance } from '.';
import type { IResDataType, UserPasswordsType, IPropsType, IAnotherUser } from './types';

const logIn = async (
  options: IPropsType,
): Promise<AxiosResponse<IResDataType>> => {
  const userData = await instance.post('auth/login',
    { ...options });

  localStorage.setItem('accessToken', userData?.data.accessToken);

  return userData;
};

const signUp = async (
  options: IPropsType,
): Promise<AxiosResponse<IResDataType>> => {
  const userData = await instance.post('auth/signup',
    { ...options });

  localStorage.setItem('accessToken', userData?.data.accessToken);

  return userData;
};

const editUserInformation =
  async (options: IPropsType): Promise<AxiosResponse<IResDataType>> => {
    const userData = await instance.patch('user/info',
      { ...options });

    return userData;
  };

const editUserPassword =
  async (options: UserPasswordsType): Promise<AxiosResponse> => {
    const userData = await instance.patch('user/password', { ...options });
    return userData;
  };

const checkUser = async (): Promise<AxiosResponse<IResDataType>> => {
  const userData = await instance.get('auth/');

  return userData;
};

const uploadAvatar =
  async (avatar: string | ArrayBuffer): Promise<AxiosResponse<IResDataType>> => {
    const userData = await instance.post('user/upload', { avatar });

    return userData;
  };

const getAnotherUser = async (anotherUserId: number): Promise<AxiosResponse<IAnotherUser>> => {
  const userData = await instance.post('user/find-another', { anotherUserId });

  return userData;
};

export const userApi = {
  logIn,
  signUp,
  editUserInformation,
  editUserPassword,
  checkUser,
  uploadAvatar,
  getAnotherUser,
};

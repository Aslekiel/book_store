import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { checkUser, editUserInformation, editUserPassword, logIn, signUp, uploadAvatar } from '../../../api/userRequests';
import type { IPropsType, UserPasswordsType } from './userThunkTypes';

export const logInThunk = createAsyncThunk('user/logIn',
  async (options: IPropsType, { rejectWithValue }) => {
    try {
      const res = await logIn(options);

      return res;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(toast(error.response?.data.message));
      }
      throw Error();
    }
  });

export const signUpThunk = createAsyncThunk('user/signUp',
  async (options: IPropsType, { rejectWithValue }) => {
    try {
      const res = await signUp(options);

      return res;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(toast(error.response?.data.message));
      }
      throw Error();
    }
  });

export const editUserInformationThunk = createAsyncThunk('user/editInformation',
  async (options: IPropsType, { rejectWithValue }) => {
    try {
      const res = await editUserInformation(options);

      return res;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(toast(error.response?.data.message));
      }
      throw Error();
    }
  });

export const editUserPasswordThunk = createAsyncThunk('user/editPassword',
  async (options: UserPasswordsType, { rejectWithValue }) => {
    try {
      const res = await editUserPassword(options);

      return res;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(toast(error.response?.data.message));
      }
      throw Error();
    }
  });

export const checkUserThunk = createAsyncThunk('user/checkUser',
  async (options, { rejectWithValue }) => {
    try {
      const res = await checkUser();

      return res;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(toast(error.response?.data.message));
      }
      throw Error();
    }
  });

export const uploadAvatarThunk = createAsyncThunk('user/uploadAvatar',
  async (avatar: string | ArrayBuffer, { rejectWithValue }) => {
    try {
      const res = await uploadAvatar(avatar);

      return res;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(toast(error.response?.data.message));
      }
      throw Error();
    }
  });

import type { AxiosResponse } from 'axios';
import { instance } from '.';
import type { IResDataType, IUserType } from './types';

const addFavoriteBook = async (bookId: number | string): Promise<AxiosResponse<IUserType>> => {
  const booksData = await instance.post('favorite/add', { bookId });

  return booksData;
};

const deleteFavoriteBook =
  async (bookId: number | string): Promise<AxiosResponse<IUserType>> => {
    const booksData = await instance.post('favorite/delete', { bookId });

    return booksData;
  };

const getFavoriteBooks = async (): Promise<AxiosResponse<IResDataType>> => {
  const booksData = await instance.get('favorite/');

  return booksData;
};

export const favoriteApi = { addFavoriteBook, deleteFavoriteBook, getFavoriteBooks };

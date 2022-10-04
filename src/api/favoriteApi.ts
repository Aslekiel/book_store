import type { AxiosResponse } from 'axios';
import { instance } from '.';
import type { IUserFavorites } from './types';

const addFavoriteBook = async (bookId: number): Promise<AxiosResponse<IUserFavorites[]>> => {
  const booksData = await instance.post('favorite/', { bookId });

  return booksData;
};

const deleteFavoriteBook =
  async (bookId: number): Promise<AxiosResponse<number>> => {
    const booksData = await instance.delete('favorite/', { data: { bookId } });

    return booksData;
  };

const getFavoriteBooks = async (): Promise<AxiosResponse<IUserFavorites[]>> => {
  const booksData = await instance.get('favorite/');

  return booksData;
};

export const favoriteApi = { addFavoriteBook, deleteFavoriteBook, getFavoriteBooks };

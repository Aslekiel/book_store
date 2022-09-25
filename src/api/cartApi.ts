import type { AxiosResponse } from 'axios';
import { instance } from '.';
import type { IResDataType } from './types';

const addBooksToCart = async (bookId: number | string): Promise<AxiosResponse<IResDataType>> => {
  const booksData = await instance.post('cart/add', { bookId });

  return booksData;
};

const getAllBooksFromCart = async (options: number[]): Promise<AxiosResponse<IResDataType>> => {
  const booksData = await instance.post('cart/', { options });

  return booksData;
};

export const cartApi = { addBooksToCart, getAllBooksFromCart };

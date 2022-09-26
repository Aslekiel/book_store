import type { AxiosResponse } from 'axios';
import { instance } from '.';
import type { IResDataType } from './types';

const addBooksToCart = async (bookId: number | string): Promise<AxiosResponse<IResDataType>> => {
  const booksData = await instance.post('cart/add', { bookId });

  return booksData;
};

const getAllBooksFromCart = async (): Promise<AxiosResponse<IResDataType>> => {
  const booksData = await instance.get('cart/');

  return booksData;
};

const deleteBookFromCart =
  async (bookId: number | string): Promise<AxiosResponse<IResDataType>> => {
    const booksData = await instance.post('cart/delete', { bookId });

    return booksData;
  };

export const cartApi = { addBooksToCart, getAllBooksFromCart, deleteBookFromCart };

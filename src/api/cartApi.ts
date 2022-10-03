import type { AxiosResponse } from 'axios';
import { instance } from '.';
import type { IResDataType, IUserType } from './types';

const addBooksToCart = async (bookId: number): Promise<AxiosResponse<IUserType>> => {
  const booksData = await instance.post('cart/', { bookId });

  return booksData;
};

const getAllBooksFromCart = async (): Promise<AxiosResponse<IResDataType>> => {
  const booksData = await instance.get('cart/');

  return booksData;
};

const deleteBookFromCart =
  async (bookId: number): Promise<AxiosResponse<IResDataType>> => {
    const booksData = await instance.delete('cart/', { data: { bookId } });

    return booksData;
  };

const increaseBookAmount = async (bookId: number): Promise<AxiosResponse<IUserType>> => {
  const booksData = await instance.patch('cart/', { bookId });

  return booksData;
};

const reduceBookAmount = async (bookId: number): Promise<AxiosResponse<IUserType>> => {
  const booksData = await instance.patch('cart/reduce', { bookId });

  return booksData;
};

export const cartApi = {
  addBooksToCart,
  getAllBooksFromCart,
  deleteBookFromCart,
  increaseBookAmount,
  reduceBookAmount,
};

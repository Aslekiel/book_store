import type { AxiosResponse } from 'axios';
import { instance } from '.';
import type { IResDataType, IUserType } from './types';

const addBooksToCart = async (bookId: number | string): Promise<AxiosResponse<IUserType>> => {
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

const addBookCopy = async (bookId: number | string): Promise<AxiosResponse<IUserType>> => {
  const booksData = await instance.post('cart/add-copy', { bookId });

  return booksData;
};

const removeBookCopy = async (bookId: number | string): Promise<AxiosResponse<IUserType>> => {
  const booksData = await instance.post('cart/remove-copy', { bookId });

  return booksData;
};

export const cartApi = {
  addBooksToCart,
  getAllBooksFromCart,
  deleteBookFromCart,
  addBookCopy,
  removeBookCopy,
};

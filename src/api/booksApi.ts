import type { AxiosResponse } from 'axios';
import { instance } from '.';
import type { IResDataType } from './types';

const getAllBooks = async (): Promise<AxiosResponse<IResDataType>> => {
  const booksData = await instance.get('books/');

  return booksData;
};

export const booksApi = { getAllBooks };

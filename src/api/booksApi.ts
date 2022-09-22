import type { AxiosResponse } from 'axios';
import { instance } from '.';
import type { IResDataType } from './types';

const getAllBooks = async (): Promise<AxiosResponse<IResDataType>> => {
  const booksData = await instance.get('books/');

  return booksData;
};

const getAllGenres = async (): Promise<AxiosResponse<IResDataType>> => {
  const genresData = await instance.get('books/genres');

  return genresData;
};

const getFilteredArrayOfBooks = async (): Promise<AxiosResponse<IResDataType>> => {
  const genresData = await instance.get('books/filter');

  return genresData;
};

export const booksApi = { getAllBooks, getAllGenres, getFilteredArrayOfBooks };

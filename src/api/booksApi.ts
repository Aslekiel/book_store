import type { AxiosResponse } from 'axios';
import { instance } from '.';
import type { IBook, IResDataType } from './types';

const getAllBooks = async (): Promise<AxiosResponse<IResDataType>> => {
  const booksData = await instance.get('books/');

  return booksData;
};

const getAllGenres = async (): Promise<AxiosResponse<IResDataType>> => {
  const genresData = await instance.get('books/genres');

  return genresData;
};

const getFilteredArrayOfBooks = async (filters: number[]): Promise<AxiosResponse<IResDataType>> => {
  const genresData = await instance.post('books/filter', filters);

  return genresData;
};

const getBookById = async (id: number): Promise<AxiosResponse<IBook>> => {
  const genresData = await instance.post('books/book', { id });

  return genresData;
};

export const booksApi = {
  getAllBooks,
  getAllGenres,
  getFilteredArrayOfBooks,
  getBookById,
};

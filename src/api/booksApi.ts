import type { AxiosResponse } from 'axios';
import { instance } from '.';
import type { FilterType, IBook, IResDataType } from './types';

const getAllBooks = async (filter: FilterType): Promise<AxiosResponse<IResDataType>> => {
  const booksData = await instance.get('books/', { params: filter });

  return booksData;
};

const getAllGenres = async (): Promise<AxiosResponse<IResDataType>> => {
  const genresData = await instance.get('books/genres');

  return genresData;
};

const getFilteredArrayOfBooks = async (filters: number[]): Promise<AxiosResponse<IResDataType>> => {
  const genresData = await instance.post('books/filter', { filters });

  return genresData;
};

const getBookById = async (id: number): Promise<AxiosResponse<IBook>> => {
  const genresData = await instance.post('books/book', { id });

  return genresData;
};

const getRecommendedBooks = async (id: number): Promise<AxiosResponse<IResDataType>> => {
  const genresData = await instance.post('books/recommend', { id });

  return genresData;
};

export const booksApi = {
  getAllBooks,
  getAllGenres,
  getFilteredArrayOfBooks,
  getBookById,
  getRecommendedBooks,
};

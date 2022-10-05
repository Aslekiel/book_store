import type { AxiosResponse } from 'axios';
import { instance } from '.';
import type { FilterType, IBook, IBookGenres, IBookType } from './types';

const getAllBooks = async (filter: FilterType): Promise<AxiosResponse<IBookType>> => {
  const booksData = await instance.get('books/', { params: filter });

  return booksData;
};

const getAllGenres = async (): Promise<AxiosResponse<IBookGenres[]>> => {
  const genresData = await instance.get('books/genres');

  return genresData;
};

const getBookById = async (id: number): Promise<AxiosResponse<IBook>> => {
  const genresData = await instance.post('books/book', { id });

  return genresData;
};

const getRecommendedBooks = async (id: number): Promise<AxiosResponse<IBook[]>> => {
  const genresData = await instance.post('books/recommend', { id });

  return genresData;
};

export const booksApi = {
  getAllBooks,
  getAllGenres,
  getBookById,
  getRecommendedBooks,
};

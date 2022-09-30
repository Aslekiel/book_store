import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { booksApi } from '../../../api/booksApi';

export const getAllBooksThunk = createAsyncThunk('books/',
  async () => {
    try {
      const res = await booksApi.getAllBooks();
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return error.response?.data.message;
      }
      throw error;
    }
  });

export const getAllGenresThunk = createAsyncThunk('books/genres',
  async () => {
    try {
      const res = await booksApi.getAllGenres();
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return error.response?.data.message;
      }
      throw error;
    }
  });

export const getFilteredArrayOfBooksThunk = createAsyncThunk('books/filter',
  async (filters: number[]) => {
    try {
      const res = await booksApi.getFilteredArrayOfBooks(filters);
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return error.response?.data.message;
      }
      throw error;
    }
  });

export const getBookByIdThunk = createAsyncThunk('books/book',
  async (id: number) => {
    try {
      const res = await booksApi.getBookById(id);
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return error.response?.data.message;
      }
      throw error;
    }
  });

export const getRecommendedBooksThunk = createAsyncThunk('books/recommend',
  async (id: number) => {
    try {
      const res = await booksApi.getRecommendedBooks(id);
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return error.response?.data.message;
      }
      throw error;
    }
  });

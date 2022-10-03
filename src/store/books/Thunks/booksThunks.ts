import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { booksApi } from '../../../api/booksApi';
import { cartApi } from '../../../api/cartApi';
import type { FilterType } from '../../../api/types';

export const getAllBooksThunk = createAsyncThunk('books',
  async (filter: FilterType) => {
    try {
      const res = await booksApi.getAllBooks(filter);
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

export const getAllBooksFromCartThunk = createAsyncThunk('user/cart',
  async () => {
    try {
      const res = await cartApi.getAllBooksFromCart();
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return error.response?.data.message;
      }
      throw error;
    }
  });

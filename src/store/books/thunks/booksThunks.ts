import { createAsyncThunk } from '@reduxjs/toolkit';
import { booksApi } from '../../../api/booksApi';
import type { FilterType } from '../../../types';

export const getAllBooksThunk = createAsyncThunk('books',
  async (filter: FilterType) => {
    const res = await booksApi.getAllBooks(filter);
    return res.data;
  });

export const getRecommendedBooksThunk = createAsyncThunk('books/recommend',
  async (id: number) => {
    const res = await booksApi.getRecommendedBooks(id);
    return res.data;
  });

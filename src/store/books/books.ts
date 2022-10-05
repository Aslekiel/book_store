import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { IBookType } from '../../types';
import { getAllBooksThunk } from './thunks/booksThunks';

const initialState: IBookType = {
  books: [],
  serviceInfo: undefined,
};

const books = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks(state, action: PayloadAction<IBookType | null>) {
      state.books = action.payload.books;
      state.serviceInfo = action.payload.serviceInfo;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllBooksThunk.fulfilled, (state, action) => {
      state.books = action.payload?.books;
      state.serviceInfo = action.payload.serviceInfo;
    });
  },
});

export const { setBooks } = books.actions;

export default books.reducer;

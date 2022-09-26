import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface IBooks {
  books: IBook[] | null;
}

const initialState: IBooks = {
  books: [],
};

interface IBook {
  id?: number | string;
  title: string;
  author: string;
  genres: IBookGenres[];
  description?: string;
  logo: string;
  rating?: string;
  comments?: string;
  price: number;
  dateOfIssue?: string;
}

interface IBookGenres {
  id?: number;
  name: string;
}

const books = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks(state, action: PayloadAction<IBooks | null>) {
      state.books = action.payload.books;
    },
    getBookById(state, action: PayloadAction<IBooks | null>) {
      state.books = action.payload.books;
    },
  },
});

export const { setBooks } = books.actions;

export default books.reducer;

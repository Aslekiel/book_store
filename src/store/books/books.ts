import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface IBooks {
  books: IBook[] | null;
  genres: IBookGenres[] | null;
}

const initialState: IBooks = {
  books: [],
  genres: [],
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
    setGenres(state, action: PayloadAction<IBooks | null>) {
      state.genres = action.payload.genres;
    },
  },
});

export const { setBooks, setGenres } = books.actions;

export default books.reducer;

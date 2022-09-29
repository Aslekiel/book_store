import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface IBooks {
  books: IBook[] | null;
}

const initialState: IBooks = {
  books: [],
};

interface IBook {
  id?: number;
  title: string;
  author: string;
  genres: IBookGenres[];
  description?: string;
  logo: string;
  rating?: string;
  price: number;
  dateOfIssue?: string;
  comments?: IBookComments[];
}

interface IBookGenres {
  id?: number;
  name: string;
}

export interface IBookComments {
  id: number;
  bookId: number;
  userId: number;
  comment: string;
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
    setBookComments(state, action: PayloadAction<IBooks | null>) {
      state.books = action.payload.books;
    },
  },
});

export const {
  setBooks,
  getBookById,
  setBookComments,
} = books.actions;

export default books.reducer;

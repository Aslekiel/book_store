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
  genre: string;
  description?: string;
  logo: string;
  rating?: string;
  comments?: string;
  price: string;
  dateOfIssue?: string;
}

const book = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setBook(state, action: PayloadAction<IBooks | null>) {
      state.books = action.payload.books;
    },
  },
});

export const { setBook } = book.actions;

export default book.reducer;

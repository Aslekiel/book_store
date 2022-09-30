import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import {
  getAllBooksThunk,
  getAllGenresThunk,
  getBookByIdThunk,
  getFilteredArrayOfBooksThunk,
  getRecommendedBooksThunk,
} from './Thunks/booksThunks';

interface IBooksState {
  books: IBook[] | null;
}

const initialState: IBooksState = {
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
    setBooks(state, action: PayloadAction<IBooksState | null>) {
      state.books = action.payload.books;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllBooksThunk.fulfilled, (state, action) => {
      state.books = action.payload?.books;
    });
    builder.addCase(getAllGenresThunk.fulfilled, (state, action) => {
      state.books = action.payload?.books;
    });
    builder.addCase(getFilteredArrayOfBooksThunk.fulfilled, (state, action) => {
      state.books = action.payload?.books;
    });
    builder.addCase(getBookByIdThunk.fulfilled, (state, action) => {
      state.books = action.payload?.books;
    });
    builder.addCase(getRecommendedBooksThunk.fulfilled, (state, action) => {
      state.books = action.payload?.books;
    });
  },
});

export const { setBooks } = books.actions;

export default books.reducer;

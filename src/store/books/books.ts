import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { getAllBooksThunk } from './thunks/booksThunks';

interface IBooksState {
  books: IBook[] | null;
  serviceInfo: ServiceInfoType;
}

const initialState: IBooksState = {
  books: [],
  serviceInfo: undefined,
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

type ServiceInfoType = {
  page: number;
  limit: number;
  prevPage: number | null;
  nextPage: number | null;
  totalPages: number;
  totalBooks: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
};

const books = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks(state, action: PayloadAction<IBooksState | null>) {
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

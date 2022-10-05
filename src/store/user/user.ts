import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { IUserType } from '../../types';
import {
  addBooksToCartThunk,
  addFavoriteBookThunk,
  addRatingThunk,
  deleteBookFromCartThunk,
  deleteFavoriteBookThunk,
  increaseBookAmountThunk,
  reduceBookAmountThunk,
} from './thunk/userThunks';

const initialState: IUserType = {
  user: {
    id: null,
    fullname: '',
    email: '',
    avatar: '',
    cart: [],
    favorites: [],
    ratings: [],
    totalPrice: [],
  },
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUserType | null>) {
      state.user = action.payload.user;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addBooksToCartThunk.fulfilled, (state, action) => {
      state.user.cart = action.payload;
    });
    builder.addCase(deleteBookFromCartThunk.fulfilled, (state, action) => {
      state.user.cart = state.user.cart.filter((book) => book.bookId !== action.payload);
    });
    builder.addCase(increaseBookAmountThunk.fulfilled, (state, action) => {
      state.user.cart = state.user.cart.map((book) => {
        if (book.bookId === action.payload) {
          return { ...book, count: book.count + 1 };
        }
        return book;
      });
    });
    builder.addCase(reduceBookAmountThunk.fulfilled, (state, action) => {
      state.user.cart = state.user.cart.map((book) => {
        if (book.bookId === action.payload) {
          return { ...book, count: book.count - 1 };
        }
        return book;
      });
    });
    builder.addCase(addFavoriteBookThunk.fulfilled, (state, action) => {
      state.user.favorites = action.payload;
    });
    builder.addCase(deleteFavoriteBookThunk.fulfilled, (state, action) => {
      state.user.favorites = state.user.favorites.filter((book) => book.bookId !== action.payload);
    });
    builder.addCase(addRatingThunk.fulfilled, (state, action) => {
      state.user.ratings = state.user.ratings.map((book) => {
        if (book.bookId === action.payload.bookId) {
          return { ...book, grade: action.payload.grade };
        }
        return book;
      });
    });
  },
});

export const { setUser } = user.actions;

export default user.reducer;

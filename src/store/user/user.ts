import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { addBooksToCartThunk, addFavoriteBookThunk, addRatingThunk, deleteBookFromCartThunk, deleteFavoriteBookThunk, increaseBookAmountThunk, reduceBookAmountThunk } from './thunk/userThunks';

interface IUserType {
  user: IUser | null;
}

const initialState: IUserType = {
  user: {
    id: '',
    fullname: '',
    email: '',
    avatar: '',
    cart: [],
    favorites: [],
    ratings: [],
    totalPrice: [],
  },
};

interface IUser {
  id?: number | string;
  fullname?: string;
  email: string;
  avatar?: string;
  cart?: IUserCart[];
  favorites?: IUserFavorites[];
  ratings?: IUserRating[];
  totalPrice?: number[];
}

interface IUserCart {
  id: number;
  bookId: number;
  userId: number;
  count: number;
}

interface IUserFavorites {
  id: number;
  bookId: number;
  userId: number;
}

interface IUserRating {
  id: number;
  bookId: number;
  userId: number;
  grade: number;
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUserType | null>) {
      state.user = action.payload.user;
    },
    setUserCart(state, action: PayloadAction<IUserCart[] | null>) {
      state.user.cart = action.payload;
    },
    deleteFromCart(state, action: PayloadAction<number>) {
      state.user.cart = state.user.cart.filter((book) => book.id !== action.payload);
    },
    setUserFavorite(state, action: PayloadAction<IUserFavorites[] | null>) {
      state.user.favorites = action.payload;
    },
    setUserRating(state, action: PayloadAction<IUserRating[] | null>) {
      state.user.ratings = action.payload;
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

export const {
  setUser,
  setUserCart,
  setUserFavorite,
  setUserRating,
  deleteFromCart,
} = user.actions;

export default user.reducer;

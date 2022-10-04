import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

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
    setUserFavorite(state, action: PayloadAction<IUserFavorites[] | null>) {
      state.user.favorites = action.payload;
    },
    setUserRating(state, action: PayloadAction<IUserRating[] | null>) {
      state.user.ratings = action.payload;
    },
  },
});

export const {
  setUser,
  setUserCart,
  setUserFavorite,
  setUserRating,
} = user.actions;

export default user.reducer;

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface IUser {
  user: IUserType | null;
}

const initialState: IUser = {
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

interface IUserType {
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
    setUser(state, action: PayloadAction<IUser | null>) {
      state.user = action.payload!.user;
    },
    setUserCart(state, action: PayloadAction<IUserType | null>) {
      state.user.cart = action.payload.cart;
    },
    setUserFavorite(state, action: PayloadAction<IUserType | null>) {
      state.user.favorites = action.payload.favorites;
    },
    setUserRating(state, action: PayloadAction<IUserType | null>) {
      state.user.ratings = action.payload.ratings;
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

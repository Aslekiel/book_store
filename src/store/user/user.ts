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
  },
};

interface IUserType {
  id?: number | string;
  fullname?: string;
  email: string;
  avatar?: string;
  cart?: IUserCart[];
  favorites?: IUserFavorites[];
  ratings?: object[];
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
  },
});

export const { setUser, setUserCart, setUserFavorite } = user.actions;

export default user.reducer;

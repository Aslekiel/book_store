import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface IUserState {
  user: IUser | null;
}

const initialState: IUserState = {
  user: null,
};

export interface IUser {
  fullname?: string;
  email: string;
  avatar?: string;
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUpUser(state, action: PayloadAction<string>) {
      // eslint-disable-next-line no-param-reassign
      state.user = { email: action.payload };
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const { signUpUser } = user.actions;

export default user.reducer;

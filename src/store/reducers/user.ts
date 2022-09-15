import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IUser = {
  id: '',
  fullname: '',
  email: '',
  avatar: '',
};

export interface IUser {
  id?: number | string;
  fullname?: string;
  email: string;
  avatar?: string;
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.id = action.payload.id;
      state.fullname = action.payload.fullname;
      state.email = action.payload.email;
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const { setUser } = user.actions;

export default user.reducer;

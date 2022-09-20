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
  },
};

interface IUserType {
  id?: number | string;
  fullname?: string;
  email: string;
  avatar?: string;
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser | null>) {
      state.user = action.payload!.user;
    },
  },
});

export const { setUser } = user.actions;

export default user.reducer;

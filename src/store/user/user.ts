import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import {
  checkUserThunk, editUserInformationThunk, editUserPasswordThunk,
  logInThunk, signUpThunk, uploadAvatarThunk,
} from '../thunks/userThunks/userThunk';

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
  extraReducers: (builer) => {
    builer.addCase(logInThunk.fulfilled, (state, action) => {
      state.user = action.payload.data?.user;
    });
    builer.addCase(signUpThunk.fulfilled, (state, action) => {
      state.user = action.payload.data?.user;
    });
    builer.addCase(editUserInformationThunk.fulfilled, (state, action) => {
      state.user = action.payload.data?.user;
    });
    builer.addCase(editUserPasswordThunk.fulfilled, (state, action) => {
      state.user = action.payload.data?.user;
    });
    builer.addCase(checkUserThunk.fulfilled, (state, action) => {
      state.user = action.payload.data?.user;
    });
    builer.addCase(uploadAvatarThunk.fulfilled, (state, action) => {
      state.user = action.payload.data?.user;
    });
  },
});

export const { setUser } = user.actions;

export default user.reducer;

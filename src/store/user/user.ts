import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface IUser {
  user: UserType | null;
}

const initialState: IUser = {
  user: {
    id: '',
    fullname: '',
    email: '',
    avatar: '',
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
interface UserType {
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

// eslint-disable-next-line no-empty-pattern
export const { setUser } = user.actions;

export default user.reducer;

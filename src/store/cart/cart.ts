import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface ICartState {
  booksIds: ICart[] | null;
}

const initialState: ICartState = {
  booksIds: [],
};

interface ICart {
  id?: number;
}

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addBook(state, action: PayloadAction<ICart | null>) {
      state.booksIds.push(action.payload);
    },
  },
});

export const { addBook } = cart.actions;

export default cart.reducer;

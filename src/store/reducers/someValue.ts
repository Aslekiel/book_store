import { createSlice } from '@reduxjs/toolkit';

const someValue = createSlice({
  name: 'some',
  initialState: '0',
  reducers: {
  },
});

// eslint-disable-next-line no-empty-pattern
export const { } = someValue.actions;

export default someValue.reducer;

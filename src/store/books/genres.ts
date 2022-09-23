import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface IGenres {
  genres: string[] | null;
}

const initialState: IGenres = {
  genres: [],
};

const filteredGenres = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    setFilteredGenres(state, action: PayloadAction<string>) {
      if (!state.genres.includes(action.payload)) {
        state.genres.push(action.payload);
      }
    },
    removeFilter(state, action: PayloadAction<string>) {
      state.genres = state.genres.filter((filter) => filter !== action.payload);
    },
  },
});

export const { setFilteredGenres, removeFilter } = filteredGenres.actions;

export default filteredGenres.reducer;

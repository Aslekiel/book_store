import { combineReducers } from '@reduxjs/toolkit';
import user from './user/user';
import books from './books/books';
import filteredGenres from './books/genres';

const rootReducer = combineReducers({
  user,
  books,
  filteredGenres,
});

export default rootReducer;

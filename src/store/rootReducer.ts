import { combineReducers } from '@reduxjs/toolkit';
import user from './user/user';
import books from './books/books';

const rootReducer = combineReducers({
  user,
  books,
});

export default rootReducer;

import { combineReducers } from '@reduxjs/toolkit';
import user from './user/user';
import book from './books/books';

const rootReducer = combineReducers({
  user,
  book,
});

export default rootReducer;

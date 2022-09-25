import { combineReducers } from '@reduxjs/toolkit';
import user from './user/user';
import books from './books/books';
import filteredGenres from './books/genres';
import cart from './cart/cart';

const rootReducer = combineReducers({
  user,
  books,
  filteredGenres,
  cart,
});

export default rootReducer;

import { createAsyncThunk } from '@reduxjs/toolkit';
import { cartApi } from '../../../api/cartApi';
import { favoriteApi } from '../../../api/favoriteApi';
import { ratingApi } from '../../../api/ratingApi';
import type { RatingOptionsType } from '../../../types';

export const addBooksToCartThunk = createAsyncThunk('user/cart/add',
  async (id: number) => {
    const res = await cartApi.addBooksToCart(id);
    return res.data;
  });

export const getAllBooksFromCartThunk = createAsyncThunk('user/cart/all',
  async () => {
    const res = await cartApi.getAllBooksFromCart();
    return res.data;
  });

export const deleteBookFromCartThunk = createAsyncThunk('user/cart/delete',
  async (id: number) => {
    const res = await cartApi.deleteBookFromCart(id);
    return res.data;
  });

export const increaseBookAmountThunk = createAsyncThunk('user/cart/increase',
  async (id: number) => {
    const res = await cartApi.increaseBookAmount(id);
    return res.data;
  });

export const reduceBookAmountThunk = createAsyncThunk('user/cart/reduce',
  async (id: number) => {
    const res = await cartApi.reduceBookAmount(id);
    return res.data;
  });

export const addFavoriteBookThunk = createAsyncThunk('user/favorite/add',
  async (id: number) => {
    const res = await favoriteApi.addFavoriteBook(id);
    return res.data;
  });

export const deleteFavoriteBookThunk = createAsyncThunk('user/favorite/delete',
  async (id: number) => {
    const res = await favoriteApi.deleteFavoriteBook(id);
    return res.data;
  });

export const addRatingThunk = createAsyncThunk('user/rating',
  async (options: RatingOptionsType) => {
    const res = await ratingApi.addRating(options);
    return res.data;
  });

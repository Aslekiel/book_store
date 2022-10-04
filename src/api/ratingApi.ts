import type { AxiosResponse } from 'axios';
import { instance } from '.';
import type { IUserRating } from './types';

const addRating =
  async (bookId: number | string, grade: number): Promise<AxiosResponse<IUserRating[]>> => {
    const booksData = await instance.post('rating/add', { bookId, grade });

    return booksData;
  };

export const ratingApi = { addRating };

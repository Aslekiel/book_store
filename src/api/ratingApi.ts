import type { AxiosResponse } from 'axios';
import { instance } from '.';
import type { RatingOptionsType } from '../types';

const addRating =
  async (options: RatingOptionsType): Promise<AxiosResponse<RatingOptionsType>> => {
    const booksData = await instance.post('rating/add', { bookId: options.bookId, grade: options.grade });

    return booksData;
  };

export const ratingApi = { addRating };

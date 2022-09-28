import type { AxiosResponse } from 'axios';
import { instance } from '.';
import type { IUserType } from './types';

const addRating =
  async (bookId: number | string, grade: number): Promise<AxiosResponse<IUserType>> => {
    const booksData = await instance.post('rating/add', { bookId, grade });

    return booksData;
  };

export const ratingApi = { addRating };

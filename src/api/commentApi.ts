import type { AxiosResponse } from 'axios';
import { instance } from '.';
import type { IBookType } from './types';

const addComment =
  async (bookId: number, userComment: string): Promise<AxiosResponse<IBookType>> => {
    const booksData = await instance.post('comment/add', { bookId, userComment });

    return booksData;
  };

export const commentApi = {
  addComment,
};

import type { AxiosResponse } from 'axios';
import { instance } from '.';
import type { IBookComments } from './types';

const addComment =
  async (bookId: number, userComment: string): Promise<AxiosResponse<IBookComments[]>> => {
    const booksData = await instance.post('comment/add', { bookId, userComment });

    return booksData;
  };

export const commentApi = {
  addComment,
};

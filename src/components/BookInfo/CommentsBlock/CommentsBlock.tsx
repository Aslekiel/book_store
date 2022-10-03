import { useState } from 'react';
import { useAppDispatch } from '../../../store/hooks/hooks';

import { commentApi } from '../../../api/commentApi';
import { setBooks } from '../../../store/books/books';

import { CommonButton } from '../../CommonButton/CommonButton';
import { SingleComment } from './SingleComment/SingleComment';

import { CommentBlockContainer } from './CommentBlockContainer.styles';

interface IProps {
  id: number;
  comments: IBookComment[];
  isAuth: string;
}

export interface IBookComment {
  id: number;
  bookId: number;
  userId: number;
  comment: string;
}

export const CommentsBlock: React.FC<IProps> = ({ id, comments, isAuth }) => {
  const [commentValue, setCommentValue] = useState('');

  const dispatch = useAppDispatch();

  const onFormSubmitAddComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!commentValue.trim()) return;
    try {
      const res = await commentApi.addComment(Number(id), commentValue);
      dispatch(setBooks(res.data));
      setCommentValue('');
    } catch (error) {
      throw new Error();
    }
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(event.currentTarget.value);
  };

  return (
    <CommentBlockContainer onSubmit={onFormSubmitAddComment}>
      <h2 className="comments__title">
        Comments
      </h2>
      <div className="comments__wrapper">
        {comments && comments.map((comment) => {
          return (
            <SingleComment
              key={comment.id}
              userId={comment.userId}
              comment={comment.comment}
            />
          );
        })}
        {isAuth &&
          (
            <>
              <textarea
                type="text"
                placeholder="Share a comment"
                value={commentValue}
                className="form__textarea"
                onChange={onChangeInput}
              />
              <CommonButton
                title="Post a comment"
                type="submit"
              />
            </>
          )
        }
      </div>
    </CommentBlockContainer>
  );
};

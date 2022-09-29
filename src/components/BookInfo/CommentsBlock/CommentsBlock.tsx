import { useState } from 'react';
import { commentApi } from '../../../api/commentApi';
import { setBookComments } from '../../../store/books/books';
import { useAppDispatch } from '../../../store/hooks/hooks';
import { CommonButton } from '../../CommonButton/CommonButton';
import { CommentBlockContainer } from './CommentBlockContainer.styles';
import { SingleComment } from './SingleComment/SingleComment';

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

  const onFormSubmitAddComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!commentValue.trim()) return;
    (async () => {
      try {
        const res = await commentApi.addComment(Number(id), commentValue);
        dispatch(setBookComments(res.data));
        setCommentValue('');
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(event.currentTarget.value);
  };

  return (
    <CommentBlockContainer
      onSubmit={onFormSubmitAddComment}
    >
      {comments?.map((comment) => {
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
              toggleBtn
            />
          </>
        )
      }
    </CommentBlockContainer>
  );
};

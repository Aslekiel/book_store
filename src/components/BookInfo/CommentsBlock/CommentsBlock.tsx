import { useState } from 'react';

import { commentApi } from '../../../api/commentApi';

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
  const [userComments, setUserComments] = useState(comments || []);

  const onFormSubmitAddComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!commentValue.trim()) return;
    try {
      const res = await commentApi.addComment(Number(id), commentValue);
      setCommentValue('');
      setUserComments(res.data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
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
        {userComments && userComments.map((comment) => {
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

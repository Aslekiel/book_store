import { useState } from 'react';
import { commentApi } from '../../../../api/commentApi';

import { CommonButton } from '../../../CommonButton/CommonButton';
import { SingleComment } from '../SingleComment/SingleComment';
import { TextareaContainer } from './Textarea.styles';

type PropsType = {
  id: number;
};

export const Textarea: React.FC<PropsType> = ({ id }) => {
  const [commentValue, setCommentValue] = useState('');
  const [commentsState, setCommentsState] = useState([]);

  const onFormSubmitAddComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!commentValue.trim()) return;
    try {
      const res = await commentApi.addComment(Number(id), commentValue);
      setCommentValue('');
      setCommentsState((prev) => [...prev, res.data]);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(event.currentTarget.value);
  };

  return (
    <TextareaContainer onSubmit={onFormSubmitAddComment}>
      {
        !!commentsState.length &&
        commentsState.map((commentState, index) => {
          return (
            <SingleComment
              key={index}
              comment={commentState.comment}
              fullname={commentState.fullname}
              avatar={commentState.avatar}
            />
          );
        })
      }
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
    </TextareaContainer>
  );
};

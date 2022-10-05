import { useState } from 'react';
import { commentApi } from '../../../../api/commentApi';

import { CommonButton } from '../../../CommonButton/CommonButton';
import { TextareaContainer } from './Textarea.styles';

type PropsType = {
  id: number;
};

export const Textarea: React.FC<PropsType> = ({ id }) => {
  const [commentValue, setCommentValue] = useState('');

  const onFormSubmitAddComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!commentValue.trim()) return;
    try {
      await commentApi.addComment(Number(id), commentValue);
      setCommentValue('');
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

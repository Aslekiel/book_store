import { useEffect, useMemo, useState } from 'react';

import type { CommentatorInfoType, CommentatorType, IBookComments } from '../../../types';

import { SingleComment } from './SingleComment/SingleComment';
import { Textarea } from './Textarea/Textarea';

import { CommentBlockContainer } from './CommentBlockContainer.styles';
import { userApi } from '../../../api/userApi';

interface IProps {
  id: number;
  comments: IBookComments[];
  isAuth: string;
}

export const CommentsBlock: React.FC<IProps> = ({ id, comments, isAuth }) => {
  const [commentators, seеСommentators] = useState<CommentatorInfoType[]>([]);

  const commentatorsIds = useMemo(() => {
    const arr = Array.from(new Set(comments.map((comment) => comment.userId)));
    return arr;
  }, [comments]);

  const commentsWithCommentators = useMemo(() => {
    return comments.reduce((acc, comment) => {
      (commentators as CommentatorType[]).forEach((commentator) => {
        if (commentator.id === comment.userId) {
          acc.push({
            id: comment.id,
            fullname: commentator.fullname,
            avatar: commentator.avatar,
            comment: comment.comment,
          });
        }
      });
      return acc;
    }, []);
  }, [commentators, comments]);

  useEffect(() => {
    (async () => {
      try {
        const res = await userApi.getCommentators(commentatorsIds);
        seеСommentators(res.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, [commentatorsIds]);

  return (
    <CommentBlockContainer>
      <h2 className="comments__title">
        Comments
      </h2>
      <div className="comments__wrapper">
        {commentsWithCommentators.map((comment) => {
          return (
            <SingleComment
              key={comment.id}
              comment={comment.comment}
              fullname={comment.fullname}
              avatar={comment.avatar}
            />
          );
        })}
        {
        isAuth &&
          (
            <Textarea id={id} />
          )
        }
      </div>
    </CommentBlockContainer>
  );
};

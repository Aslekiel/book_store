import { useEffect, useState } from 'react';
import { userApi } from '../../../../api/userApi';
import noAvatar from '../../../../assets/user profile3.png';
import { SingleCommentContainer } from './SingleCommentContainer.styles';

interface IProps {
  comment: string;
  userId: number;
}

interface IAnotherUser {
  avatar: string;
  fullname: string;
}

export const SingleComment: React.FC<IProps> = ({ comment, userId }) => {
  const [anotherUser, setAnotherUser] = useState<IAnotherUser>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await userApi.getAnotherUser(userId);
        setAnotherUser(res.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, [userId]);

  return (
    <SingleCommentContainer>
      <img
        src={
          anotherUser?.avatar
            ? anotherUser.avatar
            : noAvatar
        }
        alt="user-avatar"
        className="comment__author-avatar"
      />
      <div className="comment__inner">
        <p
          className="comment__inner_fullname"
        >
          {
            anotherUser?.fullname
              ? anotherUser?.fullname
              : 'The user has not entered their fullname yet'
          }
        </p>
        <p
          className="comment__inner_comment-text"
        >
          {comment}
        </p>
      </div>
    </SingleCommentContainer >
  );
};

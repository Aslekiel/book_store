import noAvatar from '../../../../assets/user profile3.png';

import { SingleCommentContainer } from './SingleCommentContainer.styles';

interface IProps {
  comment: string;
  fullname: string;
  avatar: string;
}

export const SingleComment: React.FC<IProps> = ({ comment, fullname, avatar }) => {
  return (
    <SingleCommentContainer>
      <img
        src={avatar || noAvatar}
        alt="user-avatar"
        className="comment__author-avatar"
      />
      <div className="comment__inner">
        <p
          className="comment__inner_fullname"
        >
          {
            fullname || 'The user has not entered their fullname yet'
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

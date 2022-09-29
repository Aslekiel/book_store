import styled from 'styled-components';

export const SingleCommentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background: #F0F4EF;
  border-radius: 16px;

  position: relative;

  width: 100%;

  margin-bottom: 10px;

  .comment__author-avatar {
    position: absolute;
    top: 30px;
    left: 30px;
    width: 60px;
    border-radius: 50%;
  }

  .comment__inner {
    padding: 35px 30px 25px 110px;

    &__fullname {
      letter-spacing: 0.75px;
      color: #0D1821;
      
      padding-bottom: 5px;
    }

    &__comment-text {
      letter-spacing: 0.75px;
      text-align: justify;
      color: #344966;
    }
  }
`;

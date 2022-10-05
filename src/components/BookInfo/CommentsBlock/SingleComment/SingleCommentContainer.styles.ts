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

    &_fullname {
      letter-spacing: 0.75px;
      color: #0D1821;
      
      padding-bottom: 5px;
    }

    &_comment-text {
      letter-spacing: 0.75px;
      text-align: justify;
      color: #344966;
    }
  }


  @media screen and (max-width: 400px) {
    .comment__author-avatar {
      top: 10px;
      left: 10px;
      width: 45px;
    }

    .comment__inner {
      padding: 0;

      &_fullname {
        font-size: 14px;
        line-height: 21px;
        padding: 15px 30px 25px 78px;

      }

      &_comment-text {
        font-size: 12px;
        line-height: 18px;
        padding: 0 10px 10px;
      }
  }
 }
`;

import styled from 'styled-components';

export const CommentBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 110px 0 68px;

  width: 55%;

  .comments__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #0D1821;
    padding-bottom: 50px;
  }

  .comments__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    width: 100%;
  }

  @media screen and (max-width: 1000px) {
    width: 80%;

    padding: 30px 0 0;
    
    .comments__title {
      font-size: 32px;
      line-height: 48px;
    }

    .comments__wrapper {
      :last-child {
        margin-bottom: 30px;
      }
    }
  }

  @media screen and (max-width: 400px) {
    .comments__title {
      display: none;
    }
  }

`;

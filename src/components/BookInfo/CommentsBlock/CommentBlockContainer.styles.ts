import styled from 'styled-components';

export const CommentBlockContainer = styled.form`
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

  .form__textarea {
    background: #F0F4EF;
    border-radius: 16px;
    border: none;
    border-color: none;
    resize: none;
    
    width: 100%;
    height: 130px;

    padding: 20px 10px 0 24px;
    margin: 50px 0 30px;

    ::placeholder {
      line-height: 28px;
      letter-spacing: 0.75px;
      color: #B9BAC4;
    }
  }

  @media screen and (max-width: 1000px) {
    width: 80%;

    padding: 30px 0 0;
    
    .comments__title {
      font-size: 32px;
      line-height: 48px;
    }

    .form__textarea {
      width: 110%;
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

    .form__textarea {
      width: 120%;

      margin: 20px 0 30px;
    }
  }

`;

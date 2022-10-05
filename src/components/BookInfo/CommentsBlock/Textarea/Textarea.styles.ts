import styled from 'styled-components';

export const TextareaContainer = styled.form`
  width: 100%;

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
    .form__textarea {
      width: 110%;
    }
  }

  @media screen and (max-width: 400px) {
   .form__textarea {
      width: 120%;

      margin: 20px 0 30px;
    }
  }
`;

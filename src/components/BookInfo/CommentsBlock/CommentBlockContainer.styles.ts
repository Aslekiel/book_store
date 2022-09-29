import styled from 'styled-components';

export const CommentBlockContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

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
          /* padding: 20px 350px 80px 24px; */
        }
    }
`;

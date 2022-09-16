import styled from 'styled-components';

export const LogInContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 90px 0 80px;
  .login__wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 1290px;
    padding: 0 5px;
  }
  .login__registration {
    width: 40%;
  }
  .login__title {
    color: #0d1821;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
  }
  .login__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: 60px 0;
  }

  .form__email {
    background: url('./img/mail.svg') no-repeat;
    background-position: 24px;
    background-color: #f0f4ef;
    border-radius: 16px;
    border: none;
    padding: 18px 0 18px 64px;
    width: 100%;
    height: 64px;
    margin: 0 5px;
  }
  .form__password {
    background: url('./img/hide.svg') no-repeat;
    background-position: 24px;
    background-color: #f0f4ef;
    border-radius: 16px;
    border: none;
    padding: 18px 0 18px 64px;
    width: 100%;
    height: 64px;
    margin: 0 5px;
  }
  .form__label {
    font-size: 14px;
    line-height: 24px;
    color: #344966;
    padding: 9px 0 30px;
  }

  .form__label--err {
    font-size: 14px;
    line-height: 24px;
    color:  #C30052;
    padding: 9px 0 30px;
  }

  .form__label--acc {
    font-size: 14px;
    line-height: 24px;
    color:  #00966D;
    padding: 9px 0 30px;
  }

  .form__label:last-child {
    padding-bottom: 0;
  }
  .login__img {
    padding-left: 10px;
  }
  .form__email::placeholder,
  .form__password::placeholder {
    color: #b9bac3;
  }
`;

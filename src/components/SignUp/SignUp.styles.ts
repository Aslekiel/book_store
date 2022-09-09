import styled from 'styled-components';

export const SignUpContainer = styled.main`

  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;

  padding: 90px 0 154px;

  .signup__wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    width: 1290px;

    padding: 0 5px;
  }

  .signup__title {
    color: #0D1821;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
  }

  .signup__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 100%;

    padding: 60px 0;
  }

  .form__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    position: relative;
  }

  .form__close-btn {
    position: absolute;
    left: 90%;
    top: 50%;
    transform: translate( -50%, -50%);
    cursor: pointer;
  }

  .form__email {
    background: url('./img/mail.svg') no-repeat;
    background-position: 24px;
    background-color: #F0F4EF;
    border-radius: 16px;
    border: none;
    border-color: none;
    padding: 18px 0 18px 64px;
    width: 100%;
    height: 64px;

    margin:0 5px;

    &:focus {
      outline: 2px solid #344966;
      stroke: red;
      fill: red;
  
    }

    &::placeholder {
      color: #B9BAC3;
    }
  }
  
  .form__password {
    background: url('./img/hide.svg') no-repeat;
    background-position: 24px;
    background-color: #F0F4EF;
    border-radius: 16px;
    border: none;
    padding: 18px 0 18px 64px;
    width: 100%;
    height: 64px;

    margin:0 5px;

    &::placeholder {
    color: #B9BAC3;
  }
  }

  .form__label {
    font-size: 14px;
    line-height: 24px;

    color: #344966;

    padding: 9px 0 30px;

    &:last-child {
    padding-bottom: 0;
  }
  }

  .signup__img {
    padding-left: 10px;
  }

`;

import styled from 'styled-components';

export const LogInContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 90px;
  
  .login__wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1290px;
    width: 100%;
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

  @media screen and (max-width: 1000px) {

    .login__wrapper {
      padding: 0 15px;
    }

    .login__title {
      font-size: 32px;
      line-height: 48px;
    }

    .login__registration {
      width: 50%;
    }

    .login__form {
      padding: 50px 0 0;
    }

    .form__label {
      font-size: 13px;
      padding: 9px 0 15px;
    }

    .login__img {
      max-width: 390px;
      max-height: 330px;
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 750px) {
    padding: 30px 0;
    
    .login__wrapper {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .login__registration {
      width: 100%;
    }

    .login__form {
      padding-top: 30px;
    }

    .login__img {
      padding-top: 30px;
      margin: auto;
    }

  }
`;

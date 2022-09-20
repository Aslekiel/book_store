import styled from 'styled-components';

export const SignUpContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 90px;

  .signup__wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 1290px;
    padding: 0 5px;
  }

  .signup__registration {
    width: 40%;
  }

  .signup__title {
    color: #0d1821;
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
    &::placeholder {
      color: #b9bac3;
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

  .signup__img {
    padding-left: 10px;
  }
`;

import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;

  padding-top: 24px;

  .header__wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 1290px;

    padding: 0 5px;
  }

  .header__logo {
    width: 88px;
    height: 46px;
  }

  .header__catalog {
    color: black;
    text-decoration: none;
    padding: 0 5px;

    width: 15%;
  }

  .header__form {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 60%;
  }

  .header__input {
    background: url('./img/search.svg') no-repeat;
    background-position: 24px;

    background-color: #F0F4EF;
    border-radius: 16px;
    border: none;
     padding: 18px 0 18px 64px;
    width: 90%;
    height: 64px;

    margin:0 5px;
  }

  .header__input::placeholder {
    color: #B9BAC3;
  }

  .button__login {
    color: #F0F4EF;
    letter-spacing: 0.75px;
    text-decoration: none;
    white-space: nowrap;

    cursor: pointer;
  }

  .button__signup {
    color: #F0F4EF;
    letter-spacing: 0.75px;
    text-decoration: none;
    white-space: nowrap;

    cursor: pointer;
  }

`;

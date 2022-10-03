import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 24px;

  .header__wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    justify-content: center;
    align-items: center;
    width: 1290px;
    padding: 0 5px;
  }

  .header__nav {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }

  .header__logo {
    width: 88px;
    height: 46px;
    cursor: pointer;
  }

  .header__catalog {
    color: black;
    text-decoration: none;
    padding: 0 43px 0 10px;
  }

  .header__form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .header__input {
    background: url('./img/search.svg') no-repeat;
    background-position: 24px;
    background-color: #f0f4ef;
    border-radius: 16px;
    border: none;
    padding: 18px 0 18px 64px;
    width: 90%;
    height: 64px;
    margin: 0 5px;
  }

  .header__input::placeholder {
    color: #b9bac3;
  }

  @media screen and (max-width: 1000px) {

    .header__catalog {
      padding: 0 43px 0 40px;
    }

    .header__form {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 80%;
      margin: auto;
    }
  }

`;

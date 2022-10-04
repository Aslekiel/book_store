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
    max-width: 1290px;
    width: 100%;
    padding: 0 15px;
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
    margin: 0 15px;
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

  @media screen and (max-width: 720px) {
    display: grid;
    grid-template-columns: 1fr;

    .header__nav {
      justify-content: flex-start;
    }

    .header__logo {
      max-width: 62px;
      max-height: 30px;
    }

    .header__wrapper {
      grid-template-columns: 1fr 1fr;
    }

    .header__catalog {
      padding: 0 17px;
    }

    .header__form {
      grid-row: 2;
      grid-column: 1/3;
      margin-top: 20px;
      width: 100%;
    }
  }

  @media screen and (max-width: 420px) {
    .header__catalog {
      font-size: 14px;
      line-height: 21px;
    }
  }

`;

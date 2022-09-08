import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  width: 100%;

  padding: 24px 0px 40px;

  .header__logo {

    width: 88px;
    height: 46px;

  }


  .header__catalog {
    color: black;
    text-decoration: none;
    padding: 0 5px;
  }

  .header__input {
    background: url('./img/search.svg') no-repeat;
    background-position: 24px;

    background-color: #F0F4EF;
    border-radius: 16px;
    width: 100%;
    border: none;
    color: #B9BAC3;
    padding: 14px 0 14px 64px;
    width: 50%;
    height: 64px;

    margin:0 5px;
  }

`;

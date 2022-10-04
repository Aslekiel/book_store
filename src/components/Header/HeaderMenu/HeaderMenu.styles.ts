import styled from 'styled-components';

export const HeaderMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  
  .header-menu__button {
    background-color: #344966;
    position: relative;
    color: #f0f4ef;
    border: 0;
    padding: 24px;
    border-radius: 50%;
    cursor: pointer;
  }

  .header-menu__button:nth-child(1) {
    margin-left: 10px;
  }

  .header-menu__button:nth-child(2) {
    margin: 0 27px;
  }

  .header-menu__button:nth-child(3) {
    margin-right: 10px;
  }

  .header-menu__logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &_amount-books {
      position: absolute;
      background: #BFCC94;
      width: 23px;
      height: 23px;

      text-align: center;

      top: -6px;
      left: 30px;

      color: #344966;

      border-radius: 50%;
    }
  }
  @media screen and (max-width: 420px) {
    grid-column: 2/3;
    justify-self: end;

    .header-menu__button {
      padding: 16px;
    }

    .header-menu__button:nth-child(1) {
    margin-left: 10px;
  }

  .header-menu__button:nth-child(2) {
    margin: 0 18px;
  }

  .header-menu__button:nth-child(3) {
    margin-right: 10px;
  }

    .header-menu__logo {
      max-width: 20px;

      &_amount-books {
        width: 16px;
        height: 16px;

        top: -6px;
        left: 20px;

        font-size: 10px;
        line-height: 10px;

        padding: 4px;
      }
    }
  }
`;

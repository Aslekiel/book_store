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

    &__amount-books {
      position: absolute;
      background: #BFCC94;
      width: 23px;
      height: 23px;

      top: -6px;
      left: 30px;

      color: #344966;

      border-radius: 50%;
    }
  }
`;

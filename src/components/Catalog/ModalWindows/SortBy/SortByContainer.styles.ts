import styled from 'styled-components';

export const SortByContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    background-color: #F0F4EF;
    border-radius: 16px;

    padding: 16px 15px 4px;

    width: 190px;

    z-index: 999;
    
    .sort__triangle {
      position: absolute;
      left: 20px;
      top: -12px;
      width: 0;
      height: 0;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-bottom: 15px solid #F0F4EF;
    }

    .sort__btn {
      background-color: inherit;
      color: #344966;
      cursor: pointer;
      width: 100%;

      padding-bottom: 12px;

      &--active {
        background-color: inherit;
        color: #344966;
        cursor: pointer;
        width: 100%;
        text-decoration: underline;

        padding-bottom: 12px;
      }
    }

  @media screen and (max-width: 1000px) {
    max-width: 230px;
    width: 100%;
  }

  @media screen and (max-width: 420px) {
    max-width: 290px;
    width: 100%;
  }

`;

import styled from 'styled-components';

export const EmptyFavoriteContainer = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 5px 0;

  .favorite__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 80px;
  }

  .favorite__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #0d1821;
  }
  
  .favorite__help {
    font-size: 24px;
    line-height: 36px;
    color: #344966;
    padding: 20px 0 60px;
  }

  @media screen and (max-width: 1000px) {

    .favorite__img {
      max-width: 350px;
      max-height: 212px;
      width: 100%;
      height: 100%;
    }

    .favorite__title {
      font-size: 32px;
      line-height: 48px;
    }

    .favorite__help {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media screen and (max-width: 500px) {
    flex-wrap: wrap-reverse;

    padding: 0;

    .favorite__img {
      max-width: 350px;
      max-height: 212px;
      width: 100%;
      height: 100%;

      margin-top: 40px;
    }

    .favorite__info {
      width: 100%;
      padding: 0;

      > button {
        width: 100%;
        padding: 10px 0;
      }
    }

    .favorite__title {
      font-size: 18px;
      line-height: 27px;
    }

    .favorite__help {
      font-size: 12px;
      line-height: 18px;
      padding: 0 0 30px;
      width: 90%;
    }
  }

`;

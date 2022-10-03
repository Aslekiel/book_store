import styled from 'styled-components';

export const MainCatalogBannerContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  padding: 0 98px 0 108px;
  background-color: #F0F4EF;
  
  .main__banner__books-img {
    left: 0;
    top: 135px;
    position: absolute;
  }

  .main__banner__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    z-index: 1;

    &_title {
      font-weight: 700;
      font-size: 40px;
      line-height: 60px;
      color: #0d1821;
      padding-top: 80px;
    }

    &_text {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: #344966;
      padding: 10px 0 50px;
      width: 40%;
    }
  }
  
  .main__banner__reading-girl-img {
    z-index: 10;
  }

  @media screen and (max-width: 1000px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      position: relative;
      padding: 0 98px 66px 40px;
      background-color: #F0F4EF;

      max-height: 380px;
      height: 100%;

    .main__banner__books-img {
      max-width: 361px;
      max-height: 218px;
      width: 100%;
      height: 100%;
      left: 0;
      top: 98px;
      position: absolute;
    }

    .main__banner__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      z-index: 1;

      &_title {
        font-size: 32px;
        line-height: 48px;
        padding-top: 45px;
      }

      &_text {
        font-size: 16px;
        line-height: 24px;
        padding: 10px 0 50px;
        width: 50%;
      }
    }

    .main__banner__reading-girl-img {
      max-width: 328px;
      max-height: 364px;
      width: 100%;

      top: -53px;
      right: 14px;

      position: absolute;
      z-index: 10;
    }
  }
`;

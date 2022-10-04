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

  width: 100%;
  
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

  @media screen and (max-width: 1050px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      position: relative;
      overflow: visible;
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
      top: 90px;
      position: absolute;
    }

    .main__banner__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      z-index: 50;
      
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

  @media screen and (max-width: 720px) {
    padding: 0 98px 16px 40px;
    .main__banner__info {
      z-index: 50;
      
      &_title {
        max-width: 60%;
      }

      &_text {
        width: 60%;
      }
    }
  }

  @media screen and (max-width: 520px) {
    flex-wrap: wrap;

    overflow: hidden;

    max-width: 290px;
    width: 100%;
    max-height: 505px;
    height: 100%;

    margin: auto;
    padding: 0 15px;
    border-radius: 16px;

    .main__banner__books-img {
      max-width: 230px;
      max-height: 140px;
      width: 100%;
      height: 100%;
      left: 70px;
      top: 17px;
      position: absolute;
    }

    .main__banner__info {
     
      &_title {
        font-size: 18px;
        line-height: 27px;
        max-width: 100%;

        padding-top: 20px;
      }

      &_text {
        font-size: 14px;
        line-height: 21px;
        width: 100%;
      }

      > button {
        font-size: 12px;
        line-height: 18px;
      }
    }

    .main__banner__reading-girl-img {
      max-width: 253px;
      max-height: 282px;
      width: 100%;
      height: 100%;

      position: static;

      margin-top: 56px;
    }

  }
`;

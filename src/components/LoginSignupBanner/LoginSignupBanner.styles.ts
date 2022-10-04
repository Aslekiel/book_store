import styled from 'styled-components';

export const LoginSignupBannerContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 108px 62px;
  background-color: #F0F4EF;
  height: 400px;

  width: 100%;

  .banner__castle-img {
    max-width: 520px;
    width: 100%;
    z-index: 10;
  }

  .banner__info {
    display: flex;
    flex-direction: column;
    justify-self: end;
    align-items: flex-start;

    z-index: 1000;

    padding-left: 100px;

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
      color: #0d1821;
      padding: 10px 0 50px;

      width: 80%;
    }
  }

  .banner__sprite-img {
    position: absolute;
    overflow: hidden;
    right: 0;
    top: -62px;
  }

  @media screen and (max-width: 1000px) {
    padding: 55px 10px 0;

    .banner__castle-img {
      max-width: 389px;
      max-height: 345px;
      width: 100%;
      height: 100%;
    }

    .banner__info {
      max-width: 390px;
      width: 100%;

      padding-left: 20px;

      &_title {
        font-size: 32px;
        line-height: 48px;
        padding-top: 0;
      }

      &_text {
        font-size: 16px;
        line-height: 24px;
        padding: 22px 0 40px;

        width: 100%;
      }
    }
  }

  @media screen and (max-width: 720px) {
    .banner__castle-img {
      max-width: 320px;
      max-height: 320px;
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 580px) {
    flex-wrap: wrap-reverse;

    overflow: hidden;

    max-width: 290px;
    width: 100%;
    max-height: 505px;
    height: 100%;

    margin: auto;
    padding: 0 15px;
    border-radius: 16px;

    .banner__castle-img {
      max-width: 282px;
      max-height: 250px;
      width: 100%;
      height: 100%;

      margin-top: 78px;
    }

    .banner__info {
     
      padding: 0;

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

        padding-bottom: 20px;
      }

      > button {
        font-size: 12px;
        line-height: 18px;
      }
    }

    .banner__sprite-img {
      max-width: 253px;
      max-height: 282px;
      width: 100%;
      height: 100%;

      top: -40px;
      right: -30px;

      position: absolute;

    }
  }
`;

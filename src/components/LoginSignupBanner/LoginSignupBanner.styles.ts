import styled from 'styled-components';

export const LoginSignupBannerContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 30px 0 44px;
  padding: 0 108px;
  background: url('./img/bg_banner.svg') no-repeat;
  background-position-y: 62px;

  .banner__castle-img {
    z-index: 10;
  }
  .banner__info {
    display: flex;
    flex-direction: column;
    justify-self: end;
    align-items: flex-start;

    z-index: 1000;
    &__title {
      font-weight: 700;
      font-size: 40px;
      line-height: 60px;
      color: #0d1821;
      padding-top: 80px;
    }
    &__text {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: #0d1821;
      padding: 10px 0 50px;
    }
  }
  .banner__sprite-img {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

import styled from 'styled-components';

export const LoginSignupBannerContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  /* overflow: hidden; */
  margin: 97px 0 54px;
  padding: 0 108px 96px;
  background: url('./img/bg_banner.svg') no-repeat;
  .banner__castle-img {
    position: absolute;
    left: 108px;
    top: -62px;
  }
  .banner__info {
    display: flex;
    flex-direction: column;
    justify-self: end;
    align-items: flex-start;
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
  }
`;

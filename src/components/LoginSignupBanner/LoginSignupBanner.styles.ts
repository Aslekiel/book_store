import styled from 'styled-components';

export const LoginSignupBannerContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 100px;
  padding: 0 108px 62px;
  background-color: #F0F4EF;
  height: 400px;

  width: 100%;

  .banner__castle-img {
    z-index: 10;
  }

  .banner__info {
    display: flex;
    flex-direction: column;
    justify-self: end;
    align-items: flex-start;

    z-index: 1000;

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
`;

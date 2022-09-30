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
  }
  
  .main__banner__info__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #0d1821;
    padding-top: 80px;
  }
  .main__banner__info__text {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #344966;
    padding: 10px 0 50px;
    width: 40%;
  }

  .main__banner__reading-girl-img {
    z-index: 10;
  }
`;

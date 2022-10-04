import styled from 'styled-components';

export const FavoritePageContainer = styled.section`
  max-width: 1290px;
  width: 100%;
  margin: auto;
  padding: 110px 15px 0;

  .favorite__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #0D1821;
    padding-bottom: 38px;
  }


  @media screen and (max-width: 420px) {

    padding: 25px 15px 0;

    .favorite__title {
      font-size: 18px;
      line-height: 27px;
    }
  }

`;

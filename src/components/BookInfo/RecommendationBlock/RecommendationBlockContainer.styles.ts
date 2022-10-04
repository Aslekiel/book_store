import styled from 'styled-components';

export const RecommendationBlockContainer = styled.div`
  width: 100%;

  .recommendations__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #0D1821;

    padding: 110px 0 50px;
  }

  .recommendations__books {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 1000px) {

    .recommendations__title {
      font-size: 32px;
      line-height: 48px;

      padding: 90px 0 50px;
    }

    .recommendations__books {
      > section {
        margin-bottom: 0;
      }
    }


  }
`;

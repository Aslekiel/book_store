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

  @media screen and (max-width: 1250px) {

    .recommendations__books {
      grid-template-columns: repeat(3, 1fr);
      > section {
        :last-child {
          display: none;
        }
        margin-bottom: 0;
      }
    }

  }

  @media screen and (max-width: 1000px) {

    .recommendations__title {
      font-size: 32px;
      line-height: 48px;

      padding: 90px 0 50px;
    }

    .recommendations__books {
      > section {
        h3 {
          height: 50px;
        }
        > button:nth-child(odd) {
          padding: 10px 0;
        }
      }
    }
  }

  @media screen and (max-width: 740px) {
    .recommendations__title {
      font-size: 18px;
      line-height: 27px;

      padding: 60px 0 30px;
    }

    .recommendations__books {
      grid-template-columns: repeat(2, 1fr);
      > section {
        :nth-child(3), :nth-child(4) {
          display: none;
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
    .recommendations__title {
      padding: 10px 0 30px;
    }
  }
`;

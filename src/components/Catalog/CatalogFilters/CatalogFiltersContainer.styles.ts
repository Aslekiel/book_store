import styled from 'styled-components';

export const CatalogFiltersContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 38px;
  
  .catalog__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #0D1821;
  }

  .catalog__filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;

    .catalog__title {
      font-size: 32px;
      line-height: 48px;
      margin-bottom: 20px;
    }

    .catalog__filters {
      width: 100%;
    }

  }
`;

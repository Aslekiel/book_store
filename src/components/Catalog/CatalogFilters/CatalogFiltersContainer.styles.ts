import styled from 'styled-components';

export const CatalogFiltersContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 38px;
  
  max-width: 1290px;
  width: 100%;

  z-index: 999;

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

    .catalog__title {
      font-size: 32px;
      line-height: 48px;
      margin-bottom: 20px;
    }

    .catalog__filters {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
      justify-items: center;
      gap: 15px;
    }

  }

  @media screen and (max-width: 580px) {
    .catalog__title {
      font-size: 18px;
      line-height: 27px;
    }

    .catalog__filters {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

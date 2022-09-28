import styled from 'styled-components';

interface IProps {
  pagesAmount: number;
}

export const PaginationContainer = styled.div<IProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 268px;

  margin: auto;

  margin-top: 20px;

  .pagination__back-arrow {
    transform: rotate(180deg);
    cursor: pointer;
  }

  .pagination__forward-arrow {
    cursor: pointer;
  }

  .pagination__list {

    display: flex;
    flex-direction: row;
    justify-content: ${(p) => (p.pagesAmount === 1 ? 'center' : 'space-between ')};
    align-items: center;

    width: 40%;

    &__item-def {
      width: 14px;
      height: 14px;
      border: 2px solid #0D1821;
      border-radius: 50%;
    }

    &__item-act {
      background-color: #0D1821;
      width: 14px;
      height: 14px;
      border: 2px solid #0D1821;
      border-radius: 50%;
    }
  }
`;

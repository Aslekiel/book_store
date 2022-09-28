import styled from 'styled-components';

export const CartWithBooksContainer = styled.section`
  max-width: 1290px;
  width: 100%;

  margin: auto;
  padding: 60px 5px 0;

  .book {
    &__line {
      border: 1px solid #D6D8E7;
      margin: 40px 0;
    }
  }

  >  hr:last-child {
    display: none;
  }

  .cart__total-price {

    &__price {
      font-weight: 500;
      font-size: 36px;
      line-height: 54px;
      color: #0D1821;

      padding: 50px 0 30px;
    }

    &__btns {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 40%;

      &__continue {
        background-color: #FFFFFF;
        border: 1px solid #0D1821;
        border-radius: 16px;
        padding: 10px 50px;
        color: #0D1821;
        width: fit-content;
        white-space: nowrap;
        cursor: pointer;

        margin-right: 10px;
      }
    }
  }
`;

import styled from 'styled-components';

export const CartWithBooksContainer = styled.section`
  max-width: 1290px;
  width: 100%;

  margin: auto;
  padding: 60px 15px 0;

  .book {
    &__line {
      border: 1px solid #D6D8E7;
      margin: 40px 0;
    }

  }
  
  .cart__total-price {

    &_price {
      font-weight: 500;
      font-size: 36px;
      line-height: 54px;
      color: ${(p) => p.theme.textColor.secondary};

      padding: 50px 0 30px;
    }

    &_btns {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 40%;

      &_continue {
        background-color: ${(p) => p.theme.btnColor.secondary};
        border: 1px solid #0D1821;
        border-radius: 16px;
        padding: 10px 50px;
        color: ${(p) => p.theme.textColor.secondary};
        width: fit-content;
        white-space: nowrap;
        cursor: pointer;

        margin-right: 10px;
      }
    }
  }

  @media screen and (max-width: 680px) {
    .cart__total-price {

      &_price {
        font-size: 24px;
        line-height: 36px;
      }

      &_btns {
        display: flex;
        flex-direction: column;
        width: 100%;

        > button {
          width: 50%;
          padding: 10px 0;
        }

        &_continue {
          margin-right: 0;
          margin-bottom: 20px;
        }
      }
    }
  }

  @media screen and (max-width: 400px) {
    .cart__total-price {

      &_btns {
        width: 100%;

        > button {
          width: 100%;
        }
      }
    }
  }
`;

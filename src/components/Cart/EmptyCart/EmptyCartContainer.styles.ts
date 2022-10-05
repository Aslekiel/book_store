import styled from 'styled-components';

export const EmptyCartContainer = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 118px 15px 0;

  .cart__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 80px;
  }

  .cart__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #0d1821;
  }
  
  .cart__help {
    font-size: 24px;
    line-height: 36px;
    color: #344966;
    padding: 20px 0 60px;
  }

  @media screen and (max-width: 1000px) {

    .cart__img {
      max-width: 350px;
      max-height: 212px;
      width: 100%;
      height: 100%;
    }

    .cart__title {
      font-size: 32px;
      line-height: 48px;
    }
    
    .cart__help {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media screen and (max-width: 500px) {
    flex-wrap: wrap-reverse;

    padding: 50px 15px 0;

    .cart__img {
      max-width: 350px;
      max-height: 212px;
      width: 100%;
      height: 100%;

      margin-top: 40px;
    }

    .cart__info {
      width: 100%;
      padding-left: 0;

      > button {
        width: 100%;
        padding: 10px 0;
      }
    }

    .cart__title {
      font-size: 18px;
      line-height: 27px;
    }

    .cart__help {
      font-size: 12px;
      line-height: 18px;
      padding: 15px 0 30px;
      width: 90%;
    }
  }
`;

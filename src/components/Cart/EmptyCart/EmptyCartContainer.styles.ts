import styled from 'styled-components';

export const EmptyCartContainer = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 118px 10px 0;

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
`;

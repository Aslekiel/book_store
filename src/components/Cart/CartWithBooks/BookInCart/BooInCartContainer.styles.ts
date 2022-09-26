import styled from 'styled-components';

export const BookInCartContainer = styled.div`
  display: flex;

    .book__logo {
      max-width: 197px;
      width: 100%;
      height: 289px;
      border-radius: 16px;

      margin-right: 20px;
    }

    .book__info {

      &__title {
        font-weight: 700;
        font-size: 40px;
        line-height: 60px;
        color: #0D1821;
      }

      &__author {
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        color: #0D1821;
      }

      &__btns {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        height: 40%;
      
          &__minus, &__plus {
            background-color: #F0F4EF;
            border: 0;
            border-radius: 22px;
            padding: 6px 12px;
            color: #0D1821;
            cursor: pointer;
          }

          &__amount-books {
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 600;
            letter-spacing: 0.75px;
            color: #0D1821;
            
            width: 50px;
          }

          &__delete {
            margin-left: 60px;
            cursor: pointer;
          }
      }

      &__price {
        font-weight: 500;
        font-size: 36px;
        line-height: 54px;
        color: #0D1821;
      }
    }
`;
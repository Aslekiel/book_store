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

      &_title {
        font-weight: 700;
        font-size: 40px;
        line-height: 60px;
        color: #0D1821;
      }

      &_author {
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        color: #0D1821;
      }

      &_btns {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        height: 40%;
      
          &_minus, &_plus {
            background-color: #F0F4EF;
            border: 0;
            border-radius: 22px;
            padding: 6px 12px;
            color: #0D1821;
            cursor: pointer;
          }

          &_amount-books {
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 600;
            letter-spacing: 0.75px;
            color: #0D1821;
            
            width: 50px;
          }

          &_delete {
            margin-left: 60px;
            cursor: pointer;
          }
      }

      &_price {
        font-weight: 500;
        font-size: 36px;
        line-height: 54px;
        color: #0D1821;
      }
    }

  @media screen and (max-width: 1000px) {
    .book__info {

      &_title {
        font-size: 32px;
        line-height: 48px;
      }

      &_author {
        font-size: 20px;
        line-height: 30px;
      }
    }
  }

  @media screen and (max-width: 680px) {
    .book__logo {
      max-width: 135px;
      width: 100%;
      height: 202px;
      border-radius: 16px;

      margin-right: 20px;
    }
    
    .book__info {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;

      &_title {
        font-size: 18px;
        line-height: 20px;
      }

      &_author {
        font-size: 12px;
        line-height: 18px;
        padding-top: 14px;
      }

      &_btns {
      
          &_minus, &_plus {
            background-color: #F0F4EF;
            border: 0;
            border-radius: 22px;
            padding: 6px 12px;
            color: #0D1821;
            cursor: pointer;
          }

          &_amount-books {
            width: 30px;
          }

          &_delete {
            margin-left: 25px;
          }
      }

      &_price {
        font-size: 18px;
        line-height: 27px;
      }
    }
  }
`;

import styled from 'styled-components';

export const BookPreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 0.3fr 1fr;

  max-width: 1290px;
  width: 100%;

  .book__logo {
    grid-column: 1;
    grid-row: 1/4;

    position: relative;

    max-width: 522px;
    width: 100%;
    height: 100%;

    &_img {
    max-width: 522px;
    width: 100%;
    max-height: 779px;
    height: 100%;
    border-radius: 16px;
    }
  }

  .book__info {
    padding-left: 10px;

    width: 100%;

    &_title {
      font-weight: 700;
      font-size: 40px;
      line-height: 60px;
      color: #0D1821;
    }

    &_author-name {
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      color: #0D1821;
    }
  }

    .book__description {
      padding: 10px 0 0 10px;

      &_title {
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        color: #0D1821;

        padding-bottom: 10px;
      }

      &_text {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #344966;
        text-align: justify;

        padding-bottom: 70px;
      }

      &_buy-btns {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;

        &_btn {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;

          width: 50%;

          &_title {
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #344966;

            padding-bottom: 14px;
            }
        }
      }
    }

  @media screen and (max-width: 1000px) {

    .book__logo {
      max-width: 391px;
        max-height: 584px;
        width: 100%;
        height: 100%;
    }

    .book__info {
      padding-right: 10px;

      &_title {
        font-size: 32px;
        line-height: 48px;
      }
    
      &_author-name {
        font-size: 20px;
        line-height: 30px;
      }
    }

    .book__description {
      &_title {
        font-size: 16px;
        line-height: 24px;
      }

      &_text {
        font-size: 14px;
        line-height: 21px;
      }

      &_buy-btns {
        &_btn {
            width: 100%;
          > button {
            padding: 10px 22px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 830px) {
    grid-template-rows: 1fr 0.5fr;

    .book__logo {
      grid-row: 1;
    }

    .book__description {
      grid-column: 1/3;
      grid-row: 2;

      &_text {
        padding-bottom: 20px;
      }

      &_buy-btns {
        width: 60%;
      }
    }

  }

  @media screen and (max-width: 670px) {
    .book__description {
      &_buy-btns {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 500px) {
    grid-template-rows: 0.3fr 0.5fr;

    .book__logo {
      max-width: 155px;
      max-height: 222px;
      width: 100%;
      height: 100%;

    }

    .book__info {
      
      &_title {
        font-size: 18px;
        line-height: 20px;
      }

      &_author-name {
        font-size: 12px;
        line-height: 18px;
        padding-top: 5px;
      }
    }

    .book__description {

      &_buy-btns {
        &_btn {
          > button {
            font-size: 12px;
            line-height: 18px;
          }
        }

        &_btn:nth-child(2) {
          margin-left: 10px;
        }

      }
    }
  }
`;

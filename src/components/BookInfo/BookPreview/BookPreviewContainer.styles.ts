import styled from 'styled-components';

type PropsType = {
  favorite: boolean;
};

export const BookPreviewContainer = styled.div<PropsType>`
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

    &_save {
      background-color: #344966;
      position: absolute;
      right: 20px;
      top: 20px;
      color: #f0f4ef;
      border: 0;
      padding: 24px;
      border-radius: 50%;
      opacity: ${(p) => (p.favorite ? 1 : 0.5)};
      cursor: pointer;

    &-favorite {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }

    :hover {
    opacity: 1;
    }
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

    &_rating {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding: 30px 0;

      &_wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &_integer {
        line-height: 24px;
        color: #B9BAC4;

        padding: 0 40px 0 15px;
      }

      &_arrow {
        padding-left: 45px;
      }

      &_rate-this {
        line-height: 24px;
        color: #B9BAC4;
                
        padding-left: 10px;
                
      }
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

      &_rating {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        justify-items: flex-start;

        padding: 20px 0 30px;

        &_integer {
          line-height: 24px;
          color: #B9BAC4;

          padding: 0 40px 0 15px;
        }

        &_arrow {
          padding-left: 45px;
        }

        &_rate-this {
          line-height: 24px;
          color: #B9BAC4;

          padding-left: 10px;

        }
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
    .book__info {

      &_rating {
        
        &_wrapper:nth-child(2) {
          flex-direction: column;
          justify-content:center;
          align-items: flex-start;
        }

        &_arrow {
          display: none;
        }

        &_rate-this {
          padding-left: 5px;
          padding-top: 5px;
        }
      }
    }

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

      &_save {
        right: 14px;
        top: 14px;
        padding: 18px;

        &-favorite {
          width: 50%;
        }
      }

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

      &_rating {
        padding-bottom: 0;

        &_wrapper {
          justify-content: flex-end;
          align-items: flex-start;
        }

        &_wrapper
          > span 
          > span 
          > span 
          > .css-1vooibu-MuiSvgIcon-root {
            width: 20px;
            height: 20px;
          }

        &_wrapper 
          > span 
          > span 
          > label 
          > span 
          > .css-1vooibu-MuiSvgIcon-root {
            width: 20px;
            height: 20px;
          }

        &_integer {
          font-size: 13px;

          padding-left: 15px;
          padding-right: 0;
        }

        &_rate-this {
          font-size: 12px;
          line-height: 18px;
        }
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

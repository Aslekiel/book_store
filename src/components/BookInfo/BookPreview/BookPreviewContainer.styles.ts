import styled from 'styled-components';

type PropsType = {
  favorite: boolean;
};

export const BookPreviewContainer = styled.div<PropsType>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  max-width: 1290px;
  width: 100%;

  .book__logo {
      position: relative;

      max-width: 522px;
      width: 100%;

      &__img {
      max-width: 522px;
      width: 100%;
      max-height: 779px;
      height: 100%;
      border-radius: 16px;

      }

      &__save {
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

      width: 50%;

      &__title {
          font-weight: 700;
          font-size: 40px;
          line-height: 60px;
          color: #0D1821;
      }

      &__author-name, &__description-title {
          font-weight: 500;
          font-size: 24px;
          line-height: 36px;
          color: #0D1821;
      }

      &__rating {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          padding: 30px 0;

          &__integer {
              line-height: 24px;
              color: #B9BAC4;

              padding: 0 40px 0 15px;
          }

          &__arrow {
              padding-left: 45px;
          }

          &__rate-this {
              line-height: 24px;
              color: #B9BAC4;
              
              padding-left: 10px;
              
          }
      }

      &__description {
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: #344966;
          text-align: justify;

          padding: 10px 0 74px;
      }

      &__buy-btns {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: flex-start;

          &__btn {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: flex-start;

              width: 50%;

              &__title {
                  font-weight: 500;
                  font-size: 16px;
                  line-height: 24px;
                  color: #344966;

                  padding-bottom: 14px;
              }
          }
      }
  }
`;

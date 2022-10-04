import styled from 'styled-components';

interface IProps {
  favorite: boolean;
}

export const BookContainer = styled.section<IProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  position: relative;

  margin-bottom: 60px;
  padding: 0 5px;

  width: 100%;

  .book__logo {
    max-width: 305px;
    width: 100%;
    max-height: 448px;
    height: 100%;
    margin-bottom: 30px;
    border-radius: 16px;

    cursor: pointer;
  }

  .book__title {
    font-size: 20px;
    line-height: 30px;
    color: #344966;

    max-width: 305px;
    width: 100%;

    height: 50px;
  }

  .book__author {
    font-size: 20px;
    line-height: 30px;
    color: #B9BAC4;
    
    padding: 10px 0 20px;
  }

  .book__data-of-issue {
    color: #344966;
    padding-bottom: 20px;
  }

  .book__rating {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px 32px;

    max-width: 305px;
    width: 100%;

    &_integer {
      line-height: 24px;
      color: #B9BAC4;
    }
  }

  > button:nth-child(odd) {
    max-width: 305px;
    width: 100%;
  }

  .book__save {
    background-color: #344966;
    position: absolute;
    left: 20px;
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

  @media screen and (max-width: 1000px) {
    max-width: 254px;
    width: 100%;

    .book__logo {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 254px;
      width: 100%;
      max-height: 372px;
      height: 100%;
    }

    .book__title {
      font-size: 16px;
      line-height: 24px;

      max-width: 254px;
      width: 100%;
      height: 40px;
    }

    .book__author {
      font-size: 16px;
      line-height: 24px;

      max-width: 254px;
      width: 100%;
    }

    .book__save {
      left: 16px;
      top: 16px;
      padding: 20px;

      &-favorite {
        width: 20px;
      }
    }

    > button:nth-child(odd), .book__rating {
      max-width: 254px;
      width: 100%;
    }
  }

  @media screen and (max-width: 480px) {
    max-width: 135px;
    width: 100%;

    .book__logo {
      max-width: 135px;
      width: 100%;
      max-height: 192px;
      height: 100%;

      margin-bottom: 15px;
    }

    .book__title {
      font-size: 14px;
      line-height: 21px;

      max-width: 135px;
      width: 100%;
      height: 80px;
    }

    .book__author {
      font-size: 14px;
      line-height: 21px;

      max-width: 135px;
      width: 100%;

      max-height: 50px;
    }

    .book__data-of-issue {
      font-size: 14px;
      line-height: 21px;

      max-width: 135px;
      width: 100%;

      padding: 0;
    }

    .book__save {
      left: 16px;
      top: 16px;
      padding: 14px;

      &-favorite {
        width: 14px;
      }
    }

    .book__rating {
      max-width: 135px;
      width: 100%;

      padding: 0 0 17px;

      > img {
        max-width: 14px;
        max-height: 14px;
      }
    }

    > button:nth-child(odd) {
      max-width: 135px;
      width: 100%;
      padding: 10px 0;
    }
  }
`;

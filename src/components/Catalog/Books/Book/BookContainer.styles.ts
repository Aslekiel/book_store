import styled from 'styled-components';

export const BookContainer = styled.section`
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

    margin-top: 30px;
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

      margin-top: 30px;
    }

    .book__author {
      font-size: 16px;
      line-height: 24px;

      max-width: 254px;
      width: 100%;
    }

    > button:nth-child(odd), .book__rating {
      max-width: 254px;
      width: 100%;
    }
  }

  @media screen and (max-width: 420px) {
    max-width: 135px;
    width: 100%;

    .book__logo {
      max-width: 135px;
      width: 100%;
      max-height: 192px;
      height: 100%;
    }

    .book__title {
      font-size: 14px;
      line-height: 21px;

      max-width: 135px;
      width: 100%;
      height: 80px;

      margin-top: 15px;
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

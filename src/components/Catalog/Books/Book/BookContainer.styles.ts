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

  max-width: 305px;
  width: 100%;

  .book__logo {
    width: 100%;
    height: 448px;
    margin-bottom: 30px;
    border-radius: 16px;

    cursor: pointer;
  }

  .book__title {
    font-size: 20px;
    line-height: 30px;
    color: #344966;

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

    width: 100%;

    &__integer {
      line-height: 24px;
      color: #B9BAC4;
    }
  }

  > button:last-child {
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
`;

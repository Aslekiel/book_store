import styled from 'styled-components';

export const UserProfileCaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    margin: 40px 0 20px;

    &:first-child {
      margin: 0 0 30px;
    }

    .caption__title {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;

      margin-right: 10px;
    }

    .caption__link {
      background-color: inherit;
      border: 0;
      white-space: nowrap;
      font-size: 14px;
      line-height: 21px;
      text-decoration: underline;
      color: #8d9f4f;
      cursor: pointer;
    }

  @media screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;


    &:first-child {
      margin: 0 0 10px;
    }

    .caption__title {
      font-size: 16px;
      line-height: 24px;
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`;

import styled from 'styled-components';

export const ChangePasswordBlockContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    margin-top: 20px;

    .change-password__info {
      display: flex;
      flex-direction: column;
      justify-self: end;
      
      width: 100%;

      > button {
        width: fit-content;
      }
    }

    .change-password__label {
      margin: 9px 0 10px;

      color: #344966;
    }

  @media screen and (max-width: 650px) {
    > div {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;

      h2 {
        margin: 0;
      }
    }
  }
`;

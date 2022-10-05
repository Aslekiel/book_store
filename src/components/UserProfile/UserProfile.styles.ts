import styled from 'styled-components';

export const UserProfileContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 60px 15px 0;

  .user-profile__wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    max-width: 1290px;
    width: 100%;
  }

  .info__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    justify-self: end;
    width: 82%;
  }

  .user-profile__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
  }

  form > button {
    margin-top: 40px;
  }

  .change-password {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 20px;

      &__label {
        margin: 9px 0 10px;

        color: #344966;
      }
  }

  @media screen and (max-width: 1050px) {

    .user-profile__wrapper {
      grid-template-columns: 1fr 2fr;
    }

    .info__wrapper {
      width: 95%;
    }
  }

  @media screen and (max-width: 650px) {

    .user-profile__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .info__wrapper {
      margin-top: 30px;
      width: 95%;
    }
  }
`;

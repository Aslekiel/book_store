import styled from 'styled-components';

export const UserProfileContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 60px 5px 110px 5px;
  .user-profile__wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    width: 1290px;
  }
  .user-profile__photo {
    width: 305px;
    height: 305px;
    background-color: #f0f4ef;
    position: relative;
    border-radius: 16px;
  }
  .user-profile__user-logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .user-profile__button {
    background-color: #344966;
    position: relative;
    left: 237px;
    top: 237px;
    color: #f0f4ef;
    border: 0;
    padding: 24px;
    border-radius: 50%;
    cursor: pointer;
  }
  .user-profile__camera-logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .user-profile__info {
    display: flex;
    flex-direction: column;
    justify-self: end;
    width: 82%;
    &__fullName {
      margin: 30px 0 20px;
    }
  }
  .user-profile__caption {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    &__title {
      font-size: 20px;
      line-height: 30px;
    }
    &__link {
      background-color: inherit;
      border: 0;
      white-space: nowrap;
      font-size: 14px;
      line-height: 21px;
      text-decoration: underline;
      color: #8d9f4f;
      cursor: pointer;
    }
  }
  .user-profile__caption:nth-child(even) {
    margin: 40px 0 20px;
  }
  .change-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 20px 0 40px;
    &__label {
     margin: 9px 0 10px;
     color: #344966;
    }
  }
`;

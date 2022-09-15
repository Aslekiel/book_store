import styled from 'styled-components';

export const UserProfileContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 60px 5px 80px 5px;

  .user-profile__wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    width: 1290px;
  }

  .user-profile__info {
    display: flex;
    flex-direction: column;
    justify-self: end;
    width: 82%;

    &:nth-child(2) {
    margin-bottom: 120px;
    }
  }

`;

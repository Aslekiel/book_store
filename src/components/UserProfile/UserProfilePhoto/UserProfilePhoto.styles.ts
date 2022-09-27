import styled from 'styled-components';

interface IProps {
  noAvatar: boolean;
}

export const UserProfilePhotoContainer = styled.div<IProps>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    > button {
      margin-top: 20px;
    }

    .user-photo {
      width: 305px;
      height: 305px;
      background-color: #f0f4ef;
      position: relative;
      border-radius: 16px;

      position: relative;

        &__user-logo {
        position: absolute;
        width: ${(p) => (p.noAvatar ? '' : 'inherit')};
        height:  ${(p) => (p.noAvatar ? '' : 'inherit')};
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      &__button {
        background-color: #344966;
        position: absolute;
        left: 237px;
        top: 237px;
        color: #f0f4ef;
        border: 0;
        padding: 24px;
        border-radius: 50%;
        cursor: pointer;

        &-load {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }

      &__camera-logo {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

    }
`;

import styled from 'styled-components';

interface IProps {
  favorite: boolean;
  mirrorState?: boolean;
}

export const FavoriteButtonContainer = styled.button<IProps>`
    background-color: #344966;
    position: absolute;
    right: ${(p) => (p.mirrorState && '20px')};
    left: ${(p) => (!p.mirrorState && '20px')};
    top: 20px;
    color: #f0f4ef;
    border: 0;
    padding: 24px;
    border-radius: 50%;
    opacity: ${(p) => (p.favorite ? 1 : 0.5)};
    cursor: pointer;

    .favorite__logo {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }

    :hover {
      opacity: 1;
    }

    @media screen and (max-width: 1000px) {
      right: ${(p) => (p.mirrorState && '16px')};
      left: ${(p) => (!p.mirrorState && '16px')};
      top: 16px;
      padding: 20px;

      .favorite__logo {
        width: 20px;
      }
    }

    @media screen and (max-width: 420px) {
      right: ${(p) => (p.mirrorState && '16px')};
      left: ${(p) => (!p.mirrorState && '16px')};
      top: 16px;
      padding: 14px;

      .favorite__logo {
        width: 14px;
      }
    }
`;

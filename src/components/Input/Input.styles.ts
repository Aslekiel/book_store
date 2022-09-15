import styled, { css } from 'styled-components';

type ChangeColorType = {
  filterLogo: boolean;
  isActive: boolean;
  inputType: string;
};

export const InputContainer = styled.div<ChangeColorType>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 100%;

  ${(p) => p.inputType === 'fullname' &&
    css`
        margin: 30px 0 20px;
      `}

  .input__general {
    position: absolute;
    left: 42px;
    top: 50%;
    transform: translate(-50%, -50%);
    
    path {
      stroke: #b9bac3;
    }
    
    ${(p) => p.filterLogo && !p.isActive &&
    css`
        path {
          stroke: #344966;
        }
      `}
      
  }

  .input__eye {
    position: absolute;
    left: 42px;
    top: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
    cursor: pointer;
    path {
      stroke: #b9bac3;
    }
    circle {
      stroke: #b9bac3;
    }
    path:nth-of-type(2) {
      stroke: none;
      fill: #b9bac3;
    }

    ${(p) => p.filterLogo && !p.isActive &&
    css`
        path {
          stroke: #344966;
        }
        circle {
          stroke: #344966;
        }
        path:nth-of-type(2) {
          stroke: none;
          fill: #344966;
        }
      `}
  }
  .input__inner {
    background-color: #f0f4ef;
    border-radius: 16px;
    border: none;
    border-color: none;
    padding: 18px 0 18px 64px;
    width: 100%;
    height: 64px;
    margin: 0 5px;

    &::placeholder {
      color: #b9bac3;
    }

    &:focus {
      padding: 30px 0 6px 64px;
      outline-color: #344966;
    }

    ${(p) => p.isActive &&
    css`
        /* z-index: -2; */
        padding: 30px 0 6px 64px;
        ::placeholder {
          color: #344966;
        }
    `}
/* 
    &--err {
      background-color: #FFF2F7;
      border: 2px solid #ED2E7E;

        &:focus {
        padding: 30px 0 6px 64px;
        outline-color: #ED2E7E;
      }
    }

    &--sac {
      background: #F3FDFA;
      border: 2px solid #00BA88;

        &:focus {
        padding: 30px 0 6px 64px;
        outline-color: #F3FDFA;
      }
    } */
  }

  .input__title {
    display: block;
    position: absolute;
    left: 69px;
    top: 6px;
    font-size: 14px;
    color: #344966;

    &--err {
      color: #ED2E7E;
    }

    &--sac {
      color: #F3FDFA;
    }
  }

  .input__cross {
    display: block;
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    
    path {
      stroke: #b9bac3;
    }

    &--err {
      path {
        stroke: #ED2E7E;
      }
    }

    &--sac {
      path {
        stroke: #F3FDFA;
      }
    }
  }
`;

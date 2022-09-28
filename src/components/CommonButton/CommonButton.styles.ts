import styled, { css } from 'styled-components';

interface IProps {
  toggleBtn: boolean;
}

export const CommonButtonContainer = styled.button<IProps>`
  ${(p) => (p.toggleBtn
    ? css`
    background-color: #344966;
    border: 0;
    border-radius: 16px;
    padding: 10px 50px;
    color: #f0f4ef;
    letter-spacing: 0.75px;
    white-space: nowrap;
    cursor: pointer;
    `
    : css`
    background-color: #FFFFFF;
    border: 1px solid #0D1821;
    border-radius: 16px;
    padding: 9px 50px;
    color: #0D1821;
    letter-spacing: 0.75px;
    white-space: nowrap;
    z-index: -1;
    `)} ;

`;

import styled, { css } from 'styled-components';

interface IProps {
  title: string;
}

export const CommonButtonContainer = styled.button<IProps>`
  ${(p) => (p.title !== 'Added to cart'
    ? css`
    background-color: ${(p) => p.theme.btnColor.main};
    border: 0;
    border-radius: 16px;
    padding: 10px 50px;
    color: ${(p) => p.theme.textColor.btnMain};
    letter-spacing: 0.75px;
    white-space: nowrap;
    cursor: pointer;
    `
    : css`
    background-color: ${(p) => p.theme.btnColor.secondary};
    border: 1px solid #0D1821;
    border-radius: 16px;
    padding: 9px 50px;
    color: ${(p) => p.theme.textColor.secondary};
    letter-spacing: 0.75px;
    white-space: nowrap;
    z-index: -1;
    `)} ;

`;

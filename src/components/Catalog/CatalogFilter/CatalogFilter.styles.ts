import styled, { css } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/naming-convention
type Props = {
  filterState?: boolean;
  sortByState?: string;
  title?: string;
};

export const CatalogFilterContainer = styled.div<Props>`
    position: relative;

    z-index: 10;

    :nth-child(2) {
      margin: 0 20px;
    }

    .catalog__filter-btn {
      padding: 10px 123px 10px 15px;
      color: #344966;
      background: #F0F4EF;
      border-radius: 16px;
      border: 0;
      white-space: nowrap;

      cursor: pointer;
      z-index: 2;
      
      ${(p) => p.title === `Sort by ${p.sortByState}` && css`
        background-color: #FFFFFF;
        padding: 10px 74px 10px 15px;
        color: #0D1821;`}
    }

    .catalog__filter-forward {
      position: absolute;
      right: 16px;
      top: 22px;
      cursor: pointer;
      z-index: 0;
      transform: translate(-50%, -50%) rotate(${(p) => (!p.filterState ? 0 : 90)}deg);
    }
`;

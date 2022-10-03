import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/naming-convention
type Props = {
  filterState?: boolean;
  sortTitle?: string;
  title?: string;
};

export const CatalogFilterContainer = styled.div<Props>`
    position: relative;

    z-index: 10;

    :nth-child(2) {
      margin: 0 20px;
    }

    .catalog__filter-btn {
      background: ${(p) => ((p.sortTitle === 'Price' || p.sortTitle === 'Genre')
    ? '#F0F4EF'
    : '#FFFFFF'
  )};
      border-radius: 16px;
      border: 0;
      white-space: nowrap;

      color: ${(p) => ((p.sortTitle === 'Price' || p.sortTitle === 'Genre')
    ? '#344966'
    : '#0D1821'
  )};
      padding: ${(p) => ((p.sortTitle === 'Price' || p.sortTitle === 'Genre')
    ? '10px 123px 10px 15px'
    : '10px 74px 10px 15px'
  )};

      cursor: pointer;
      z-index: 2;

    }
    
    .catalog__filter-forward {
      position: absolute;
      right: 16px;
      top: 22px;
      cursor: pointer;
      z-index: 0;
      transform: translate(-50%, -50%) rotate(${(p) => (!p.filterState ? 0 : 90)}deg);
    }

    @media screen and (max-width: 1000px) {
      width: 100%;

      .catalog__filter-btn {
        padding: 10px 80% 10px 15px;
      };

    }
`;

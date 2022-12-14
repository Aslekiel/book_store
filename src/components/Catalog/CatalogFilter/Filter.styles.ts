import styled from 'styled-components';

type PropsType = {
  filterState?: boolean;
  sortTitle?: string;
  title?: string;
};

export const FilterContainer = styled.div<PropsType>`
    position: relative;

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
      z-index: 1;

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
      width: 90%;

      .catalog__filter-btn {
        width: 100%;
        height: 44px;
        padding-left: 10px;
        text-align: justify;
      };

      :nth-child(2) {
        margin: 0;
      }

    }
`;

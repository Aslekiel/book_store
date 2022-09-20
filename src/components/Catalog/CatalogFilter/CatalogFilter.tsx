import { useState } from 'react';
import forward from '../../../assets/forward.png';
import { SortBy } from '../ModalWindows/SortBy/SortBy';
import { SortGenre } from '../ModalWindows/SortGenre/SortGenre';

import { CatalogFilterContainer } from './CatalogFilter.styles';

interface IProps {
  title: string;
}

export const CatalogFilter: React.FC<IProps> = ({ title }) => {
  const [filterState, setFilterState] = useState(true);

  const onClickHandler = () => {
    setFilterState(!filterState);
  };

  return (
    <CatalogFilterContainer filterState={filterState} title={title}>
      <button
        className="catalog__filter-btn"
        onClick={onClickHandler}
      >
        {title}
      </button>
      <img
        src={forward}
        alt="forward"
        className="catalog__filter-forward"
      />
      {title === 'Genre' && !filterState && <SortGenre />}
      {title === 'Price' && !filterState && <SortBy />}
      {title === 'Sort by price' && !filterState && <SortBy />}
    </CatalogFilterContainer>
  );
};

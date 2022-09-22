import { useState } from 'react';
import forward from '../../../assets/forward.png';
import { SortBy } from '../ModalWindows/SortBy/SortBy';
import { SortGenre } from '../ModalWindows/SortGenre/SortGenre';
import { SortSlider } from '../ModalWindows/SortSlider/SortSlider';

import { CatalogFilterContainer } from './CatalogFilter.styles';

interface IProps {
  title: string;
  isActive?: boolean;
}

export const CatalogFilter: React.FC<IProps> = ({ title }) => {
  const [filterState, setFilterState] = useState(false);

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
      {title === 'Genre' && filterState && <SortGenre />}
      {title === 'Price' && filterState && <SortSlider />}
      {title === 'Sort by price' && filterState && <SortBy />}
    </CatalogFilterContainer>
  );
};

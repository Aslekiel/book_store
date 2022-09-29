import React, { useEffect, useRef, useState } from 'react';
import forward from '../../../assets/forward.png';
import { SortBy } from '../ModalWindows/SortBy/SortBy';
import { SortGenre } from '../ModalWindows/SortGenre/SortGenre';
import { SortSlider } from '../ModalWindows/SortSlider/SortSlider';

import { CatalogFilterContainer } from './CatalogFilter.styles';

interface IProps {
  title: string;
  sortByTitleState?: string;
  setSortByTitleState?: React.Dispatch<React.SetStateAction<string>>;
}

export const CatalogFilter: React.FC<IProps> = ({
  title,
  sortByTitleState,
  setSortByTitleState,
}) => {
  const [filterState, setFilterState] = useState(false);
  const container = useRef<HTMLDivElement>();

  const onClickHandler = () => {
    setFilterState(!filterState);
  };

  const handleClickOutside = ({ target }: MouseEvent): void => {
    if (container.current && !container.current?.contains(target as Node)) {
      setFilterState(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <CatalogFilterContainer
      filterState={filterState}
      title={title}
      sortByState={sortByTitleState}
      ref={container}
    >
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
      {title === `Sort by ${sortByTitleState}` && filterState &&
        (<SortBy
          title={title}
          setSortByTitleState={setSortByTitleState}
        />)}
    </CatalogFilterContainer>
  );
};

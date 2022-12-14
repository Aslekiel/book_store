import React, { useEffect, useRef, useState } from 'react';
import forward from '../../../assets/forward.png';
import { SortBy } from '../ModalWindows/SortBy/SortBy';
import { SortGenre } from '../ModalWindows/SortGenre/SortGenre';
import { SortSlider } from '../ModalWindows/SortSlider/SortSlider';

import { FilterContainer } from './Filter.styles';

interface IProps {
  title: string;
}

export const Filter: React.FC<IProps> = ({
  title,
}) => {
  const [filterState, setFilterState] = useState(false);
  const [sortByTitleState, setSortByTitleState] = useState('Price');
  const container = useRef<HTMLDivElement>();

  const lowercaseTitle = sortByTitleState.toLowerCase();

  const onClickHandler = () => {
    setFilterState(!filterState);
  };

  const handleClickOutside = ({ target }: MouseEvent): void => {
    if (container.current && !container.current?.contains(target as Node)) {
      setFilterState(false);
    }
  };

  const onClickSetTitle = (title: string) => {
    setSortByTitleState(title);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <FilterContainer
      filterState={filterState}
      title={title}
      sortTitle={title}
      ref={container}
    >
      <button
        className="catalog__filter-btn"
        onClick={onClickHandler}
      >
        {
          title === 'Sort by'
            ? `Sort by ${lowercaseTitle}`
            : title
        }
      </button>
      <img
        src={forward}
        alt="forward"
        className="catalog__filter-forward"
      />
      {title === 'Genre' && filterState && <SortGenre />}
      {title === 'Price' && filterState && <SortSlider />}
      {title === 'Sort by' && filterState &&
        (<SortBy
          sortByTitleState={sortByTitleState}
          onClickSetTitle={onClickSetTitle}
        />)}
    </FilterContainer>
  );
};

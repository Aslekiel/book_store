import { useState } from 'react';
import { CatalogFiltersContainer } from './CatalogFiltersContainer.styles';
import { CatalogFilter } from '../CatalogFilter/CatalogFilter';

export const CatalogFilters = () => {
  const [sortByState, setSortByState] = useState('price');

  return (
    <CatalogFiltersContainer>
      <h2 className="catalog__title">Catalog</h2>
      <div className="catalog__filters">
        <CatalogFilter
        title="Genre"
        />
        <CatalogFilter
        title="Price"
        />
        <CatalogFilter
          title={`Sort by ${sortByState}`}
          sortByState={sortByState}
          setSortByState={setSortByState}
        />
      </div>
    </CatalogFiltersContainer>
  );
};

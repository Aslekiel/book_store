import { CatalogFiltersContainer } from './CatalogFilterContainer.styles';
import { CatalogFilter } from '../CatalogFilter/CatalogFilter';

export const CatalogFilters = () => {
  return (
    <CatalogFiltersContainer>
      <h2 className="catalog__title">Catalog</h2>
      <div className="catalog__filters">
        <CatalogFilter title="Genre" />
        <CatalogFilter title="Price" />
        <CatalogFilter title="Sort by price" />
      </div>
    </CatalogFiltersContainer>
  );
};

import { CatalogContainer } from './CatalogContainer.styles';
import { CatalogFilters } from './CatalogFilters/CatalogFilter';
import { Pagination } from './Pagination/Pagination';

export const Catalog = () => {
  return (
    <CatalogContainer>
      <CatalogFilters />
      <Pagination />
    </CatalogContainer>
  );
};

import { Books } from './Books/Books';
import { CatalogContainer } from './CatalogContainer.styles';
import { CatalogFilters } from './CatalogFilters/CatalogFilters';
import { Pagination } from './Pagination/Pagination';

export const Catalog = () => {
  return (
    <CatalogContainer>
      <CatalogFilters />
      <Books />
      <Pagination />
    </CatalogContainer>
  );
};

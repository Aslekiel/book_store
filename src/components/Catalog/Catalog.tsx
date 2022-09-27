import { Books } from './Books/Books';
import { CatalogContainer } from './CatalogContainer.styles';
import { CatalogFilters } from './CatalogFilters/CatalogFilters';

export const Catalog = () => {
  return (
    <CatalogContainer>
      <CatalogFilters />
      <Books />
    </CatalogContainer>
  );
};

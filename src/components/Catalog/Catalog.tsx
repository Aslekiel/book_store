import { useAppSelector } from '../../store/hooks/hooks';
import { Books } from './Books/Books';
import { CatalogContainer } from './CatalogContainer.styles';
import { CatalogFilters } from './CatalogFilters/CatalogFilters';

export const Catalog = () => {
  const books = useAppSelector((state) => state.books.books);
  return (
    <CatalogContainer>
      <CatalogFilters title="Catalog" />
      <Books books={books} />
    </CatalogContainer>
  );
};

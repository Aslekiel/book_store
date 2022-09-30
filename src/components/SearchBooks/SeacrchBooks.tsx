import { useAppSelector } from '../../store/hooks/hooks';
import { Books } from '../Catalog/Books/Books';
import { SearchBooksContainer } from './SearchBooksContainer.styles';

export const SeacrchBooks = () => {
  const books = useAppSelector((state) => state.books.books);
  return (
    <SearchBooksContainer>
      <Books books={books} />
    </SearchBooksContainer>
  );
};

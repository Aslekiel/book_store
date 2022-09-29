import { setBooks } from '../../../../store/books/books';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks/hooks';
import { SortByContainer } from './SortByContainer.styles';

// eslint-disable-next-line @typescript-eslint/naming-convention
type Props = {
  title: string;
  setSortByTitleState: React.Dispatch<React.SetStateAction<string>>;
};

export const SortBy: React.FC<Props> = ({ title, setSortByTitleState }) => {
  const books = useAppSelector((state) => state.books.books);
  const dispatch = useAppDispatch();

  const sortByPrice = () => {
    try {
      const sortedByPrice = [...books].sort((a, b) => (Number(a.price) > Number(b.price) ? 1 : -1));
      dispatch(setBooks({ books: sortedByPrice }));
      setSortByTitleState('price');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const sortByName = () => {
    try {
      const sortedByName = [...books].sort((a, b) => (a.title > b.title ? 1 : -1));
      dispatch(setBooks({ books: sortedByName }));
      setSortByTitleState('name');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const sortByAuthorName = () => {
    try {
      const sortedByAuthorName = [...books].sort((a, b) => (a.author > b.author ? 1 : -1));
      dispatch(setBooks({ books: sortedByAuthorName }));
      setSortByTitleState('author name');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const sortByRating = () => {
    try {
      const sortedByRating = [...books].sort((a, b) => (a.rating > b.rating ? 1 : -1));
      dispatch(setBooks({ books: sortedByRating }));
      setSortByTitleState('rating');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const sortByDataOfIssue = () => {
    try {
      const sortedByDataOfIssue = [...books].sort(
        (a, b) => (a.dateOfIssue > b.dateOfIssue ? 1 : -1),
      );
      dispatch(setBooks({ books: sortedByDataOfIssue }));
      setSortByTitleState('data of issue');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <SortByContainer>
      <div className="sort__triangle" />
      <div
        className={
          title === 'Sort by price'
            ? 'sort__btn--active'
            : 'sort__btn'}
        onClick={sortByPrice}
      >
        Price
      </div>
      <div
        className={
          title === 'Sort by name'
            ? 'sort__btn--active'
            : 'sort__btn'}
        onClick={sortByName}
      >
        Name
      </div>
      <div
        className={
          title === 'Sort by author name'
            ? 'sort__btn--active'
            : 'sort__btn'}
        onClick={sortByAuthorName}
      >
        Author name
      </div>
      <div
        className={
          title === 'Sort by rating'
            ? 'sort__btn--active'
            : 'sort__btn'}
          onClick={sortByRating}
      >
        Rating
      </div>
      <div
        className={
          title === 'Sort by data of issue'
            ? 'sort__btn--active'
            : 'sort__btn'}
        onClick={sortByDataOfIssue}
      >
        Date of issue
      </div>
    </SortByContainer>
  );
};

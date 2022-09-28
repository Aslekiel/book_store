import { PaginationContainer } from './Pagination.styles';
import arrow from '../../../assets/forward.png';
import { useAppSelector } from '../../../store/hooks/hooks';

interface IProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination: React.FC<IProps> = ({ currentPage, setCurrentPage }) => {
  const books = useAppSelector((state) => state.books.books);
  const pages = [];

  for (let i = 1; i <= Math.ceil(books.length / 12); i++) {
    pages.push(i);
  }

  const onClickGoBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onClickGoForward = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <PaginationContainer pagesAmount={pages.length}>
      <img
        src={arrow}
        alt="back-arrow"
        className="pagination__back-arrow"
        onClick={onClickGoBack}
      />
      <div className="pagination__list">
        {pages.map((page, index) => {
          return (
            <div
              key={index}
              className={
                index + 1 === currentPage
                  ? 'pagination__list__item-act'
                  : 'pagination__list__item-def'
              }
            />
          );
        })}
      </div>
      <img
        src={arrow}
        alt="forward-arrow"
        className="pagination__forward-arrow"
        onClick={onClickGoForward}
      />
    </PaginationContainer>
  );
};

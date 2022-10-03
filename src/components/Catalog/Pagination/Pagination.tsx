import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PaginationContainer } from './Pagination.styles';
import arrow from '../../../assets/forward.png';
import { useAppSelector } from '../../../store/hooks/hooks';

export const Pagination = () => {
  const { count } = useAppSelector((state) => state.books);

  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(+searchParams.get('page') || 1);
  const [booksPerPage] = useState(+searchParams.get('limit') || 12);

  const pages = [];

  for (let i = 1; i <= Math.ceil(count / booksPerPage); i++) {
    pages.push(i);
  }

  const onClickGoBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      searchParams.set('page', String(currentPage - 1));
      searchParams.set('limit', String(booksPerPage));
      if (currentPage - 1 === 1) {
        searchParams.delete('page');
      }
    }
    searchParams.delete('limit');
    setSearchParams(searchParams);
  };

  const onClickGoForward = () => {
    if (currentPage < pages?.length) {
      setCurrentPage(currentPage + 1);
      searchParams.set('page', String(currentPage + 1));
      searchParams.set('limit', String(booksPerPage));
    }
    searchParams.delete('limit');
    setSearchParams(searchParams);
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
                  ? 'pagination__list_item-act'
                  : 'pagination__list_item-def'
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

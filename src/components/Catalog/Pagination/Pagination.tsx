import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PaginationContainer } from './Pagination.styles';
import arrow from '../../../assets/forward.png';
import { useAppSelector } from '../../../store/hooks/hooks';

export const Pagination = () => {
  const { serviceInfo } = useAppSelector((state) => state.books);

  const [searchParams, setSearchParams] = useSearchParams();
  const [booksPerPage] = useState(+searchParams.get('limit') || 12);

  const pages = useMemo(() => {
    const arr = [];
    for (let i = 1; i <= Math.ceil(serviceInfo.totalBooks / booksPerPage); i++) {
      arr.push(i);
    }
    return arr;
  }, [booksPerPage, serviceInfo.totalBooks]);

  const onClickGoBack = () => {
    if (+searchParams.get('page') > 1) {
      searchParams.set('page', String(+searchParams.get('page') - 1));
      searchParams.set('limit', String(booksPerPage));
      if (+searchParams.get('page') - 1 === 1) {
        searchParams.delete('page');
      }
    }
    searchParams.delete('limit');
    setSearchParams(searchParams);
  };

  const onClickGoForward = () => {
    if (+searchParams.get('page') < pages?.length) {
      searchParams.set('page', String(+searchParams.get('page') + 1));
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
                index + 1 === +searchParams.get('page')
                  ? 'pagination__list_item-active'
                  : 'pagination__list_item-default'
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

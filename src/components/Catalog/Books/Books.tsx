import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import { BooksContainer } from './BooksContainer.styles';
import { Book } from './Book/Book';
import { useAppDispatch } from '../../../store/hooks/hooks';
import { booksApi } from '../../../api/booksApi';
import { setBooks } from '../../../store/books/books';
import { Pagination } from '../Pagination/Pagination';
import type { IBook } from '../../../api/types';
import { LoadingSpinner } from '../../LoadingSpinner/LoadingSpinner';

type PropsType = {
  books: IBook[];
};

export const Books: React.FC<PropsType> = ({ books }) => {
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      const filter = {
        page: searchParams.get('page') || undefined,
        limit: searchParams.get('limit') || 12,
        search: searchParams.get('search') || undefined,
        genre: searchParams.get('genre') || undefined,
        minPrice: searchParams.get('minPrice') || undefined,
        maxPrice: searchParams.get('maxPrice') || undefined,
        sortBy: searchParams.get('sortBy') || 'price',
      };

      try {
        const res = await booksApi.getAllBooks(filter);
        dispatch(setBooks(res.data));
        setIsLoading(false);
      } catch (error) {
        if (error instanceof AxiosError) {
          return toast(error.response?.data.message);
        }
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, [dispatch, searchParams]);

  if (isLoading) {
    return (
      <LoadingSpinner />
    );
  }

  return (
    <>
      <BooksContainer>
        {books?.map((book) => {
          return (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              price={book.price}
              logo={book.logo}
              dataOfIssue={book.dateOfIssue}
              rating={book.rating}
            />);
        })}
        <ToastContainer />
      </BooksContainer>
      <Pagination />
    </>
  );
};

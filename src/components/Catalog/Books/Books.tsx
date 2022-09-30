import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { BooksContainer } from './BooksContainer.styles';
import { Book } from './Book/Book';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import { booksApi } from '../../../api/booksApi';
import { setBooks } from '../../../store/books/books';
import { Pagination } from '../Pagination/Pagination';
import type { IBook } from '../../../api/types';
import { LoadingSpinner } from '../../LoadingSpinner/LoadingSpinner';

type PropsType = {
  books: IBook[];
};

export const Books: React.FC<PropsType> = ({ books }) => {
  const filteredGenres = useAppSelector((state) => state.filteredGenres.genres);
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(12);

  const lastBookIndex = currentPage * booksPerPage;
  const firstBookIndex = lastBookIndex - booksPerPage;
  const currentBooks = books?.slice(firstBookIndex, lastBookIndex);

  useEffect(() => {
    (async () => {
      try {
        if (!filteredGenres.length) {
          const res = await booksApi.getAllBooks();
          dispatch(setBooks(res.data));
          setIsLoading(false);
          return;
        }
        const res = await booksApi.getFilteredArrayOfBooks(filteredGenres);
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
  }, [dispatch, filteredGenres]);

  if (isLoading) {
    return (
      <LoadingSpinner />
    );
  }

  return (
    <>
      <BooksContainer>
        {currentBooks?.map((book) => {
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
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

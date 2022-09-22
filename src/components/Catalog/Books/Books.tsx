import { useEffect } from 'react';
import { AxiosError } from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { BooksContainer } from './BooksContainer.styles';
import { Book } from './Book/Book';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import { booksApi } from '../../../api/booksApi';
import { setBooks } from '../../../store/books/books';

export const Books = () => {
  const books = useAppSelector((state) => state.books.books);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const res = await booksApi.getAllBooks();
        dispatch(setBooks(res.data));
      } catch (error) {
        if (error instanceof AxiosError) {
          return toast(error.response?.data.message);
        }
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, [dispatch]);

  return (
    <BooksContainer>
      {books.map((book) => {
        return (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
            logo={book.logo}
          />);
      })}
      <ToastContainer />
    </BooksContainer>
  );
};

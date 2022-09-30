import { toast, ToastContainer } from 'react-toastify';
import { AxiosError } from 'axios';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';

import { LoginSignupBanner } from '../LoginSignupBanner/LoginSignupBanner';
import { BookInfoContainer } from './BookInfoContainer.styles';

import { booksApi } from '../../api/booksApi';
import type { IBook } from '../../api/types';
import { getRecommendedBooksThunk } from '../../store/books/Thunks/booksThunks';

import { CommentsBlock } from './CommentsBlock/CommentsBlock';
import { BookPreview } from './BookPreview/BookPreview';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { RecommendationBlock } from './RecommendationBlock/RecommendationBlock';

export const BookInfo = () => {
  const user = useAppSelector((state) => state.user.user);
  const books = useAppSelector((state) => state.books.books);
  const dispatch = useAppDispatch();

  const { id } = useParams();
  const bookId = id.slice(1);

  const [book, setBook] = useState<IBook>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const resBookById = await booksApi.getBookById(Number(bookId));
        await dispatch(getRecommendedBooksThunk(Number(bookId))).unwrap();
        setBook(resBookById.data);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof AxiosError) {
          return toast(error.response?.data.message);
        }
        throw new Error();
      }
    })();
  }, [bookId, dispatch, books?.length]);

  if (isLoading) {
    return (
      <LoadingSpinner />
    );
  }

  return (
    book &&
    (
      <BookInfoContainer>
        <BookPreview
          logo={book.logo}
          title={book.title}
          author={book.author}
          description={book.description}
          price={book.price}
          bookId={bookId}
          bookRating={book.rating}
        />
        <CommentsBlock
          key={+bookId}
          id={+bookId}
          comments={book?.comments}
          isAuth={user?.email}
        />
        {!user?.email ? <LoginSignupBanner /> : null}
        <RecommendationBlock books={books} />
        <ToastContainer />
      </BookInfoContainer>
    )
  );
};

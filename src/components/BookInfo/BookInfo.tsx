import { toast, ToastContainer } from 'react-toastify';
import { AxiosError } from 'axios';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';

import { LoginSignupBanner } from '../LoginSignupBanner/LoginSignupBanner';
import { BookInfoContainer } from './BookInfoContainer.styles';

import { booksApi } from '../../api/booksApi';
import type { IBook } from '../../types';

import { CommentsBlock } from './CommentsBlock/CommentsBlock';
import { BookPreview } from './BookPreview/BookPreview';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { RecommendationBlock } from './RecommendationBlock/RecommendationBlock';

export const BookInfo = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const [book, setBook] = useState<IBook>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [recommendBooks, setRecommendBooks] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const resBookById = await booksApi.getBookById(Number(id));
        const resRecommendBooks = await booksApi.getRecommendedBooks(Number(id));

        await Promise.all([resBookById, resRecommendBooks]);

        setRecommendBooks(resRecommendBooks.data);
        setBook(resBookById.data);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof AxiosError) {
          return toast(error.response?.data.message);
        }
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, [id, dispatch]);

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
          bookId={id}
          bookRating={book.rating}
        />
        <CommentsBlock
          id={+id}
          comments={book.comments}
          isAuth={user?.email}
        />
        {!user?.email ? <LoginSignupBanner /> : null}
        <RecommendationBlock books={recommendBooks} />
        <ToastContainer />
      </BookInfoContainer>
    )
  );
};

import { useEffect, useState } from 'react';
import { getAllBooksFromCartThunk } from '../../store/books/Thunks/booksThunks';

import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';

import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { CartWithBooks } from './CartWithBooks/CartWithBooks';
import { EmptyCart } from './EmptyCart/EmptyCart';

export const Cart = () => {
  const books = useAppSelector((state) => state.books.books);
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getAllBooksFromCartThunk()).unwrap();
        setIsLoading(false);
      } catch (error) {
        throw new Error();
      }
    })();
  }, [dispatch]);

  if (isLoading) {
    return (
      <LoadingSpinner />
    );
  }

  return (
    <div>
      {books.length
        ? <CartWithBooks />
        : <EmptyCart />}
    </div>
  );
};

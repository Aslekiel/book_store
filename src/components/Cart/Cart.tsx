import { useEffect, useState } from 'react';

import { cartApi } from '../../api/cartApi';

import { setBooks } from '../../store/books/books';
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
        const res = await cartApi.getAllBooksFromCart();
        dispatch(setBooks(res.data));
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

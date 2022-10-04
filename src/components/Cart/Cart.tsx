import { useEffect, useState } from 'react';
import { cartApi } from '../../api/cartApi';

import { useAppSelector } from '../../store/hooks/hooks';

import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { CartWithBooks } from './CartWithBooks/CartWithBooks';
import { EmptyCart } from './EmptyCart/EmptyCart';

export const Cart = () => {
  const { cart } = useAppSelector((state) => state.user.user);

  const [isLoading, setIsLoading] = useState(true);
  const [booksFromCart, setBooksFromCart] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await cartApi.getAllBooksFromCart();
        setBooksFromCart(res.data);
        setIsLoading(false);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, []);

  if (isLoading) {
    return (
      <LoadingSpinner />
    );
  }

  return (
    <div>
      {cart.length
        ? <CartWithBooks booksFromCart={booksFromCart} />
        : <EmptyCart />}
    </div>
  );
};

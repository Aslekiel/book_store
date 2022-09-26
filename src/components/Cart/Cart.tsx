import { useEffect, useState } from 'react';
import { cartApi } from '../../api/cartApi';
import { setBooks } from '../../store/books/books';
import { useAppDispatch } from '../../store/hooks/hooks';
import { CartWithBooks } from './CartWithBooks/CartWithBooks';
import { EmptyCart } from './EmptyCart/EmptyCart';

export const Cart = () => {
  const [emptyCart, setEmptyCart] = useState(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const res = await cartApi.getAllBooksFromCart();
        dispatch(setBooks(res.data));
        setEmptyCart(false);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, [dispatch]);

  return (
    <div>
      {!emptyCart
        ? <CartWithBooks />
        : <EmptyCart />}
    </div>
  );
};

import { useEffect } from 'react';
import { cartApi } from '../../api/cartApi';
import { setBooks } from '../../store/books/books';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { CartWithBooks } from './CartWithBooks/CartWithBooks';
import { EmptyCart } from './EmptyCart/EmptyCart';

export const Cart = () => {
  const user = useAppSelector((state) => state.user.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const res = await cartApi.getAllBooksFromCart();
        dispatch(setBooks(res.data));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, [dispatch]);

  return (
    <div>
      {user.cart.length
        ? <CartWithBooks />
        : <EmptyCart />}
    </div>
  );
};

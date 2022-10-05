import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import type { IBook, IUserCart } from '../../../types';
import { useAppSelector } from '../../../store/hooks/hooks';

import { CommonButton } from '../../CommonButton/CommonButton';
import { BookInCart } from './BookInCart/BookInCart';

import { CartWithBooksContainer } from './CartWithBooksContainer';

type PropsType = {
  booksFromCart: IBook[];
};

export const CartWithBooks: React.FC<PropsType> = ({ booksFromCart }) => {
  const { cart } = useAppSelector((state) => state.user.user);

  const [totalPrice, setTotalPrice] = useState(0);

  // eslint-disable-next-line array-callback-return
  const sum = booksFromCart.reduce((acc, item) => {
    const inCartValue: IUserCart = cart?.find((i) => i.bookId === item.id);
    if (inCartValue) {
      return acc + inCartValue.count * item.price;
    }
  }, 0);

  useEffect(() => {
    setTotalPrice(+sum.toFixed(2));
  }, [sum]);

  return (
    <CartWithBooksContainer>
      {booksFromCart.map((book) => {
        return (
          <div key={book.id} className="book">
            <BookInCart
              id={book.id}
              logo={book.logo}
              title={book.title}
              author={book.author}
              price={book.price}
            />
            <hr className="book__line" />
          </div>
        );
      })}
      <div className="cart__total-price">
        <h2
          className="cart__total-price_price"
        >
          {`Total: ${totalPrice}`}
        </h2>
        <div className="cart__total-price_btns">
          <Link
            className="cart__total-price_btns_continue"
            to="/catalog"
          >
            Continue shopping
          </Link>
          <CommonButton
            title="Chekout"
            toggleBtn
          />
        </div>
      </div>
    </CartWithBooksContainer>
  );
};

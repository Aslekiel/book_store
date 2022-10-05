import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { IBook } from '../../../types';
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
  const navigate = useNavigate();

  const booksPriceArray = booksFromCart.map((book) => book.price);
  const booksAmoutFromCart = Object.values(cart?.reduce((acc, item) => {
    const index = item.bookId;
    acc[index] = item.count;
    return acc;
  }, {} as { [index: string]: number }));

  const sumPerAmountBooks = [];

  for (let i = 0; i < booksPriceArray.length; i++) {
    sumPerAmountBooks.push(+(booksPriceArray[i] * booksAmoutFromCart[i]).toFixed(2));
  }

  const sum = sumPerAmountBooks.reduce((acc, item) => acc + item, 0);

  const onClickContinueShopping = () => {
    navigate('/catalog');
  };

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
          <button
            className="cart__total-price_btns_continue"
            onClick={onClickContinueShopping}
          >
            Continue shopping
          </button>
          <CommonButton
            title="Chekout"
            toggleBtn
          />
        </div>
      </div>
    </CartWithBooksContainer>
  );
};

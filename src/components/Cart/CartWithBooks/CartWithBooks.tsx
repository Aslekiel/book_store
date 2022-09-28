import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks/hooks';
import { CommonButton } from '../../CommonButton/CommonButton';
import { BookInCart } from './BookInCart/BookInCart';
import { CartWithBooksContainer } from './CartWithBooksContainer';

export const CartWithBooks = () => {
  const books = useAppSelector((state) => state.books.books);

  const booksWithPrice = books.reduce((acc, book) => {
    const index = book.id;
    acc[index] = +book.price;
    return acc;
  }, {} as { [index: number]: number });

  const [totalPrice, setTotalPrice] = useState(0);
  const [booksPrices, setBooksPrices] = useState(booksWithPrice);
  const navigate = useNavigate();

  const sum = books.reduce((acc, book) => acc + +book.price, 0);

  // const booksPrice = books.map((book) => book.price);

  useEffect(() => {
    setTotalPrice(+sum.toFixed(2));
  }, [sum]);

  const onClickContinueShopping = () => {
    navigate('/catalog');
  };

  return (
    <CartWithBooksContainer>
      {books.map((book) => {
        return (
          <div key={book.id} className="book">
            <BookInCart
              id={book.id}
              logo={book.logo}
              title={book.title}
              author={book.author}
              price={book.price}
            />
            {books.length - 1 && <hr className="book__line" />}
          </div>
        );
      })}
      <div className="cart__total-price">
        <h2
          className="cart__total-price__price"
        >
          {`Total: ${totalPrice}`}
        </h2>
        <div className="cart__total-price__btns">
          <button
            className="cart__total-price__btns__continue"
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

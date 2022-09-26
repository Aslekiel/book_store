import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../store/hooks/hooks';
import { CommonButton } from '../../CommonButton/CommonButton';
import { BookInCart } from './BookInCart/BookInCart';
import { CartWithBooksContainer } from './CartWithBooksContainer';

export const CartWithBooks = () => {
  const books = useAppSelector((state) => state.books.books);
  const [booksAmount, setBooksAmount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const sum = books.reduce((acc, book) => acc + +book.price, 0);

  const onClickIncrement = () => {
    if (booksAmount > 0) {
      setBooksAmount(booksAmount - 1);
    }
  };

  const onClickDecrement = () => {
    setBooksAmount(booksAmount + 1);
  };

  useEffect(() => {
    setTotalPrice(+sum.toFixed(2));
  }, [sum]);

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
              booksAmount={booksAmount}
              setBooksAmount={setBooksAmount}
              onClickIncrement={onClickIncrement}
              onClickDecrement={onClickDecrement}
            />
            <hr className="book__line" />
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
          >
            Continue shopping
          </button>
          <CommonButton title="Chekout" />
        </div>
      </div>
    </CartWithBooksContainer>
  );
};

import { useState } from 'react';
import { BookInCartContainer } from './BooInCartContainer.styles';
import { ReactComponent as DeleteBookLogo } from '../../../../assets/delete.svg';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks/hooks';
import { cartApi } from '../../../../api/cartApi';
import { setBooks } from '../../../../store/books/books';
import { setUserCart } from '../../../../store/user/user';

interface IProps {
  id: number | string;
  logo: string;
  title: string;
  author: string;
  price: number;
}

export const BookInCart: React.FC<IProps> = ({
  id,
  logo,
  title,
  author,
  price,
}) => {
  const user = useAppSelector((state) => state.user.user);
  const booksCopies = !user ? [] : user.cart
    .filter((cart) => cart.bookId === id)
    .map((cart) => cart.count);

  const [booksAmount, setBooksAmount] = useState(+booksCopies);

  const dispatch = useAppDispatch();

  const onClickDeleteBook = () => {
    (async () => {
      try {
        const res = await cartApi.deleteBookFromCart(id);
        dispatch(setBooks(res.data));
        dispatch(setUserCart(res.data.user));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  };

  const onClickIncrement = () => {
    if (booksAmount > 1) {
      setBooksAmount(booksAmount - 1);
      (async () => {
        try {
          const res = await cartApi.removeBookCopy(id);
          dispatch(setUserCart(res.data));
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log(error);
        }
      })();
    }
  };

  const onClickDecrement = () => {
    setBooksAmount(booksAmount + 1);
    (async () => {
      try {
        const res = await cartApi.addBookCopy(id);
        dispatch(setUserCart(res.data));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  };

  return (
    <BookInCartContainer>
      <img
        src={logo}
        alt="book__logo"
        className="book__logo"
      />
      <div className="book__info">
        <h2
          className="book__info__title"
        >
          {title}
        </h2>
        <h3
          className="book__info__author"
        >
          {author}
        </h3>
        <div className="book__info__btns">
          <button
            className="book__info__btns__minus"
            onClick={onClickIncrement}
          >
            -
          </button>
          <span
            className="book__info__btns__amount-books"
          >
            {booksCopies}
          </span>
          <button
            className="book__info__btns__plus"
            onClick={onClickDecrement}
          >
            +
          </button>
          <DeleteBookLogo
            className="book__info__btns__delete"
            onClick={onClickDeleteBook}
          />
        </div>
        <h2
          className="book__info__price"
        >
          {`$ ${+(price * +booksCopies).toFixed(2)} USD`}
        </h2>
      </div>
    </BookInCartContainer>
  );
};

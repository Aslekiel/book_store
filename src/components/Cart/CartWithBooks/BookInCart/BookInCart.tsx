import { useEffect, useState } from 'react';
import { BookInCartContainer } from './BooInCartContainer.styles';
import { ReactComponent as DeleteBookLogo } from '../../../../assets/delete.svg';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks/hooks';

import { cartApi } from '../../../../api/cartApi';
import { setUserCart } from '../../../../store/user/user';

import type { IUserCart } from '../../../../api/types';

interface IProps {
  id: number;
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
  const dispatch = useAppDispatch();

  const [cart, setCart] = useState<IUserCart[]>([]);

  const booksCopies = !user ? [] : user.cart
    .filter((cart) => cart.bookId === id)
    .map((cart) => cart.count);

  const [booksAmount, setBooksAmount] = useState(+booksCopies);

  const onClickDeleteBook = async () => {
    try {
      const res = await cartApi.deleteBookFromCart(id);
      const resultCart = user.cart.filter((book) => book.id !== res.data);
      setCart(resultCart);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const onClickIncrement = async () => {
    if (booksAmount > 1) {
      setBooksAmount(booksAmount - 1);
      try {
        const res = await cartApi.reduceBookAmount(id);
        dispatch(setUserCart(res.data));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }
  };

  const onClickDecrement = async () => {
    setBooksAmount(booksAmount + 1);
    try {
      const res = await cartApi.increaseBookAmount(id);
      dispatch(setUserCart(res.data));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
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
          className="book__info_title"
        >
          {title}
        </h2>
        <h3
          className="book__info_author"
        >
          {author}
        </h3>
        <div className="book__info_btns">
          <button
            className="book__info_btns_minus"
            onClick={onClickIncrement}
          >
            -
          </button>
          <span
            className="book__info_btns_amount-books"
          >
            {booksCopies}
          </span>
          <button
            className="book__info_btns_plus"
            onClick={onClickDecrement}
          >
            +
          </button>
          <DeleteBookLogo
            className="book__info_btns_delete"
            onClick={onClickDeleteBook}
          />
        </div>
        <h2
          className="book__info_price"
        >
          {`$ ${+(price * +booksCopies).toFixed(2)} USD`}
        </h2>
      </div>
    </BookInCartContainer>
  );
};

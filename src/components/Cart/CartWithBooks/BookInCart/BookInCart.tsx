import { useState } from 'react';
import { BookInCartContainer } from './BooInCartContainer.styles';
import { ReactComponent as DeleteBookLogo } from '../../../../assets/delete.svg';
import { useAppDispatch } from '../../../../store/hooks/hooks';
import { cartApi } from '../../../../api/cartApi';
import { setBooks } from '../../../../store/books/books';
import { setUserCart } from '../../../../store/user/user';

interface IProps {
  id: number | string;
  logo: string;
  title: string;
  author: string;
  price: number | string;
}

export const BookInCart: React.FC<IProps> = ({
  id,
  logo,
  title,
  author,
  price,
}) => {
  const [booksAmount, setBooksAmount] = useState(1);
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
    }
  };

  const onClickDecrement = () => {
    setBooksAmount(booksAmount + 1);
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
            {booksAmount}
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
          {`$ ${price} USD`}
        </h2>
      </div>
    </BookInCartContainer>
  );
};

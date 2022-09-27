import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CommonButton } from '../../../CommonButton/CommonButton';
import { BookContainer } from './BookContainer.styles';
import heartFull from '../../../../assets/heart-full.png';
import heartEmpty from '../../../../assets/heart-empty.png';
import { cartApi } from '../../../../api/cartApi';
import fullStar from '../../../../assets/full-star.png';
import emptyStar from '../../../../assets/empty-star.png';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks/hooks';
import { setUserCart } from '../../../../store/user/user';

interface IProps {
  id: number | string;
  title: string;
  author: string;
  price: number;
  logo: string;
  dataOfIssue: string;
  rating: string;
}

export const Book: React.FC<IProps> = ({ id, title, author, price, logo, dataOfIssue, rating }) => {
  const user = useAppSelector((state) => state.user.user);
  const [favorite, setFavorite] = useState(false);

  const [toggleBtn, setToggleBtn] = useState(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const booksIdsFromCart: number[] = [];

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onClickHandler = () => {
    setFavorite(!favorite);
  };

  const onClickCheckBook = () => {
    navigate(`/book/:${id}`);
  };

  for (let i = 0; i < user.cart.length; i++) {
    if (id === user.cart[i].bookId) {
      booksIdsFromCart.push(user.cart[i].bookId);
    }
  }

  useEffect(() => {
    if (booksIdsFromCart.includes(+id)) {
      setToggleBtn(false);
    }
  }, [booksIdsFromCart, id]);

  const addBookToCart = () => {
    (async () => {
      try {
        const res = await cartApi.addBooksToCart(id);
        dispatch(setUserCart(res.data));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  };

  return (
    <BookContainer favorite={favorite}>
      <img
        className="book__logo"
        src={logo}
        alt="book-logo"
        onClick={onClickCheckBook}
      />
      <h3
        className="book__title"
      >
        {title}
      </h3>
      <h4
        className="book__author"
      >
        {author}
      </h4>
      <h4 className="book__data-of-issue">{dataOfIssue}</h4>
      <div
        className="book__rating"
      >
        {new Array(5).fill(null).map((_, index) => (
          <img
            src={index >= +rating ? emptyStar : fullStar}
            key={index}
          />
        ))}
        <span className="book__rating__integer">{rating}</span>
      </div>
      <button
        className="book__save"
        onClick={onClickHandler}
      >
        <img
          className="book__save-favorite"
          src={favorite ? heartFull : heartEmpty}
          alt="heart-favorite"
        />
      </button>
      <CommonButton
        title={`$ ${price} USD`}
        onClick={addBookToCart}
        toggleBtn={toggleBtn}
      />
    </BookContainer>
  );
};

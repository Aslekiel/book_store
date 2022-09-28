import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AxiosError } from 'axios';
import { CommonButton } from '../../../CommonButton/CommonButton';
import { BookContainer } from './BookContainer.styles';
import heartFull from '../../../../assets/heart-full.png';
import heartEmpty from '../../../../assets/heart-empty.png';
import { cartApi } from '../../../../api/cartApi';
import fullStar from '../../../../assets/full-star.png';
import emptyStar from '../../../../assets/empty-star.png';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks/hooks';
import { setUserCart, setUserFavorite } from '../../../../store/user/user';
import { favoriteApi } from '../../../../api/favoriteApi';

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

  const favoriteBooksIds = !user ? [] : user.favorites?.map((favorite) => favorite.bookId);

  const isFavorite = !!favoriteBooksIds.includes(+id);

  const [favorite, setFavorite] = useState(isFavorite);

  const [toggleBtn, setToggleBtn] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const booksIdsFromCart = !user ? [] : user.cart?.map((cart) => cart.bookId);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onClickCheckBook = () => {
    navigate(`/book/:${id}`);
  };

  useEffect(() => {
    if (booksIdsFromCart.includes(+id)) {
      setToggleBtn(false);
    }
  }, [booksIdsFromCart, id]);

  const onClickFavorite = () => {
    (async () => {
      try {
        if (!favorite) {
          const res = await favoriteApi.addFavoriteBook(id);
          dispatch(setUserFavorite(res.data));
          setFavorite(!favorite);
          return;
        }
        const res = await favoriteApi.deleteFavoriteBook(id);
        dispatch(setUserFavorite(res.data));
        setFavorite(!favorite);
      } catch (error) {
        if (error instanceof AxiosError) {
          return toast(error.response?.data.message);
        }
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  };

  const addBookToCart = () => {
    (async () => {
      try {
        const res = await cartApi.addBooksToCart(id);
        dispatch(setUserCart(res.data));
      } catch (error) {
        if (error instanceof AxiosError) {
          return toast(error.response?.data.message);
        }
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
        onClick={onClickFavorite}
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
      <ToastContainer />
    </BookContainer>
  );
};

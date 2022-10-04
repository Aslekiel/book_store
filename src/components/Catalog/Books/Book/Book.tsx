import { toast, ToastContainer } from 'react-toastify';
import { AxiosError } from 'axios';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks/hooks';

import { addBooksToCartThunk, addFavoriteBookThunk, deleteFavoriteBookThunk } from '../../../../store/user/thunk/userThunks';

import heartFull from '../../../../assets/heart-full.png';
import heartEmpty from '../../../../assets/heart-empty.png';

import fullStar from '../../../../assets/full-star.png';
import emptyStar from '../../../../assets/empty-star.png';
import { CommonButton } from '../../../CommonButton/CommonButton';

import { BookContainer } from './BookContainer.styles';

interface IProps {
  id: number;
  title: string;
  author: string;
  price: number;
  logo: string;
  dataOfIssue: string;
  rating: string;
}

export const Book: React.FC<IProps> = ({ id, title, author, price, logo, dataOfIssue, rating }) => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  const favoriteBooksIds = !user ? [] : user?.favorites?.map((favorite) => favorite.bookId);

  const isFavorite = !!favoriteBooksIds?.includes(+id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const booksIdsFromCart = !user ? [] : user?.cart?.map((cart) => cart.bookId);

  const [favorite, setFavorite] = useState(isFavorite);
  const [toggleBtn, setToggleBtn] = useState(true);
  const navigate = useNavigate();

  const onClickCheckBook = () => {
    navigate(`/book/:${id}`);
  };

  const onClickFavorite = async () => {
    try {
      if (!favorite) {
        await dispatch(addFavoriteBookThunk(Number(id))).unwrap();
        setFavorite(!favorite);
        return;
      }
      await dispatch(deleteFavoriteBookThunk(Number(id))).unwrap();
      setFavorite(!favorite);
    } catch (error) {
      if (error instanceof AxiosError) {
        return toast(error.response?.data.message);
      }
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const addBookToCart = async () => {
    try {
      await dispatch(addBooksToCartThunk(Number(id))).unwrap();
    } catch (error) {
      if (error instanceof AxiosError) {
        return toast(error.response?.data.message);
      }
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  useEffect(() => {
    if (booksIdsFromCart?.includes(+id)) {
      setToggleBtn(false);
    }
  }, [booksIdsFromCart, id]);

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
        <span className="book__rating_integer">{rating}</span>
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
        title={toggleBtn ? `$ ${price} USD` : 'Added to cart'}
        onClick={addBookToCart}
      />
      <ToastContainer />
    </BookContainer>
  );
};

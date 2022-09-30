import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';

import { CommonButton } from '../../CommonButton/CommonButton';

import heartFull from '../../../assets/heart-full.png';
import heartEmpty from '../../../assets/heart-empty.png';
import arrowRating from '../../../assets/arrow-rating.png';

import { ratingApi } from '../../../api/ratingApi';
import { setUserCart, setUserFavorite, setUserRating } from '../../../store/user/user';
import { cartApi } from '../../../api/cartApi';

import { RatingStar } from '../RatingStars.styles';
import { favoriteApi } from '../../../api/favoriteApi';
import { BookPreviewContainer } from './BookPreviewContainer.styles';

type PropsType = {
  logo: string;
  title: string;
  author: string;
  description: string;
  price: number;
  bookId: string;
  bookRating: string;
};

export const BookPreview: React.FC<PropsType> = ({
  logo,
  title,
  author,
  description,
  price,
  bookId,
  bookRating,
}) => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  const favoriteBooksIds = !user ? [] : user?.favorites?.map((favorite) => favorite.bookId);

  const isFavorite = !!favoriteBooksIds?.includes(Number(bookId));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const booksIdsFromCart = !user
    ? [] : user?.cart?.map((cart) => cart.bookId);

  const [toggleBtn, setToggleBtn] = useState(true);
  const [favorite, setFavorite] = useState(isFavorite);
  const [rating, setRating] = useState(0);

  const onClickFavorite = async () => {
    try {
      if (!favorite) {
        const res = await favoriteApi.addFavoriteBook(Number(bookId));
        dispatch(setUserFavorite(res.data));
        setFavorite(!favorite);
        return;
      }
      const res = await favoriteApi.deleteFavoriteBook(Number(bookId));
      dispatch(setUserFavorite(res.data));
      setFavorite(!favorite);
    } catch (error) {
      if (error instanceof AxiosError) {
        return toast(error.response?.data.message);
      }
      throw new Error();
    }
  };

  const addBookToCart = () => {
    (async () => {
      try {
        const res = await cartApi.addBooksToCart(Number(bookId));
        dispatch(setUserCart(res.data));
        setToggleBtn(false);
      } catch (error) {
        if (error instanceof AxiosError) {
          return toast(error.response?.data.message);
        }
        throw new Error();
      }
    })();
  };

  const addRating = (event: React.SyntheticEvent) => {
    const grade = (event.target as HTMLInputElement).value;
    (async () => {
      try {
        const res = await ratingApi.addRating(Number(bookId), Number(grade));
        dispatch(setUserRating(res.data));
      } catch (error) {
        if (error instanceof AxiosError) {
          return toast(error.response?.data.message);
        }
        throw new Error();
      }
    })();
  };

  useEffect(() => {
    if (booksIdsFromCart?.includes(Number(bookId))) {
      setToggleBtn(false);
    }
  }, [booksIdsFromCart, bookId]);

  useEffect(() => {
    for (let i = 0; i < user?.ratings?.length; i++) {
      if (Number(bookId) === user.ratings[i].bookId) {
        setRating(+user.ratings[i].grade);
      }
    }
  }, [bookId, user?.ratings]);

  return (
    <BookPreviewContainer favorite={favorite}>
      <div className="book__logo">
        <img
          src={logo}
          alt="book_logo"
          className="book__logo__img"
        />
        <button
          className="book__logo__save"
          onClick={onClickFavorite}
        >
          <img
            className="book__logo__save-favorite"
            src={favorite ? heartFull : heartEmpty}
            alt="heart-favorite"
          />
        </button>
      </div>
      <div className="book__info">
        <h2 className="book__info__title">
          {title}
        </h2>
        <h3 className="book__info__author-name">
          {author}
        </h3>
        <div className="book__info__rating">
          <RatingStar
            name="read-only"
            defaultValue={1}
            readOnly max={1}
            className="book__info__rating__one-star"
          />
          <span className="book__info__rating__integer">
            {bookRating}
          </span>
          <RatingStar
            name="half-rating"
            value={!user ? 0 : rating}
            precision={0.5}
            onChange={addRating}
          />
          <img
            src={arrowRating}
            alt="arrow-rating"
            className="book__info__rating__arrow"
          />
          <span className="book__info__rating__rate-this">
            Rate this book
          </span>
        </div>
        <h3 className="book__info__description-title">
          Description
        </h3>
        <div className="book__info__description">
          {description}
        </div>
        <div className="book__info__buy-btns">
          <div className="book__info__buy-btns__btn">
            <span className="book__info__buy-btns__btn__title">
              Paperback
            </span>
            <CommonButton title="Not available" />
          </div>
          <div className="book__info__buy-btns__btn">
            <span className="book__info__buy-btns__btn__title">
              Hardcover
            </span>
            <CommonButton
              title={toggleBtn ? `$ ${price} USD` : 'Added to cart'}
              onClick={addBookToCart}
            />
          </div>
        </div>
      </div>
    </BookPreviewContainer>
  );
};

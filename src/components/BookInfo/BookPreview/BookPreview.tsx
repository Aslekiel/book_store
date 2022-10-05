import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';

import { CommonButton } from '../../CommonButton/CommonButton';

import heartFull from '../../../assets/heart-full.png';
import heartEmpty from '../../../assets/heart-empty.png';
import arrowRating from '../../../assets/arrow-rating.png';

import {
  addBooksToCartThunk,
  addFavoriteBookThunk,
  addRatingThunk,
  deleteFavoriteBookThunk,
} from '../../../store/user/thunk/userThunks';

import { RatingStar } from '../RatingStars.styles';
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

  const [rating, setRating] = useState(null);

  const favoriteBooksIds = useMemo(() => {
    return !user ? [] : user?.favorites?.map((favorite) => favorite.bookId);
  }, [user]);

  const booksInCartIds = useMemo(() => {
    return !user ? [] : user?.cart?.map((cart) => cart.bookId);
  }, [user]);

  const isFavorite = !!favoriteBooksIds?.includes(Number(bookId));
  const inCart = !!booksInCartIds?.includes(Number(bookId));

  const onClickFavorite = async () => {
    try {
      if (!isFavorite) {
        await dispatch(addFavoriteBookThunk(Number(bookId))).unwrap();
        return;
      }
      await dispatch(deleteFavoriteBookThunk(Number(bookId))).unwrap();
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
      await dispatch(addBooksToCartThunk(Number(bookId)));
    } catch (error) {
      if (error instanceof AxiosError) {
        return toast(error.response?.data.message);
      }
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const addRating = async (event: React.SyntheticEvent) => {
    const grade = (event.target as HTMLInputElement).value;
    try {
      await dispatch(addRatingThunk(
        {
          bookId: Number(bookId),
          grade: Number(grade),
        },
      )).unwrap();
    } catch (error) {
      if (error instanceof AxiosError) {
        return toast(error.response?.data.message);
      }
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  useEffect(() => {
    const rating = user.ratings.find((book) => book.bookId === +bookId);
    if (rating) {
      setRating(+rating.grade);
    }
  }, [bookId, user?.ratings]);

  return (
    <BookPreviewContainer favorite={isFavorite}>
      <div className="book__logo">
        <img
          src={logo}
          alt="book_logo"
          className="book__logo_img"
        />
        <button
          className="book__logo_save"
          onClick={onClickFavorite}
        >
          <img
            className="book__logo_save-favorite"
            src={isFavorite ? heartFull : heartEmpty}
            alt="heart-favorite"
          />
        </button>
      </div>
      <div className="book__info">
        <h2 className="book__info_title">
          {title}
        </h2>
        <h3 className="book__info_author-name">
          {author}
        </h3>
        <div className="book__info_rating">
          <div className="book__info_rating_wrapper">
            <RatingStar
              name="read-only"
              defaultValue={1}
              readOnly max={1}
            />
            <span className="book__info_rating_integer">
              {bookRating}
            </span>
          </div>
          <div className="book__info_rating_wrapper">
            <RatingStar
              name="half-rating"
              value={!rating ? 0 : rating}
              precision={0.5}
              onChange={addRating}
            />
            <img
              src={arrowRating}
              alt="arrow-rating"
              className="book__info_rating_arrow"
            />
            <span className="book__info_rating_rate-this">
              Rate this book
            </span>
          </div>
        </div>
      </div>
      <div className="book__description">
        <h3 className="book__description_title">
          Description
        </h3>
        <div className="book__description_text">
          {description}
        </div>
        <div className="book__description_buy-btns">
          <div className="book__description_buy-btns_btn">
            <span className="book__description_buy-btns_btn_title">
              Paperback
            </span>
            <CommonButton title="Not available" />
          </div>
          <div className="book__description_buy-btns_btn">
            <span className="book__description_buy-btns_btn_title">
              Hardcover
            </span>
            <CommonButton
              title={!inCart ? `$ ${price} USD` : 'Added to cart'}
              onClick={addBookToCart}
            />
          </div>
        </div>
      </div>
    </BookPreviewContainer>
  );
};

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
      // eslint-disable-next-line no-console
      console.log(error);
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
        // eslint-disable-next-line no-console
        console.log(error);
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
        // eslint-disable-next-line no-console
        console.log(error);
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
          className="book__logo_img"
        />
        <button
          className="book__logo_save"
          onClick={onClickFavorite}
        >
          <img
            className="book__logo_save-favorite"
            src={favorite ? heartFull : heartEmpty}
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
              className="book__info_rating_one-star"
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
        <h3 className="book__info_description-title">
          Description
        </h3>
        <div className="book__info_description">
          {description}
        </div>
        <div className="book__info_buy-btns">
          <div className="book__info_buy-btns_btn">
            <span className="book__info_buy-btns_btn_title">
              Paperback
            </span>
            <CommonButton title="Not available" />
          </div>
          <div className="book__info_buy-btns_btn">
            <span className="book__info_buy-btns_btn_title">
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

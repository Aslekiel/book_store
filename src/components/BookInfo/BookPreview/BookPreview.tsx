import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';

import { CommonButton } from '../../CommonButton/CommonButton';

import { addBooksToCartThunk } from '../../../store/user/thunk/userThunks';

import { BookPreviewContainer } from './BookPreviewContainer.styles';
import { FavoriteButton } from '../../FavoriteButton/FavoriteButton';
import { RatingStars } from './RatingStars/RatingStars';

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

  const booksInCartIds = useMemo(() => {
    return !user ? [] : user?.cart?.map((cart) => cart.bookId);
  }, [user]);

  const inCart = !!booksInCartIds?.includes(Number(bookId));

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

  return (
    <BookPreviewContainer>
      <div className="book__logo">
        <img
          src={logo}
          alt="book_logo"
          className="book__logo_img"
        />
        <FavoriteButton
          id={+bookId}
          mirrorState
        />
      </div>
      <div className="book__info">
        <h2 className="book__info_title">
          {title}
        </h2>
        <h3 className="book__info_author-name">
          {author}
        </h3>
        <RatingStars
          bookId={bookId}
          bookRating={bookRating}
        />
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

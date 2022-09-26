import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import heartFull from '../../assets/heart-full.png';
import heartEmpty from '../../assets/heart-empty.png';
import { CommonButton } from '../CommonButton/CommonButton';
import { LoginSignupBanner } from '../LoginSignupBanner/LoginSignupBanner';
import { BookInfoContainer } from './BookInfoContainer.styles';
import { booksApi } from '../../api/booksApi';
import type { IBook } from '../../api/types';
import { useAppSelector } from '../../store/hooks/hooks';
import arrowRating from '../../assets/arrow-rating.png';
import { RatingStar } from './RatingStars.styles';

export const BookInfo = () => {
  const user = useAppSelector((state) => state.user.user?.email);
  const { id } = useParams();
  const [favorite, setFavorite] = useState(false);

  const bookId = id.slice(1);

  const [book, setBook] = useState<IBook>(null);

  const onClickHandler = () => {
    setFavorite(!favorite);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await booksApi.getBookById(Number(+bookId));
        setBook(res.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, [bookId]);

  return (
    book &&
    (<BookInfoContainer favorite={favorite}>
      <div className="book__info-wrapper">
        <div className="book__logo">
          <img
          src={book.logo}
          alt="book_logo"
          className="book__logo__img"
          />
          <button
          className="book__logo__save"
          onClick={onClickHandler}
          >
          <img
            className="book__logo__save-favorite"
            src={favorite ? heartFull : heartEmpty}
            alt="heart-favorite"
          />
          </button>
        </div>
        <div className="book__info">
          <h2 className="book__info__title">{book.title}</h2>
          <h3 className="book__info__author-name">{book.author}</h3>
          <div className="book__info__rating">
            <RatingStar
            name="read-only"
            defaultValue={1}
            readOnly max={1}
            className="book__info__rating__one-star"
            />
            <span className="book__info__rating__integer">{book.rating}</span>
            <RatingStar name="half-rating" defaultValue={0} precision={0.5} />
            <img src={arrowRating} alt="arrow-rating" className="book__info__rating__arrow" />
            <span className="book__info__rating__rate-this">Rate this book</span>
          </div>
          <h3 className="book__info__description-title">Description</h3>
          <div className="book__info__description">{book.description}</div>
          <div className="book__info__buy-btns">
            <div className="book__info__buy-btns__btn">
              <span className="book__info__buy-btns__btn__title">Paperback</span>
              <CommonButton title="Not available" />
            </div>
            <div className="book__info__buy-btns__btn">
              <span className="book__info__buy-btns__btn__title">Hardcover</span>
              <CommonButton title={`$ ${book.price} USD`} />
            </div>
          </div>
        </div>
      </div>
      <div className="book__comments">
        <h2>Comments</h2>
        <div>Comment №1</div>
      </div>
      {!user ? <LoginSignupBanner /> : null}
      <div>
        <h2>Recommendations</h2>
      </div>
      <div>
          <div>Book</div>
      </div>
     </BookInfoContainer>)
  );
};

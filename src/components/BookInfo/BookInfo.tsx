import { useState } from 'react';
import heartFull from '../../assets/heart-full.png';
import heartEmpty from '../../assets/heart-empty.png';
import test from '../../assets/castle.png';
import { CommonButton } from '../CommonButton/CommonButton';
import { LoginSignupBanner } from '../LoginSignupBanner/LoginSignupBanner';
import { BookInfoContainer } from './BookInfoContainer.styles';

export const BookInfo = () => {
  const [favorite, setFavorite] = useState(false);

  const onClickHandler = () => {
    setFavorite(!favorite);
  };

  return (
    <BookInfoContainer favorite={favorite}>
      <div className="book__info-wrapper">
        <div className="book__logo">
          <img
          src={test}
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
          <h2 className="book__info__title">Title</h2>
          <h3 className="book__info__author-name">Author</h3>
          <div className="book__info__rating">Rating</div>
          <h3 className="book__info__description-title">Description</h3>
          <div className="book__info__description">Text description</div>
          <div className="book__info__buy-btns">
            <div className="book__info__buy-btns__btn">
              <span className="book__info__buy-btns__btn__title">Paperback</span>
              <CommonButton title="Not available" />
            </div>
            <div className="book__info__buy-btns__btn">
              <span className="book__info__buy-btns__btn__title">Hardcover</span>
              <CommonButton title="Price" />
            </div>
          </div>
        </div>
      </div>
      <div className="book__comments">
        <h2>Comments</h2>
        <div>Comment №1</div>
      </div>
      <LoginSignupBanner />
      <div>
        <h2>Recommendations</h2>
      </div>
      <div>
          <div>Book</div>
      </div>
    </BookInfoContainer>
  );
};

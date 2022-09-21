import { useState } from 'react';
import { CommonButton } from '../../../CommonButton/CommonButton';
import { BookContainer } from './BookContainer.styles';
import heartFull from '../../../../assets/heart-full.png';
import heartEmpty from '../../../../assets/heart-empty.png';

interface IProps {
  title: string;
  author: string;
  price: string;
  logo: string;
}

export const Book: React.FC<IProps> = ({ title, author, price, logo }) => {
  const [favorite, setFavorite] = useState(false);

  const onClickHandler = () => {
    setFavorite(!favorite);
  };

  return (
    <BookContainer>
      <img
        className="book__logo"
        src={logo}
        alt="book-logo"
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
      <div
        className="book__rating"
      >
        Rating
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
      <CommonButton title={`${price} USD`} />
    </BookContainer>
  );
};

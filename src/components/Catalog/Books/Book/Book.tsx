import { useEffect, useState } from 'react';
import { CommonButton } from '../../../CommonButton/CommonButton';
import { BookContainer } from './BookContainer.styles';
import heartFull from '../../../../assets/heart-full.png';
import heartEmpty from '../../../../assets/heart-empty.png';
import { useAppDispatch } from '../../../../store/hooks/hooks';
import { addBook } from '../../../../store/cart/cart';
import { cartApi } from '../../../../api/cartApi';

interface IProps {
  id: number | string;
  title: string;
  author: string;
  price: number;
  logo: string;
  dataOfIssue: string;
}

export const Book: React.FC<IProps> = ({ id, title, author, price, logo, dataOfIssue }) => {
  const [favorite, setFavorite] = useState(false);

  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    setFavorite(!favorite);
  };

  const onClickCheckBook = () => {
    // dispatch(addBook(1));
  };

  const addBookToCart = () => {
    (async () => {
      try {
        const res = await cartApi.addBooksToCart(id);
        console.log(res.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  };

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await cartApi.addBooksToCart(id);
  //       console.log(res.data);
  //     } catch (error) {
  //       // eslint-disable-next-line no-console
  //       console.log(error);
  //     }
  //   })();
  // }, [dispatch, id]);

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
      <CommonButton title={`$ ${price} USD`} onClick={addBookToCart} />
    </BookContainer>
  );
};

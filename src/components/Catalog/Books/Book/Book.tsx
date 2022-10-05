import { toast, ToastContainer } from 'react-toastify';
import { AxiosError } from 'axios';

import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks/hooks';

import { addBooksToCartThunk } from '../../../../store/user/thunk/userThunks';

import fullStar from '../../../../assets/full-star.png';
import emptyStar from '../../../../assets/empty-star.png';
import { CommonButton } from '../../../CommonButton/CommonButton';

import { BookContainer } from './BookContainer.styles';
import { FavoriteButton } from '../../../FavoriteButton/FavoriteButton';

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

  const booksIdsFromCart = useMemo(() => {
    return !user ? [] : user?.cart?.map((cart) => cart.bookId);
  }, [user]);

  const inCart = !!booksIdsFromCart?.includes(Number(id));

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

  return (
    <BookContainer>
      <Link to={`/book/${id}`}>
        <img
          className="book__logo"
          src={logo}
          alt="book-logo"
        />
      </Link>
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
      <FavoriteButton id={id} />
      <CommonButton
        title={!inCart ? `$ ${price} USD` : 'Added to cart'}
        onClick={addBookToCart}
      />
      <ToastContainer />
    </BookContainer>
  );
};

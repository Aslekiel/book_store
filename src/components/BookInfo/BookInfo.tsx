import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AxiosError } from 'axios';
import heartFull from '../../assets/heart-full.png';
import heartEmpty from '../../assets/heart-empty.png';
import { CommonButton } from '../CommonButton/CommonButton';
import { LoginSignupBanner } from '../LoginSignupBanner/LoginSignupBanner';
import { BookInfoContainer } from './BookInfoContainer.styles';
import { booksApi } from '../../api/booksApi';
import type { IBook } from '../../api/types';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import arrowRating from '../../assets/arrow-rating.png';
import { RatingStar } from './RatingStars.styles';
import { Book } from '../Catalog/Books/Book/Book';
import { setBooks } from '../../store/books/books';
import { setUserCart, setUserFavorite, setUserRating } from '../../store/user/user';
import { cartApi } from '../../api/cartApi';
import { favoriteApi } from '../../api/favoriteApi';
import { ratingApi } from '../../api/ratingApi';

export const BookInfo = () => {
  const user = useAppSelector((state) => state.user.user);
  const books = useAppSelector((state) => state.books.books);

  const { id } = useParams();

  const bookId = id.slice(1);

  const favoriteBooksIds = !user ? [] : user.favorites.map((favorite) => favorite.bookId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const booksIdsFromCart = !user ? [] : user.cart.map((cart) => cart.bookId);

  useEffect(() => {
    if (booksIdsFromCart.includes(Number(bookId))) {
      setToggleBtn(false);
    }
  }, [booksIdsFromCart, bookId]);

  const isFavorite = !!favoriteBooksIds.includes(Number(bookId));

  const [favorite, setFavorite] = useState(isFavorite);
  const [toggleBtn, setToggleBtn] = useState(true);
  const [book, setBook] = useState<IBook>(null);
  const [rating, setRating] = useState(0);

  const dispatch = useAppDispatch();

  const onClickFavorite = () => {
    (async () => {
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
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  };

  useEffect(() => {
    (async () => {
      try {
        const resBookById = await booksApi.getBookById(Number(bookId));
        const resRecommendedBooks = await booksApi.getRecommendedBooks(Number(bookId));
        setBook(resBookById.data);
        dispatch(setBooks(resRecommendedBooks.data));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, [bookId, dispatch]);

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
    for (let i = 0; i < user.ratings.length; i++) {
      if (Number(bookId) === user.ratings[i].bookId) {
        setRating(+user.ratings[i].grade);
      }
    }
  }, [bookId, user?.ratings]);

  return (
    book &&
    (
      <BookInfoContainer favorite={favorite}>
        <div className="book__info-wrapper">
          <div className="book__logo">
            <img
              src={book.logo}
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
            <h2 className="book__info__title">{
              book.title
            }
            </h2>
            <h3 className="book__info__author-name">{
              book.author
            }
            </h3>
            <div className="book__info__rating">
              <RatingStar
                name="read-only"
                defaultValue={1}
                readOnly max={1}
                className="book__info__rating__one-star"
              />
              <span className="book__info__rating__integer">{
                book.rating
              }
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
              {book.description}
            </div>
            <div className="book__info__buy-btns">
              <div className="book__info__buy-btns__btn">
                <span className="book__info__buy-btns__btn__title">
                  Paperback
                </span>
                <CommonButton title="Not available" toggleBtn />
              </div>
              <div className="book__info__buy-btns__btn">
                <span className="book__info__buy-btns__btn__title">
                  Hardcover
                </span>
                <CommonButton
                  title={`$ ${book.price} USD`}
                  onClick={addBookToCart}
                  toggleBtn={toggleBtn}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="book__comments">
          <h2 className="book__comments__title">
            Comments
          </h2>
          {user?.email &&
            (
              <>
                <textarea
                  className="book__comments__textarea"
                  placeholder="Share a comment"
                />
                <CommonButton title="Post a comment" toggleBtn />
              </>
            )
          }
        </div>
        {!user?.email ? <LoginSignupBanner /> : null}
        <div className="book__recommendations">
          <h2
            className="book__recommendations__title"
          >
            Recommendations
          </h2>
          <div className="book__recommendations__books">
            {books.map((book) => {
              return (
                <Book
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  price={book.price}
                  logo={book.logo}
                  dataOfIssue={book.dateOfIssue}
                  rating={book.rating}
                />);
            })}
          </div>
        </div>
        <ToastContainer />
      </BookInfoContainer>
    )
  );
};

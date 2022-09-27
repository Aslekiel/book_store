import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
import { setUserCart } from '../../store/user/user';
import { cartApi } from '../../api/cartApi';

export const BookInfo = () => {
  const user = useAppSelector((state) => state.user.user?.email);
  const books = useAppSelector((state) => state.books.books);

  const { id } = useParams();

  const [favorite, setFavorite] = useState(false);
  const [toggleBtn, setToggleBtn] = useState(true);
  const [book, setBook] = useState<IBook>(null);

  const dispatch = useAppDispatch();

  const bookId = id.slice(1);

  const onClickHandler = () => {
    setFavorite(!favorite);
  };

  useEffect(() => {
    (async () => {
      try {
        const resBookById = await booksApi.getBookById(Number(+bookId));
        const resRecommendedBooks = await booksApi.getRecommendedBooks(Number(+bookId));
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
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  };

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
                defaultValue={0}
                precision={0.5}
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
          {user &&
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
        {!user ? <LoginSignupBanner /> : null}
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
      </BookInfoContainer>
    )
  );
};

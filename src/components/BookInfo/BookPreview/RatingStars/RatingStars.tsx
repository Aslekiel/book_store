import { AxiosError } from 'axios';
import { toast, ToastContainer } from 'react-toastify';

import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks/hooks';
import { addRatingThunk } from '../../../../store/user/thunk/userThunks';

import arrowRating from '../../../../assets/arrow-rating.png';

import { RatingStar } from '../../RatingStars.styles';
import { RatingStarsContainer } from './RatingStars.styles';

type PropsType = {
  bookId: string;
  bookRating: string;
};

export const RatingStars: React.FC<PropsType> = ({ bookId, bookRating }) => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  const [rating, setRating] = useState(null);

  const addRating = async (event: React.SyntheticEvent) => {
    const grade = (event.target as HTMLInputElement).value;
    try {
      const res = await dispatch(addRatingThunk(
        {
          bookId: Number(bookId),
          grade: Number(grade),
        },
      )).unwrap();
      setRating(+res.grade);
    } catch (error) {
      if (error instanceof AxiosError) {
        return toast(error.response?.data.message);
      }
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  useEffect(() => {
    const rating = user?.ratings.find((book) => book.bookId === +bookId);
    if (rating) {
      setRating(+rating.grade);
    }
  }, [bookId, user?.ratings]);

  return (
    <RatingStarsContainer>
      <div className="wrapper">
        <RatingStar
          name="read-only"
          defaultValue={1}
          readOnly max={1}
        />
        <span className="rating__integer">
          {bookRating}
        </span>
      </div>
      <div className="wrapper">
        <RatingStar
          name="half-rating"
          value={!rating ? 0 : rating}
          precision={0.5}
          onChange={addRating}
        />
        <img
          src={arrowRating}
          alt="arrow-rating"
          className="rating__arrow"
        />
        <span className="rating__rate-this">
          Rate this book
        </span>
      </div>
      <ToastContainer />
    </RatingStarsContainer>
  );
};

import { AxiosError } from 'axios';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { booksApi } from '../../../../api/booksApi';
import { setGenres } from '../../../../store/books/books';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks/hooks';
import { Genre } from './Genre/Genre';
import { SortGenreContainer } from './SortGenreContainer.styles';

export const SortGenre = () => {
  const genres = useAppSelector((state) => state.books.genres);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const res = await booksApi.getAllGenres();
        dispatch(setGenres(res.data));
      } catch (error) {
        if (error instanceof AxiosError) {
          return toast(error.response?.data.message);
        }
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, [dispatch]);

  return (
    <SortGenreContainer>
      <div className="sort__triangle" />
      {genres.map((genre) => {
        return (
          <Genre
            key={genre.id}
            title={genre.name}
          />);
      })}
    </SortGenreContainer>
  );
};

import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { booksApi } from '../../../../api/booksApi';
import { Genre } from './Genre/Genre';
import { SortGenreContainer } from './SortGenreContainer.styles';

export const SortGenre = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await booksApi.getAllGenres();
        setGenres(res.data.genres);
      } catch (error) {
        if (error instanceof AxiosError) {
          return toast(error.response?.data.message);
        }
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, [setGenres]);

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

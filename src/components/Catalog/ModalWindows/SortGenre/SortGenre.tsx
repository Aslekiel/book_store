import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { booksApi } from '../../../../api/booksApi';
import { Genre } from './Genre/Genre';
import { SortGenreContainer } from './SortGenreContainer.styles';

export const SortGenre = () => {
  const [genres, setGenres] = useState([]);
  const [filteredGenres, setFilteredGenres] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const filterByGenres = (id: number) => {
    if (!filteredGenres.includes(id)) {
      return setFilteredGenres((prevState) => [...prevState, id]);
    }

    setFilteredGenres((prevState) => prevState.filter((genreId) => genreId !== id));
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await booksApi.getAllGenres();
        setGenres(res.data);

        if (!filteredGenres.length) {
          searchParams.delete('genre');
          setSearchParams(searchParams);
          return;
        }

        searchParams.set('genre', filteredGenres.join());
        setSearchParams(searchParams);
      } catch (error) {
        if (error instanceof AxiosError) {
          return toast(error.response?.data.message);
        }
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, [filteredGenres, searchParams, setSearchParams]);

  return (
    <SortGenreContainer>
      <div className="sort__triangle" />
      {genres.map((genre) => {
        return (
          <Genre
            key={genre.id}
            id={genre.id}
            title={genre.name}
            filterByGenres={filterByGenres}
          />);
      })}
    </SortGenreContainer>
  );
};

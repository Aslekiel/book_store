import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { booksApi } from '../../../../api/booksApi';

import { Genre } from './Genre/Genre';

import { SortGenreContainer } from './SortGenreContainer.styles';

export const SortGenre = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const filterByGenres = (id: number) => {
    if (!selectedGenres.includes(id)) {
      return setSelectedGenres((prevState) => [...prevState, id]);
    }

    setSelectedGenres((prevState) => prevState.filter((genreId) => genreId !== id));
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await booksApi.getAllGenres();
        setGenres(res.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (!selectedGenres.length) {
      searchParams.delete('genre');
      setSearchParams(searchParams);
      return;
    }

    searchParams.set('genre', selectedGenres.join());
    setSearchParams(searchParams);
  }, [searchParams, selectedGenres, setSearchParams]);

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

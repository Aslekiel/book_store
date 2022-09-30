import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';

import { Books } from '../Catalog/Books/Books';
import { EmptyFavorite } from './EmptyFavorite/EmptyFavorite';

import { favoriteApi } from '../../api/favoriteApi';

import { FavoritePageContainer } from './FavoritePageContainer.styles';

export const FavoritePage = () => {
  const { favorites } = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await favoriteApi.getFavoriteBooks();
        setFavoriteBooks(res.data?.books);
      } catch (error) {
        throw new Error();
      }
    })();
  }, [dispatch, favorites.length]);

  return (
    <FavoritePageContainer>
      {
        !!favorites.length &&
        (
          <h2 className="favorite__title">
            Favorite
          </h2>
        )
      }
      {favorites.length
        ? <Books books={favoriteBooks} />
        : <EmptyFavorite />
      }
    </FavoritePageContainer>
  );
};

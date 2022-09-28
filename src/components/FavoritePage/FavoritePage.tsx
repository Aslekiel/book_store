import { useEffect } from 'react';
import { favoriteApi } from '../../api/favoriteApi';
import { setBooks } from '../../store/books/books';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { Books } from '../Catalog/Books/Books';
import { CatalogFilters } from '../Catalog/CatalogFilters/CatalogFilters';
import { EmptyFavorite } from './EmptyFavorite/EmptyFavorite';
import { FavoritePageContainer } from './FavoritePageContainer.styles';

export const FavoritePage = () => {
  const { favorites } = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const res = await favoriteApi.getFavoriteBooks();
        dispatch(setBooks(res.data));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, [dispatch, favorites.length]);

  return (
    <FavoritePageContainer>
      {!!favorites.length && <h2 className="favorite__title">Favorite</h2>}
      {favorites.length ? <Books /> : <EmptyFavorite />}
    </FavoritePageContainer>
  );
};

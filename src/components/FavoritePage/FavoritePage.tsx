import { useEffect } from 'react';
import { favoriteApi } from '../../api/favoriteApi';
import { setBooks } from '../../store/books/books';
import { useAppDispatch } from '../../store/hooks/hooks';
import { Books } from '../Catalog/Books/Books';
import { CatalogFilters } from '../Catalog/CatalogFilters/CatalogFilters';
import { FavoritePageContainer } from './FavoritePageContainer.styles';

export const FavoritePage = () => {
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
  }, [dispatch]);

  return (
    <FavoritePageContainer>
      <CatalogFilters title="Favorite" />
      <Books />
    </FavoritePageContainer>
  );
};

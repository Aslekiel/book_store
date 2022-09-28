import { useNavigate } from 'react-router-dom';
import { HeaderMenuContainer } from './HeaderMenu.styles';
import { ReactComponent as CartLogo } from '../../../assets/cart.svg';
import { ReactComponent as HeartLogo } from '../../../assets/heart.svg';
import { ReactComponent as UserLogo } from '../../../assets/user profile.svg';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import { favoriteApi } from '../../../api/favoriteApi';
import { setBooks } from '../../../store/books/books';

export const HeaderMenu = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);

  const onClickFavorite = () => {
    (async () => {
      try {
        const res = await favoriteApi.getFavoriteBooks();
        dispatch(setBooks(res.data));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  };

  return (
    <HeaderMenuContainer>
      <button
        className="header-menu__button"
        onClick={() => navigate('/cart')}
      >
        <CartLogo
          className="header-menu__logo"
        />
        {!!user?.cart.length &&
          (
            <div
              className="header-menu__logo__amount-books"
            >
              {user.cart.length}
            </div>
          )
        }
      </button>
      <button
        className="header-menu__button"
        onClick={onClickFavorite}
      >
        <HeartLogo
          className="header-menu__logo"
        />
        {!!user?.favorites.length &&
          (
            <div
              className="header-menu__logo__amount-books"
            >
              {user.favorites.length}
            </div>
          )
        }
      </button>
      <button
        className="header-menu__button"
        onClick={() => navigate('/user-profile')}
      >
        <UserLogo
          className="header-menu__logo"
        />
      </button>
    </HeaderMenuContainer>
  );
};

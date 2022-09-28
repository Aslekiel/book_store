import { useNavigate } from 'react-router-dom';
import { HeaderMenuContainer } from './HeaderMenu.styles';
import { ReactComponent as CartLogo } from '../../../assets/cart.svg';
import { ReactComponent as HeartLogo } from '../../../assets/heart.svg';
import { ReactComponent as UserLogo } from '../../../assets/user profile.svg';
import { useAppSelector } from '../../../store/hooks/hooks';

export const HeaderMenu = () => {
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.user.user);

  const booksAmount = !user ? 0 : user.cart?.reduce((acc, cart) => acc + cart.count, 0);

  return (
    <HeaderMenuContainer>
      <button
        className="header-menu__button"
        onClick={() => navigate('/cart')}
      >
        <CartLogo
          className="header-menu__logo"
        />
        {!!user.cart?.length &&
          (
            <div
              className="header-menu__logo__amount-books"
            >
              {booksAmount}
            </div>
          )
        }
      </button>
      <button
        className="header-menu__button"
        onClick={() => navigate('/favorite')}
      >
        <HeartLogo
          className="header-menu__logo"
        />
        {!!user.favorites?.length &&
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

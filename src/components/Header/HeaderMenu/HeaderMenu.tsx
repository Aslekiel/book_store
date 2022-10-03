import { Link } from 'react-router-dom';
import { HeaderMenuContainer } from './HeaderMenu.styles';
import { ReactComponent as CartLogo } from '../../../assets/cart.svg';
import { ReactComponent as HeartLogo } from '../../../assets/heart.svg';
import { ReactComponent as UserLogo } from '../../../assets/user profile.svg';
import { useAppSelector } from '../../../store/hooks/hooks';

export const HeaderMenu = () => {
  const user = useAppSelector((state) => state.user.user);

  const booksAmount = !user ? 0 : user.cart?.reduce((acc, cart) => acc + cart.count, 0);

  return (
    <HeaderMenuContainer>
      <Link
        className="header-menu__button"
        to="/cart"
      >
        <CartLogo
          className="header-menu__logo"
        />
        {!!user.cart?.length &&
          (
            <div
              className="header-menu__logo_amount-books"
            >
              {booksAmount}
            </div>
          )
        }
      </Link>
      <Link
        className="header-menu__button"
        to="/favorite"
      >
        <HeartLogo
          className="header-menu__logo"
        />
        {!!user.favorites?.length &&
          (
            <div
              className="header-menu__logo_amount-books"
            >
              {user.favorites.length}
            </div>
          )
        }
      </Link>
      <Link
        className="header-menu__button"
        to="/user-profile"
      >
        <UserLogo
          className="header-menu__logo"
        />
      </Link>
    </HeaderMenuContainer>
  );
};

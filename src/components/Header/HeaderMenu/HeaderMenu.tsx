import { HeaderMenuContainer } from './HeaderMenu.styles';
import { ReactComponent as CartLogo } from '../img/cart.svg';
import { ReactComponent as HeartLogo } from '../img/heart.svg';
import { ReactComponent as UserLogo } from '../img/user profile.svg';

export const HeaderMenu = () => {
  return (
    <HeaderMenuContainer>
      <button
        className="header-menu__button"
        onClick={() => {
          window.location.assign('http://localhost:3000/cart');
        }}>
        <CartLogo className="header-menu__logo header-menu__cart" />
      </button>
      <button className="header-menu__button">
        <HeartLogo className="header-menu__logo header-menu__heart" />
      </button>
      <button
        className="header-menu__button"
        onClick={() => {
          window.location.assign('http://localhost:3000/user-profile');
        }}>
        <UserLogo className="header-menu__logo header-menu__user" />
      </button>
    </HeaderMenuContainer>
  );
};

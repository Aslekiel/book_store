import { useNavigate } from 'react-router-dom';
import { HeaderMenuContainer } from './HeaderMenu.styles';
import { ReactComponent as CartLogo } from '../../../assets/cart.svg';
import { ReactComponent as HeartLogo } from '../../../assets/heart.svg';
import { ReactComponent as UserLogo } from '../../../assets/user profile.svg';

export const HeaderMenu = () => {
  const navigate = useNavigate();
  const cartPage = () => navigate('/cart');
  const userProfilePage = () => navigate('/user-profile');

  return (
    <HeaderMenuContainer>
      <button
        className="header-menu__button"
        onClick={cartPage}
      >
        <CartLogo className="header-menu__logo header-menu__cart" />
      </button>
      <button className="header-menu__button">
        <HeartLogo className="header-menu__logo header-menu__heart" />
      </button>
      <button
        className="header-menu__button"
        onClick={userProfilePage}
      >
        <UserLogo className="header-menu__logo header-menu__user" />
      </button>
    </HeaderMenuContainer>
  );
};

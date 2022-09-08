import { HeaderContainer } from './Header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <img className='header__logo' src="./img/logo.svg" alt="header-logo" />
      <a className='header__catalog' href="#">Catalog</a>
      <input className='header__input' type="text" placeholder='Search' />
      <button className='button header__button'>Log In/ Sign Up</button>
    </HeaderContainer>
  );
};

export default Header;

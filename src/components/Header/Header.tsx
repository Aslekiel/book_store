import { HeaderContainer } from './Header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <div className='header__wrapper'>
        <img className='header__logo' src="./img/logo.svg" alt="header-logo" />
        <form className='header__form' action="">
          <a className='header__catalog' href="#">Catalog</a>
          <input className='header__input' type="text" placeholder='Search' />
        </form>
        <button className='button header__button' onClick={() => {
          window.location.assign('http://localhost:3000/login');
        }}>
          <a className='button__login' href='http://localhost:3000/login'>Log In/</a>
          <a className='button__signup' href='http://localhost:3000/signup'> Sign Up</a>
          {/* Log In/ Sign Up */}
        </button>
      </div>
    </HeaderContainer>
  );
};

export default Header;

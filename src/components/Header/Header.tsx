import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { ReactComponent as HeaderLogo } from './img/logo.svg';
import { Input } from '../Input/Input';
import { HeaderContainer } from './Header.styles';

import { HeaderMenu } from './HeaderMenu/HeaderMenu';
import { LoginSignupButton } from '../LogiSignupButton/LogiSignupButton';
import type { IUser } from '../../store/reducers/user';

const Header = () => {
  const state = useSelector((state: IUser) => state);

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: (value) => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(value, null, 2));
    },
  });

  return (
    <HeaderContainer>
      <div className="header__wrapper">
        <nav className="header__nav">
          <HeaderLogo
            className="header__logo"
            onClick={() => {
              window.location.assign('http://localhost:3000/');
            }}
          />
          <a className="header__catalog" href="http://localhost:3000/catalog">
            Catalog
          </a>
        </nav>
        <form className="header__form" onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            name="search"
            placeholder="Search"
            value={formik.values.search}
            onChange={formik.handleChange}
          />
        </form>

        {!state.email ? <LoginSignupButton /> : <HeaderMenu />}
      </div>
    </HeaderContainer>
  );
};

export default Header;

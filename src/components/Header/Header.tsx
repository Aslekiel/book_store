import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as HeaderLogo } from '../../assets/logo.svg';
import { Input } from '../Input/Input';
import { HeaderContainer } from './Header.styles';

import { HeaderMenu } from './HeaderMenu/HeaderMenu';
import { LoginSignupButton } from '../LogiSignupButton/LogiSignupButton';
import { useAppSelector } from '../../store/hooks/hooks';

const Header = () => {
  const user = useAppSelector((state) => state.user.user?.email);

  const navigate = useNavigate();

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
            onClick={() => navigate('/')}
          />
          <Link
            className="header__catalog"
            to="/catalog"
          >
            Catalog
          </Link>
        </nav>
        <form
          className="header__form"
          onSubmit={formik.handleSubmit}
        >
          <Input
            type="text"
            name="search"
            placeholder="Search"
            value={formik.values.search}
            title="Search"
            onChange={formik.handleChange}
            isActive={false}
            defaultClassState={false}
          />
        </form>
        {!user ? <LoginSignupButton /> : <HeaderMenu />}
      </div>
    </HeaderContainer>
  );
};

export default Header;

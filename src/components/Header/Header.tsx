import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { ReactComponent as HeaderLogo } from '../../assets/logo.svg';
import { Input } from '../Input/Input';
import { HeaderContainer } from './Header.styles';

import { HeaderMenu } from './HeaderMenu/HeaderMenu';
import { LoginSignupButton } from '../LogiSignupButton/LogiSignupButton';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { booksApi } from '../../api/booksApi';
import { setBooks } from '../../store/books/books';

const Header = () => {
  const user = useAppSelector((state) => state.user.user?.email);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onClickHandler = () => {
    (async () => {
      try {
        const res = await booksApi.getAllBooks();
        dispatch(setBooks(res.data));
      } catch (error) {
        if (error instanceof AxiosError) {
          return toast(error.response?.data.message);
        }
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  };

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
            onClick={onClickHandler && (() => navigate('/'))}
          />
          <Link
            className="header__catalog"
            to="/catalog"
            onClick={onClickHandler}
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

import { useFormik } from 'formik';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';

import { booksApi } from '../../api/booksApi';

import { HeaderMenu } from './HeaderMenu/HeaderMenu';
import { LoginSignupButton } from '../LogiSignupButton/LogiSignupButton';
import { ReactComponent as HeaderLogo } from '../../assets/logo.svg';
import { Input } from '../Input/Input';

import { HeaderContainer } from './Header.styles';

const Header = () => {
  const user = useAppSelector((state) => state.user.user?.email);
  const dispatch = useAppDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  const [searchParams, setSearchParams] = useSearchParams(searchTerm || '');

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: () => {
      navigate('/');
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(event);
    setSearchTerm(event.currentTarget.value);
    searchParams.set('search', event.currentTarget.value);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    (async () => {
      try {
        await booksApi.getAllBooks({ search: searchTerm });

        if (!searchTerm.length) {
          searchParams.delete('search');
          setSearchParams(searchParams);
          return;
        }

        searchParams.set('search', searchTerm);
        setSearchParams(searchParams);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, searchTerm, searchParams]);

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
            onChange={handleChange}
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

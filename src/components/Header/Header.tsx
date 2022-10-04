import { useFormik } from 'formik';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useAppSelector } from '../../store/hooks/hooks';

import { booksApi } from '../../api/booksApi';

import { HeaderMenu } from './HeaderMenu/HeaderMenu';
import { LoginSignupButton } from '../LogiSignupButton/LogiSignupButton';
import { ReactComponent as HeaderLogo } from '../../assets/logo.svg';
import { Input } from '../Input/Input';

import { HeaderContainer } from './Header.styles';

const Header = () => {
  const user = useAppSelector((state) => state.user.user?.email);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: () => {
      navigate(`/catalog/?search=${searchParams.get('search')}`);
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(event);
    setSearchTerm(event.currentTarget.value);

    if (!event.currentTarget.value) {
      searchParams.delete('search');
      setSearchParams(searchParams);
      return;
    }

    searchParams.set('search', event.currentTarget.value);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    (async () => {
      try {
        if (debouncedSearchTerm) {
          await booksApi.getAllBooks({ search: searchTerm });
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, [debouncedSearchTerm, searchTerm]);

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

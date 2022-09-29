import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ReactComponent as HeaderLogo } from '../../assets/logo.svg';
import { Input } from '../Input/Input';
import { HeaderContainer } from './Header.styles';

import { HeaderMenu } from './HeaderMenu/HeaderMenu';
import { LoginSignupButton } from '../LogiSignupButton/LogiSignupButton';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { setBooks } from '../../store/books/books';
import { booksApi } from '../../api/booksApi';

const Header = () => {
  const user = useAppSelector((state) => state.user.user?.email);
  const dispatch = useAppDispatch();

  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: () => {
      navigate('/search');
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(event);
    setSearchTerm(event.currentTarget.value);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await booksApi.getAllBooks();
        const results = res.data.books
          .filter((book) => book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm));
        dispatch(setBooks({ books: results }));
        if (searchTerm.length) {
          navigate('/search');
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, searchTerm]);

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
